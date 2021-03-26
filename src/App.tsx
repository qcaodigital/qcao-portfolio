import styles from './App.module.scss';
import { useManageState } from './components/hooks/useManageState';
import { CSSProperties, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/Nav/';
import Home from './pages/Home/';
import About from './pages/About/';
import Work from './pages/Work/';
import HBM from './components/Nav/components/HBM';
import Background from './components/common/Background';
import SectionWrapper from './components/common/SectionWrapper';
import { useEffect } from 'react';
import Contact from './pages/Contact/Contact';

interface customCSS extends CSSProperties {
	'--trueHeight': string;
}

export default function App() {
	const currentSectionRef = useRef<HTMLElement | null>(null);
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

	//disable touch screen zooming on non-subpath pages
	useEffect(() => {
		if (isSubpathOpen) {
			document.body.style.touchAction = 'unset';
		} else {
			document.body.style.touchAction = 'pan-down';
		}
	}, [isSubpathOpen]);

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
			<AnimatePresence exitBeforeEnter initial={true}>
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
								setIsSubpathOpen={setIsSubpathOpen}
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
					<Route
						exact
						path='/work'
						render={() => (
							<SectionWrapper
								direction={direction}
								isSubpathOpen={isSubpathOpen}
								sectionRef={currentSectionRef}
								setIsSubpathOpen={setIsSubpathOpen}
							>
								<Work
									isSubpathOpen={isSubpathOpen}
									setIsSubpathOpen={setIsSubpathOpen}
									setDirection={setDirection}
									sectionRef={currentSectionRef}
									viewport={viewport}
								/>
							</SectionWrapper>
						)}
					/>
					<Route
						exact
						path='/contact'
						render={() => (
							<SectionWrapper
								direction={direction}
								isSubpathOpen={isSubpathOpen}
								sectionRef={currentSectionRef}
								setIsSubpathOpen={setIsSubpathOpen}
							>
								<Contact
									isSubpathOpen={isSubpathOpen}
									sectionRef={currentSectionRef}
									setIsSubpathOpen={setIsSubpathOpen}
									viewport={viewport}
								/>
							</SectionWrapper>
						)}
					/>
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
