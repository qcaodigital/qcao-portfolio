import styles from './Skillset.module.scss';
import { technologies, technology } from '../../../data/Skillset.data';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import InViewState from '../../../components/utils/InViewState';
import { transitions } from '../About.transitions';
import TypeWriter from './../../../components/animation/TypeWriter';

interface SkillsetProps {
	sectionRef: React.MutableRefObject<HTMLElement | null>;
}

export default function Skillset({ sectionRef }: SkillsetProps) {
	const [activeTech, setActiveTech] = useState<{
		label: string;
		scrollAtClick: number;
	} | null>(null);

	const [techsInView, setTechsInView] = useState<boolean>(false);

	function closeActiveTech(tech: technology) {
		if (activeTech?.label === tech.label) {
			setActiveTech(null);
		}
	}

	useEffect(() => {
		function handleScroll() {
			if (
				sectionRef.current &&
				activeTech &&
				Math.abs(activeTech?.scrollAtClick - sectionRef.current.scrollTop) > 350
			) {
				setActiveTech(null);
			}
		}

		function handleKeypress(e: KeyboardEvent) {
			if (['Enter', 'Escape'].includes(e.key)) {
				setActiveTech(null);
			}
		}

		const ref = sectionRef.current;
		if (ref) {
			ref.addEventListener('scroll', handleScroll);
			window.addEventListener('keyup', handleKeypress);
			return () => {
				window.removeEventListener('keyup', handleKeypress);
				ref.removeEventListener('scroll', handleScroll);
			};
		}
	}, [sectionRef, activeTech]);

	return (
		<InViewState
			as='div'
			stateSetter={setTechsInView}
			className={styles.skillset}
			threshold={0.1}
			triggerOnce={true}
		>
			<div className={styles.listLabel}>
				<TypeWriter trigger='inView' color='var(--main-color)'>
					<p className={styles.label}>Technologies</p>
				</TypeWriter>
				<p className={styles.copy}>
					Below is an interactive list of the coding and web development related skills
					I've acquired. <b>Click</b> on any of the technologies below to read more.
				</p>
			</div>
			<AnimateSharedLayout>
				<motion.ul
					layout
					className={styles.technologies}
					animate={techsInView ? 'animate' : 'initial'}
					variants={transitions.skillset}
				>
					{technologies.map(
						(tech: technology): JSX.Element => (
							<motion.li
								layout
								variants={transitions.skillset.tech}
								key={tech.label}
								className={styles.tech}
								id={styles[tech.filename]}
								onClick={() => {
									if (activeTech?.label !== tech.label) {
										setActiveTech({
											label: tech.label,
											scrollAtClick: sectionRef.current!.scrollTop,
										});
									}
								}}
								data-is-active={activeTech?.label === tech.label}
								data-faded={activeTech?.label !== tech.label && activeTech !== null}
								data-in-view={techsInView}
							>
								<motion.img
									layout
									src={`/imgs/tech_logos/${tech.filename}.png`}
									alt={`${tech.label} logo`}
									onClick={closeActiveTech.bind(null, tech)}
								/>
								<motion.div
									layout
									className={styles.info}
									onClick={closeActiveTech.bind(null, tech)}
								>
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
								<AnimatePresence>
									<AnimateSharedLayout>
										{activeTech?.label === tech.label ? (
											<motion.div
												className={styles.additionalInfo}
												initial={{ opacity: 0, x: -75 }}
												exit={{ opacity: 0 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{
													opacity: { duration: 1 },
													x: { duration: 0.5 },
												}}
											>
												<motion.p className={styles.label}>
													Knowledge & Practice:
												</motion.p>
												<motion.p className={styles.info}>
													Lorem ipsum dolor sit amet consectetur
													adipisicing elit. Ullam laboriosam illum minima
													dolore reprehenderit eveniet quas quos odit
													maiores ducimus. Harum labore sint fuga
													consequatur consequuntur dolore, laboriosam
													animi repudiandae?
												</motion.p>
											</motion.div>
										) : null}
									</AnimateSharedLayout>
								</AnimatePresence>
								<AnimateSharedLayout>
									<motion.button className={styles.icon}>
										<motion.i
											layout
											className={`fas fa-caret-${
												activeTech?.label === tech.label ? 'down' : 'right'
											}`}
											onClick={closeActiveTech.bind(null, tech)}
										></motion.i>
									</motion.button>
								</AnimateSharedLayout>
							</motion.li>
						)
					)}
				</motion.ul>
			</AnimateSharedLayout>
		</InViewState>
	);
}
