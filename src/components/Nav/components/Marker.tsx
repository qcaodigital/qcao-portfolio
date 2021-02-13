import styles from './Marker.module.scss';
import { motion } from 'framer-motion';

interface MarkerProps {
	paths: string[];
	currentPath: number;
}

export default function Marker({ paths, currentPath }: MarkerProps) {
	return (
		<motion.div
			className={styles.NavMarker}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			{paths.map(
				(path: string, idx: number): JSX.Element => (
					<div
						key={path}
						id={styles[path]}
						className={idx === currentPath ? styles.active : ''}
					></div>
				)
			)}
		</motion.div>
	);
}
