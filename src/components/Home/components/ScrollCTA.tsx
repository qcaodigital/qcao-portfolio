import styles from './ScrollCTA.module.scss';
import { motion } from 'framer-motion';
import transitionsFunc from './ScrollCTA.transitions';
import { useState, useEffect } from 'react';
import { allViewports } from './../../hooks/useViewport';

interface ScrollCTAProps {
	viewport: object;
}

interface transitions {
	text: any;
	textbox: any;
	line: any;
	circle: any;
}

export default function ScrollCTA({ viewport }: ScrollCTAProps) {
	const [clicked, setClicked] = useState<boolean>(false);
	let transitions: transitions = transitionsFunc(viewport, allViewports);

	useEffect(() => {
		transitions = transitionsFunc(viewport, allViewports);
		console.log(transitions.line.load);
	}, [viewport]);

	return (
		<motion.div
			id={styles.ScrollCTA}
			initial='initial'
			animate={clicked ? 'animate' : 'load'}
		>
			<motion.div
				variants={transitions.textbox}
				className={styles.textBox}
			>
				<motion.p variants={transitions.text}>scroll.</motion.p>
			</motion.div>
			<motion.div
				variants={transitions.circle}
				className={styles.circle}
				onClick={() => setClicked((curr) => !curr)}
			>
				<div className={styles.arrow} />
				<div className={styles.arrow} />
				<div className={styles.arrow} />
			</motion.div>
			<motion.div
				className={styles.line}
				variants={transitions.line}
			></motion.div>
		</motion.div>
	);
}
