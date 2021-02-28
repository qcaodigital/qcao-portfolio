import styles from './Sub.module.scss';
import { useState } from 'react';
import InViewState from './../../../components/utils/InViewState';
import { motion } from 'framer-motion';
import { transitions } from '../About.transitions';

interface SubProps {
	id: string;
	heading: string;
	children: React.ReactNode;
}

export default function Sub({ id, heading, children }: SubProps) {
	const [headerInView, setHeaderInView] = useState<boolean>(false);

	return (
		<section id={styles[id]} className={styles.Sub}>
			<InViewState as='header' stateSetter={setHeaderInView} triggerOnce>
				<h3 className={styles.subSectionHeader} data-in-view={headerInView}>
					<span className={styles.numberMarker}>0{id}</span>
					<motion.p
						className={styles.mainText}
						animate={headerInView ? 'animate' : 'initial'}
						variants={transitions.stagger}
					>
						{[...heading].map((letter: string, idx: number) => {
							if (letter.indexOf(' ') >= 0) {
								return (
									<motion.span key={idx} className={styles.empty}></motion.span>
								);
							} else {
								return (
									<motion.span key={idx} variants={transitions.subHeader}>
										{letter}
									</motion.span>
								);
							}
						})}
					</motion.p>
				</h3>
			</InViewState>
			<div className={styles.content}>{children}</div>
		</section>
	);
}
