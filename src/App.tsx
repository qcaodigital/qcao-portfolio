import styles from './App.module.scss';
import { useState, useEffect, useMemo, CSSProperties } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useViewport from './components/hooks/useViewport';
import { viewportType } from './components/hooks/useViewport';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import HBM from './components/Nav/components/HBM';
import useNavState from './components/hooks/useNavState';
import { useGetVisibleScreenHeight } from './components/hooks/useGetVisibleScreenHeight';
import useWheelSwipe from './components/hooks/useWheelSwipe';

interface customCSS extends CSSProperties {
	'--trueHeight': string;
}

export default function App() {
	const paths: string[] = useMemo(() => ['/', '/about'], []);
	const viewport: viewportType = useViewport();
	const [isHBMOpen, setIsHBMOpen] = useState<boolean>(false);
	const navLinks = useNavState();
	const location = useLocation();
	const [screenHeight] = useGetVisibleScreenHeight();
	const [currentPath, setCurrentPath] = useState<number>(paths.indexOf(location.pathname));
	const [isSubpathOpen, setIsSubpathOpen] = useState<boolean>(false);
	const [direction, setDirection] = useWheelSwipe(
		paths,
		currentPath,
		setCurrentPath,
		isSubpathOpen
	);

	useEffect(() => {
		setIsSubpathOpen(false);
		setCurrentPath(paths.indexOf(location.pathname));
	}, [location.pathname, paths]);

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	return (
		<main
			className={styles.App}
			style={
				{
					'--trueHeight': `${screenHeight}px`,
					height: screenHeight,
					overflowY: `${isSubpathOpen ? 'unset' : 'hidden'}`,
				} as customCSS
			}
		>
			<div className={styles.background} />
			<Nav
				setIsHBMOpen={setIsHBMOpen}
				isHBMOpen={isHBMOpen}
				paths={paths}
				currentPath={currentPath}
				isSubpathOpen={isSubpathOpen}
				setCurrentPath={setCurrentPath}
				setDirection={setDirection}
			/>
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route
						exact
						path='/'
						render={() => (
							<Home
								viewport={viewport}
								navDirection={direction}
								setDirection={setDirection}
								setCurrentPath={setCurrentPath}
							/>
						)}
					/>
					<Route
						exact
						path='/about'
						render={() => (
							<About
								navDirection={direction}
								isSubpathOpen={isSubpathOpen}
								setIsSubpathOpen={setIsSubpathOpen}
							/>
						)}
					/>
					{/* <Route exact path='/work' render={() => <About />} /> */}
				</Switch>
			</AnimatePresence>
			<AnimatePresence>
				{isHBMOpen && (
					<HBM key='hbm' navLinks={navLinks} closeHBM={() => setIsHBMOpen(false)} />
				)}
			</AnimatePresence>
		</main>
	);
}
