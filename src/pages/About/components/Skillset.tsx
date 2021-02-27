import styles from './Skillset.module.scss';
import { technologies, technology } from './Skillset.data';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SkillsetProps {
	sectionRef: React.MutableRefObject<HTMLElement | null>;
}

export default function Skillset({ sectionRef }: SkillsetProps) {
	const [activeTech, setActiveTech] = useState<string | null>(null);
	useEffect(() => {
		function handleScroll() {
			if (activeTech) {
				setActiveTech(null);
			}
		}

		if (sectionRef.current) {
			sectionRef.current.addEventListener('scroll', handleScroll);
		}
	}, [sectionRef]);

	return (
		<AnimateSharedLayout>
			<motion.div layout className={styles.skillset}>
				<p className={styles.listLabel}>Technologies</p>
				<motion.ul layout className={styles.technologies}>
					{technologies.map(
						(tech: technology): JSX.Element => (
							<motion.li
								layout
								key={tech.label}
								className={styles.tech}
								id={styles[tech.filename]}
								onClick={() => {
									if ([tech.label].includes(activeTech!)) {
										setActiveTech(null);
									} else {
										setActiveTech(tech.label);
									}
								}}
								data-is-active={activeTech === tech.label ? 'true' : 'false'}
								data-faded={
									activeTech !== tech.label && activeTech !== null
										? 'true'
										: 'false'
								}
							>
								<motion.img
									layout
									src={`/imgs/tech_logos/${tech.filename}.png`}
									alt={`${tech.label} logo`}
								/>
								<motion.div layout className={styles.info}>
									<motion.p layout className={styles.name}>
										{tech.label}
									</motion.p>
									<motion.p layout className={styles.proficiency}>
										Proficiency:
										<motion.span layout className={styles.proficiencyValue}>
											{tech.proficiency}
										</motion.span>
									</motion.p>
								</motion.div>
								<motion.button layout className={styles.icon}>
									<motion.i layout className='fas fa-caret-right'></motion.i>
								</motion.button>
							</motion.li>
						)
					)}
				</motion.ul>
			</motion.div>
		</AnimateSharedLayout>
	);
}
