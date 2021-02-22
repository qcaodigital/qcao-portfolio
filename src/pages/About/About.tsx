import styles from './About.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { transitions } from './About.transitions';
import { Dispatch, SetStateAction, useRef, useState, useEffect } from 'react';
import CTAContainer from './components/CTAContainer';
import Sub from './components/Sub';
import Skillset from './components/Skillset';
import Who from './components/Who';
import Resume from './components/Resume';

interface AboutProps {
	navDirection: 'up' | 'down';
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
}

export default function About({ navDirection, isSubpathOpen, setIsSubpathOpen }: AboutProps) {
	const sectionRef = useRef<HTMLElement | null>(null);
	const [hasPhysicalScrollbar, setHasPhysicalScrollbar] = useState<boolean>(
		window.outerWidth > window.innerWidth
	);

	useEffect(() => {
		function handleResize(): void {
			if (window.outerWidth > window.innerWidth) {
				setHasPhysicalScrollbar(true);
			} else {
				setHasPhysicalScrollbar(false);
			}
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<motion.section
			ref={sectionRef}
			id={styles.About}
			initial={navDirection === 'down' ? 'top' : 'bottom'}
			animate='animate'
			exit={navDirection === 'down' ? 'bottom' : 'top'}
			variants={transitions.transUp}
			style={{
				overflowY: isSubpathOpen ? 'scroll' : 'hidden',
			}}
		>
			<section id={styles.landing}>
				<div
					className={`${styles.img} ${isSubpathOpen && styles.subpathOpen} ${
						hasPhysicalScrollbar && styles.hasPhysicalScrollbar
					}`}
				>
					<div id={styles.top} className={styles.bracket} />
					<img src='/imgs/portrait-desat.jpg' alt='Sihouette of Quan Cao' />
					<div id={styles.bottom} className={styles.bracket} />
				</div>
				<header>
					<h1>About Me</h1>
					<h2>
						I'm a full-stack web developer specializing in the MERN stack. One year ago
						I left my career as an accomplished business manager in the hospitality
						industry to pursue becoming a developer.
					</h2>
					<CTAContainer
						isSubpathOpen={isSubpathOpen}
						setIsSubpathOpen={setIsSubpathOpen}
						transitions={transitions}
						sectionRef={sectionRef}
					/>
				</header>
				<AnimatePresence exitBeforeEnter>
					{isSubpathOpen && (
						<motion.div
							className={styles.scrollCTA}
							animate='animate'
							initial='initial'
							exit='exit'
							variants={transitions.scrollCTA}
						>
							<p>scrolldown</p>
							<div></div>
						</motion.div>
					)}
				</AnimatePresence>
			</section>
			<Sub id='1' heading='Who I Am'>
				<Who />
			</Sub>
			<Sub id='2' heading='Skillset'>
				<Skillset />
			</Sub>
			<Sub id='3' heading='Resume'>
				<Resume sectionRef={sectionRef} />
			</Sub>
		</motion.section>
	);
}
