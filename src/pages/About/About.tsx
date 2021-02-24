import styles from './About.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { transitions } from './About.transitions';
import { Dispatch, SetStateAction, useRef, useState, useEffect } from 'react';
import CTAContainer from './components/CTAContainer';
import Sub from './components/Sub';
import Skillset from './components/Skillset';
import Who from './components/Who';
import Resume from './components/Resume';
import ToTop from './../../components/common/ToTop';
import Next from '../../components/common/Next';

interface AboutProps {
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	setDirection: Dispatch<SetStateAction<'up' | 'down'>>;
}

export default function About({ isSubpathOpen, setIsSubpathOpen, setDirection }: AboutProps) {
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
			animate='animate'
			initial='initial'
			exit='exit'
			ref={sectionRef}
			id={styles.About}
			style={{
				overflowY: isSubpathOpen ? 'scroll' : 'hidden',
			}}
		>
			<section id={styles.landing}>
				<motion.div
					className={`${styles.imgContainer} ${isSubpathOpen && styles.subpathOpen} ${
						hasPhysicalScrollbar && styles.hasPhysicalScrollbar
					}`}
					variants={transitions.img}
				>
					<motion.div
						variants={transitions.bracket}
						id={styles.top}
						className={styles.bracket}
					/>
					<img src='/imgs/portrait-desat.jpg' alt='Sihouette of Quan Cao' />
					<motion.div className={styles.bar} variants={transitions.bar} />
					<motion.div
						variants={transitions.bracket}
						id={styles.bottom}
						className={styles.bracket}
					/>
				</motion.div>
				<motion.header variants={transitions.stagger}>
					<motion.h1 variants={transitions.headerChildren}>About Me</motion.h1>
					<motion.h2 variants={transitions.headerChildren}>
						I'm a full-stack web developer specializing in the MERN stack. One year ago
						I left my career as an accomplished business manager in the hospitality
						industry to pursue becoming a developer.
					</motion.h2>
					<CTAContainer
						isSubpathOpen={isSubpathOpen}
						setIsSubpathOpen={setIsSubpathOpen}
						transitions={transitions}
						sectionRef={sectionRef}
						passedVariant={transitions.headerChildren}
					/>
				</motion.header>
				<AnimatePresence exitBeforeEnter>
					{isSubpathOpen && (
						<motion.div
							animate='animate'
							initial='initial'
							exit='exit'
							className={styles.scrollCTA}
							variants={transitions.scrollCTA}
						>
							<p>scrolldown</p>
							<div className={styles.line}></div>
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
			<ToTop
				sectionRef={sectionRef}
				setIsSubpathOpen={setIsSubpathOpen}
				isSubpathOpen={isSubpathOpen}
			/>
			<Next
				className={styles.next}
				sectionRef={sectionRef}
				pushTo='/'
				buttonText='See my work'
				setDirection={setDirection}
				setIsSubpathOpen={setIsSubpathOpen}
			/>
		</motion.section>
	);
}
