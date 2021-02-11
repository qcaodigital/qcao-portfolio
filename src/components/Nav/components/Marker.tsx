import styles from './Marker.module.scss';
import { motion } from 'framer-motion';

export default function NavMarker() {
	return (
		<motion.div
			className={styles.NavMarker}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<div className={styles.active}></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</motion.div>
	);
}
