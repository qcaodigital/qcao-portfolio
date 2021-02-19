import styles from './Marker.module.scss';
import { motion } from 'framer-motion';
import Link from './../../common/Link';
import { navLinksType, navLinkType } from '../../../types';
import { Dispatch, SetStateAction } from 'react';
import { directionType } from '../../hooks/useWheelSwipe';

interface MarkerProps {
	currentPathIdx: number;
	navLinks: navLinksType;
	setDirection: Dispatch<SetStateAction<directionType>>;
}

export default function Marker({ currentPathIdx, navLinks, setDirection }: MarkerProps) {
	return (
		<motion.div
			className={`${styles.NavMarker}`}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			{navLinks.map(
				(link: navLinkType, idx: number): JSX.Element => (
					<div
						key={link.desc}
						id={styles[link.desc]}
						className={idx === currentPathIdx ? styles.active : ''}
					>
						<Link
							to={link.pathname}
							callBefore={() => {
								if (idx < currentPathIdx) {
									setDirection('up');
								} else {
									setDirection('down');
								}
							}}
						/>
						<p>to: {link.desc}</p>
					</div>
				)
			)}
		</motion.div>
	);
}
