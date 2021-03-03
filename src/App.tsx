import styles from './App.module.scss';
import { useManageState } from './components/hooks/useManageState';
import { CSSProperties, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import HBM from './components/Nav/components/HBM';
import Background from './components/common/Background';
import SectionWrapper from './components/common/SectionWrapper';

interface customCSS extends CSSProperties {
	'--trueHeight': string;
}

export default function App() {
	const location = useLocation();
	const {
		isHBMOpen,
		setIsHBMOpen,
		direction,
		setDirection,
		viewport,
		screenHeight,
		setCurrentPathIdx,
		currentPathIdx,
		isSubpathOpen,
		setIsSubpathOpen,
		navLinks,
	} = useManageState();

	const currentSectionRef = useRef<HTMLElement | null>(null);

	return (
		<main
			className={styles.App}
			style={
				{
					'--trueHeight': `${screenHeight}px`,
				} as customCSS
			}
		>
			<Background
				isSubpathOpen={isSubpathOpen}
				viewport={viewport}
				currentPathIdx={currentPathIdx}
			/>
			<Nav
				setIsHBMOpen={setIsHBMOpen}
				isHBMOpen={isHBMOpen}
				currentPathIdx={currentPathIdx}
				isSubpathOpen={isSubpathOpen}
				setCurrentPathIdx={setCurrentPathIdx}
				setDirection={setDirection}
				navLinks={navLinks}
			/>
			<AnimatePresence exitBeforeEnter initial={false}>
				<Switch location={location} key={location.pathname}>
					<Route
						exact
						path='/'
						render={() => (
							<Home
								direction={direction}
								setDirection={setDirection}
								setCurrentPathIdx={setCurrentPathIdx}
							/>
						)}
					/>
					<Route
						exact
						path='/about'
						render={() => (
							<SectionWrapper
								direction={direction}
								isSubpathOpen={isSubpathOpen}
								sectionRef={currentSectionRef}
							>
								<About
									isSubpathOpen={isSubpathOpen}
									setIsSubpathOpen={setIsSubpathOpen}
									setDirection={setDirection}
									sectionRef={currentSectionRef}
								/>
							</SectionWrapper>
						)}
					/>
					{/* <Route
						exact
						path='/work'
						render={() => (
							<SectionWrapper direction={direction} isSubpathOpen={isSubpathOpen}>
								<About
									isSubpathOpen={isSubpathOpen}
									setIsSubpathOpen={setIsSubpathOpen}
									setDirection={setDirection}
								/>
							</SectionWrapper>
						)}
					/> */}
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
