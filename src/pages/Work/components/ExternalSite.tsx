import styles from './ExternalSite.module.scss';
import { motion } from 'framer-motion';
import { transitions } from './ExternalSite.transitions';
import { useState } from 'react';
import { useEffect } from 'react';

interface ExternalSiteProps {
	link: string;
	closePreview: () => void;
}

export default function ExternalSite({ link, closePreview }: ExternalSiteProps) {
	const [size, setSize] = useState<'default' | 'maximize' | null>(null);
	const [transitionStyle, setTransitionStyle] = useState<any>({});
	const windowResizeTransitionDur = 350;

	useEffect(() => {
		setTimeout(() => {
			setTransitionStyle({ height: '', width: '' });
		}, windowResizeTransitionDur);
	}, [size]);

	function handleClick(size: 'default' | 'maximize') {
		setTransitionStyle({ transition: `${windowResizeTransitionDur}ms ease` });
		setSize(size);
	}

	return (
		<motion.div initial='initial' exit='exit' animate='animate' variants={transitions.stagger}>
			<motion.div className={styles.modal} variants={transitions.modal} />
			<motion.div
				className={styles.iframe}
				variants={transitions.iframe}
				data-size={size}
				style={transitionStyle}
			>
				<div className={styles.container}>
					<object type='text/html' data={link} aria-label='external website'></object>
					<div className={styles.bar}>
						<div className={styles.buttons}>
							<button
								className={styles.close}
								aria-label='close'
								onClick={closePreview}
							></button>
							<button
								className={styles.minimize}
								aria-label='minimize'
								onClick={handleClick.bind(null, 'default')}
							/>
							<button
								className={styles.maximize}
								aria-label='maxmimize'
								onClick={handleClick.bind(null, 'maximize')}
							/>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
