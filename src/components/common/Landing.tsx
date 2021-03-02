import { AnimatePresence, motion } from 'framer-motion';
import { transitions } from './Landing.transitions';
import styles from './Landing.module.scss';
import CTAContainer from './CTAContainer';
import { Dispatch, SetStateAction } from 'react';

interface LandingProps {
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
}

export default function Landing({ isSubpathOpen, setIsSubpathOpen, sectionRef }: LandingProps) {
	return (
		<section id={styles.landing}>
			<motion.div
				className={`${styles.imgContainer} ${isSubpathOpen && styles.subpathOpen}`}
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
					I'm a full-stack web developer specializing in the MERN stack. One year ago I
					left my career as an accomplished business manager in the hospitality industry
					to pursue becoming a developer.
				</motion.h2>
				<CTAContainer
					isSubpathOpen={isSubpathOpen}
					setIsSubpathOpen={setIsSubpathOpen}
					transitions={transitions}
					sectionRef={sectionRef}
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
	);
}
