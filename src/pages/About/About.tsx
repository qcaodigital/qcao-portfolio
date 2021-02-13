import styles from './About.module.scss';
import { motion } from 'framer-motion';
import img from '../../assets/imgs/portrait-desat.jpg';
import { transitions } from './About.transitions';
import { Dispatch, SetStateAction } from 'react';

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
		>
			<motion.section id={styles.landing} variants={transitions.landing}>
				<div
					className={`${styles.img} ${isSubpathOpen && styles.subpathOpen}`}
					style={{ backgroundImage: `url(${img})` }}
				></div>
				<header>
					<h1>About Me</h1>
					{/* eslint-disable-next-line */}
					<p>//</p>
					<h2>
						I'm a full-stack web developer specializing in the MERN stack. One year ago
						I left my career as an accomplished business manager in the hospitality
						industry to pursue becoming a developer.
					</h2>
					<button
						className={styles.CTA}
						onClick={() => setIsSubpathOpen((curr) => !curr)}
					>
						Read more
					</button>
				</header>
			</motion.section>
			<section></section>
		</motion.section>
	);
}
