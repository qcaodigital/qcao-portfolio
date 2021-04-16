import { motion } from 'framer-motion';
import { navLinksType, navLinkType } from '../../../types';
import styles from './HBM.module.scss';
import { transitions } from './HBM.transitions';
import Link from './../../common/Link';
import { useEffect } from 'react';

interface HBMProps {
	navLinks: navLinksType;
	closeHBM: () => void;
}

export default function HBM({ navLinks, closeHBM }: HBMProps) {
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent): void | null =>
			e.key === 'Escape' ? closeHBM() : null;

		window.addEventListener('keyup', handleEsc);
		return () => window.removeEventListener('keyup', handleEsc);
	}, [closeHBM]);

	return (
		<motion.div className={styles.HBM} initial='initial' animate='animate' exit='exit'>
			<motion.div
				className={styles.background}
				variants={transitions.background}
				style={{ backgroundImage: `url(${'/imgs/textures/axiom-pattern.png'})` }}
			/>
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
