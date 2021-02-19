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
import { navLinkType } from './types';
// import Cube from './pages/Home/components/Cube';

interface customCSS extends CSSProperties {
	'--trueHeight': string;
}

export default function App() {
	// const paths: string[] = useMemo(() => ['/', '/about'], []);
	const viewport: viewportType = useViewport();
	const [isHBMOpen, setIsHBMOpen] = useState<boolean>(false);
	const navLinks = useNavState();
	const location = useLocation();
	const [screenHeight] = useGetVisibleScreenHeight();
	//**FIGURE OUT HOW TO EXTRACT PATH'S INDEX BY MATCHING ITS PATHNAME PROPERTY TO LOCATION.PATHNAME */
	const [currentPathIdx, setCurrentPathIdx] = useState<number>(
		navLinks.indexOf(navLinks.filter((link) => link.pathname === location.pathname)[0])
	);
	const [isSubpathOpen, setIsSubpathOpen] = useState<boolean>(false);
	const [direction, setDirection] = useWheelSwipe(
		navLinks,
		currentPathIdx,
		setCurrentPathIdx,
		isSubpathOpen
	);

	useEffect(() => {
		setIsSubpathOpen(false);
		setCurrentPathIdx(
			navLinks.indexOf(navLinks.filter((link) => link.pathname === location.pathname)[0])
		);
	}, [location.pathname, navLinks]);

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	return (
		<main
			className={styles.App}
			style={
				{
					'--trueHeight': `${screenHeight}px`,
				} as customCSS
			}
		>
			<p
				style={{
					color: 'white',
					backgroundColor: 'black',
					display: 'inline-block',
					padding: '.5rem',
					position: 'fixed',
					zIndex: 1000,
				}}
			>
				page: {currentPathIdx} | viewport: {viewport.label} (min-width: {viewport.minWidth})
			</p>
			<div className={styles.background}></div>
			<Nav
				setIsHBMOpen={setIsHBMOpen}
				isHBMOpen={isHBMOpen}
				currentPathIdx={currentPathIdx}
				isSubpathOpen={isSubpathOpen}
				setCurrentPathIdx={setCurrentPathIdx}
				setDirection={setDirection}
				navLinks={navLinks}
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
								setCurrentPathIdx={setCurrentPathIdx}
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
