import styles from './ScrollCTA.module.scss';
import { transitions } from './ScrollCTA.transitions';
import { motion } from 'framer-motion';
import Link from '../../../components/common/Link';
import { Dispatch, SetStateAction } from 'react';

interface ScrollCTAProps {
	setDirection: Dispatch<SetStateAction<'up' | 'down'>>;
	setCurrentPath: Dispatch<SetStateAction<number>>;
}

export default function ScrollCTA({ setDirection, setCurrentPath }: ScrollCTAProps) {
	return (
		<motion.div id={styles.ScrollCTA} initial='initial' animate='animate' exit='exit'>
			<motion.div variants={transitions.textbox} className={styles.textBox}>
				<motion.p variants={transitions.text}>scroll.</motion.p>
			</motion.div>
			<Link
				to='/about'
				callBefore={() => setDirection('down')}
				callAfter={() => setCurrentPath(1)}
			>
				<motion.div variants={transitions.circle} className={styles.circle}>
					<div className={styles.arrow} />
					<div className={styles.arrow} />
					<div className={styles.arrow} />
				</motion.div>
			</Link>
			<motion.div className={styles.line} variants={transitions.line}></motion.div>
		</motion.div>
	);
}
