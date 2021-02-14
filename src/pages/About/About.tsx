import styles from './About.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import img from '../../assets/imgs/portrait-desat.jpg';
import { transitions } from './About.transitions';
import { Dispatch, SetStateAction } from 'react';
import Sub from './components/Sub';
import { scrollToCallback } from '../../helpers/scrollToCallback';

interface AboutProps {
	navDirection: 'up' | 'down';
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
}

export default function About({ navDirection, isSubpathOpen, setIsSubpathOpen }: AboutProps) {
	return (
		<motion.section
			id={styles.About}
			initial={navDirection === 'down' ? 'top' : 'bottom'}
			animate='animate'
			exit={navDirection === 'down' ? 'bottom' : 'top'}
			variants={transitions.transUp}
		>
			<motion.section id={styles.landing}>
				<motion.img
					src={img}
					alt='Sihouette of Quan Cao'
					className={`${styles.img} ${isSubpathOpen && styles.subpathOpen}`}
				/>
				<motion.header>
					<motion.h1>About Me</motion.h1>
					{/* eslint-disable-next-line */}
					<motion.p>//</motion.p>
					<motion.h2>
						I'm a full-stack web developer specializing in the MERN stack. One year ago
						I left my career as an accomplished business manager in the hospitality
						industry to pursue becoming a developer.
					</motion.h2>
					<div className={styles.ctaContainer}>
						<AnimatePresence exitBeforeEnter>
							{isSubpathOpen ? (
								<motion.button
									key='back'
									animate='animate'
									initial='initial'
									exit='exit'
									variants={transitions.buttons}
									onClick={() => {
										scrollToCallback(
											{ top: 0, behavior: 'smooth' },
											setIsSubpathOpen.bind(null, false)
										);
									}}
								>
									<span>Back</span>
								</motion.button>
							) : (
								<motion.button
									key='open subpath'
									animate='animate'
									initial='initial'
									exit='exit'
									variants={transitions.buttons}
									onClick={() => {
										setIsSubpathOpen(true);
									}}
								>
									<span>Read more</span>
								</motion.button>
							)}
						</AnimatePresence>
					</div>
				</motion.header>
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
			</motion.section>
			<Sub />
		</motion.section>
	);
}
