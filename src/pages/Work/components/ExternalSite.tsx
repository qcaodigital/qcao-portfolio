import styles from './ExternalSite.module.scss';
import { motion } from 'framer-motion';
import { transitions } from './ExternalSite.transitions';

interface ExternalSiteProps {
	link: string;
	closePreview: () => void;
}

export default function ExternalSite({ link, closePreview }: ExternalSiteProps) {
	return (
		<motion.div initial='initial' exit='exit' animate='animate' variants={transitions.stagger}>
			<motion.div className={styles.modal} variants={transitions.modal} />
			<motion.div className={styles.iframe} variants={transitions.iframe}>
				<div className={styles.container}>
					<object type='text/html' data={link} aria-label='external website'></object>
					<div className={styles.bar}>
						<div className={styles.buttons}>
							<button
								className={styles.close}
								aria-label='close'
								onClick={closePreview}
							></button>
							<button className={styles.minimize} aria-label='minimize' />
							<button className={styles.maximize} aria-label='maxmimize' />
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
