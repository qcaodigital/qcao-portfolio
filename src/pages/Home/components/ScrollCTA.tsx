import styles from './ScrollCTA.module.scss';
import { transitions } from './ScrollCTA.transitions';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { viewportType } from './../../../components/hooks/useViewport';
import Link from '../../../components/common/Link';

interface ScrollCTAProps {
	viewport: viewportType;
	setDirection: (direction: string) => {};
}

export default function ScrollCTA({ viewport, setDirection }: ScrollCTAProps) {
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
			<Link to='/about' callBefore={() => setDirection('down')}>
				<motion.div
					variants={transitions.circle}
					className={styles.circle}
					onClick={() => setClicked((curr) => !curr)}
				>
					<div className={styles.arrow} />
					<div className={styles.arrow} />
					<div className={styles.arrow} />
				</motion.div>
			</Link>
			<motion.div
				className={styles.line}
				custom={viewport.rank}
				variants={transitions.line}
			></motion.div>
		</motion.div>
	);
}
