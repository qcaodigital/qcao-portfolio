import styles from './About.module.scss';
import { motion } from 'framer-motion';
import img from '../../assets/imgs/portrait-desat.jpg';

interface AboutProps {
	pathname: string;
}

export default function About({ pathname }: AboutProps) {
	return (
		<motion.section
			id={styles.About}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div
				className={styles.content}
				style={{ backgroundImage: `url(${img})` }}
			>
				<header>
					<h1>About Me</h1>
					{/* eslint-disable-next-line */}
					<p>//</p>
					<h2>
						I'm a full-stack web developer specializing in the MERN
						stack. One year ago I left my career as an accomplished
						business manager in the hospitality industry to pursue
						becoming a developer.
					</h2>
					<button className={styles.CTA}>Read more</button>
				</header>
			</div>
		</motion.section>
	);
}
