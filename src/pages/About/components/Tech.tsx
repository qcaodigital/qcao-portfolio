import { technology } from './../../../data/Skillset.data';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { transitions } from '../About.transitions';
import styles from './Tech.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { IactiveTech } from './Skillset';

interface TechProps {
	tech: technology;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	setActiveTech: Dispatch<SetStateAction<IactiveTech | null>>;
	activeTech: IactiveTech | null;
	closeActiveTech: (tech: technology) => void;
	techsInView: boolean;
}

export default function Tech({
	tech,
	sectionRef,
	setActiveTech,
	activeTech,
	closeActiveTech,
	techsInView,
}: TechProps) {
	return (
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
						//Record at what scroll position in the window when clicked
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
			<motion.div layout className={styles.info} onClick={closeActiveTech.bind(null, tech)}>
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
							<motion.div className={styles.label}>
								<p>Knowledge & Practice Include:</p>
								<em>(but not limited to)</em>
							</motion.div>
							<motion.ul
								className={styles.knowledgeList}
								data-small={tech.info.length < 5}
							>
								{tech.info.map((info: string) => (
									<li
										key={info}
										className={styles.knowledge}
										data-is-long={info.length > 41}
									>
										{info}
									</li>
								))}
							</motion.ul>
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
	);
}
