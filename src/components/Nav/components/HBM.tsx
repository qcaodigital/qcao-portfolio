import { motion } from 'framer-motion';
import { navLinksType, navLinkType } from '../../../types';
import { viewportType } from './../../hooks/useViewport';
import styles from './HBM.module.scss';

interface HBMProps {
	viewport: viewportType;
	navLinks: navLinksType;
}

export default function HBM({ viewport, navLinks }: HBMProps) {
	return (
		<motion.ul
			className={styles.HBM}
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
		>
			{navLinks.map(
				(link: navLinkType): JSX.Element => (
					<li>{link.label}</li>
				)
			)}
		</motion.ul>
	);
}
