import styles from './Skillset.module.scss';
import { technologies, technology } from '../../../data/Skillset.data';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import InViewState from '../../../components/utils/InViewState';
import { transitions } from '../About.transitions';
import TypeWriter from './../../../components/animation/TypeWriter';
import Tech from './Tech';

interface SkillsetProps {
	sectionRef: React.MutableRefObject<HTMLElement | null>;
}

export interface IactiveTech {
	label: string;
	scrollAtClick: number;
}

export default function Skillset({ sectionRef }: SkillsetProps) {
	const [activeTech, setActiveTech] = useState<IactiveTech | null>(null);
	const [techsInView, setTechsInView] = useState<boolean>(false);

	const [sort, setSort] = useState<string>('default');
	const sortTypes: { label: string; data: string }[] = [
		{ label: 'default', data: 'default' },
		{ label: 'Most Skilled First', data: 'skill' },
		{ label: 'A to Z', data: 'alpha' },
	];

	function closeActiveTech(tech: technology) {
		if (activeTech?.label === tech.label) {
			setActiveTech(null);
		}
	}

	useEffect(() => {
		function handleScroll() {
			//Close if user scrolls +/- 350px past the point where a tech was opened
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
					I've acquired. <strong>Click</strong> on any of the technologies below to see a
					few highlights.
				</p>
				<div className={styles.sortContainer}>
					<ul className={styles.sortSelector}>
						{sortTypes.map((sortItem) => (
							<li
								key={sortItem.data}
								data-selected={sort === sortItem.data}
								onClick={() => {
									setSort(sortItem.data);
									setActiveTech(null);
								}}
							>
								{sortItem.label}
							</li>
						))}
					</ul>
				</div>
			</div>
			<AnimateSharedLayout>
				<motion.ul
					layout
					className={styles.technologies}
					animate={techsInView ? 'animate' : 'initial'}
					variants={transitions.skillset}
				>
					{[...technologies]
						.sort((a, b) => {
							switch (sort) {
								case 'alpha':
									return a.label
										.toLowerCase()
										.localeCompare(b.label.toLocaleLowerCase());
								case 'skill':
									const rank: string[] = [
										'basic',
										'intermediate',
										'advanced',
										'expert',
									];

									return (
										rank.indexOf(b.proficiency) - rank.indexOf(a.proficiency)
									);

								default:
									return 0;
							}
						})
						.map(
							(tech: technology): JSX.Element => (
								<Tech
									key={tech.label}
									tech={tech}
									sectionRef={sectionRef}
									setActiveTech={setActiveTech}
									activeTech={activeTech}
									closeActiveTech={closeActiveTech}
									techsInView={techsInView}
								/>
							)
						)}
				</motion.ul>
			</AnimateSharedLayout>
		</InViewState>
	);
}
