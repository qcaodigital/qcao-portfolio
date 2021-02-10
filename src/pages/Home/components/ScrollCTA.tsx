import styles from './ScrollCTA.module.scss';
import transitions from './ScrollCTA.transitions';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { viewportType } from './../../../components/hooks/useViewport';

interface ScrollCTAProps {
	viewport: viewportType;
}

export default function ScrollCTA({ viewport }: ScrollCTAProps) {
	const [clicked, setClicked] = useState<boolean>(false);

	return (
		<motion.div
			id={styles.ScrollCTA}
			initial='initial'
			animate={clicked ? 'animate' : 'load'}
			exit='animate'
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
				variants={
					viewport.rank <= 3 ? transitions.line : transitions.lineLg
				}
			></motion.div>
		</motion.div>
	);
}
