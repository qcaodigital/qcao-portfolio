import { motion } from 'framer-motion';
import { navLinksType, navLinkType } from '../../../types';
import styles from './HBM.module.scss';
import { transitions } from './HBM.transitions';
import Link from './../../common/Link';

interface HBMProps {
	navLinks: navLinksType;
	closeHBM: () => void;
}

export default function HBM({ navLinks, closeHBM }: HBMProps) {
	return (
		<motion.div className={styles.HBM} initial='initial' animate='animate' exit='exit'>
			<motion.div className={styles.background} variants={transitions.background} />
			<motion.ul variants={transitions.container}>
				{navLinks.map(
					(link: navLinkType): JSX.Element => (
						<motion.li
							id={link.isActive ? styles.active : undefined}
							className={styles.link}
							key={link.label}
						>
							<Link to={link.pathname} callAfter={closeHBM}>
								<motion.span variants={transitions.text}>
									{link.label}
									<div className={styles.underline}></div>
								</motion.span>
							</Link>
						</motion.li>
					)
				)}
			</motion.ul>
		</motion.div>
	);
}
