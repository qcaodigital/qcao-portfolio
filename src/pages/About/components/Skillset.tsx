import styles from './Skillset.module.scss';
import { technologies, technology } from './Skillset.data';

export default function Skillset() {
	return (
		<div className={styles.skillset}>
			<p className={styles.listLabel}>Technologies</p>
			<ul className={styles.technologies}>
				{technologies.map(
					(tech: technology): JSX.Element => (
						<li key={tech.label} className={styles.tech} id={styles[tech.filename]}>
							<img
								src={`/imgs/tech_logos/${tech.filename}.png`}
								alt={`${tech.label} logo`}
							/>
							<div className={styles.info}>
								<p className={styles.name}>{tech.label}</p>
								<p className={styles.proficiency}>
									Proficiency:{' '}
									<span className={styles.proficiencyValue}>
										{tech.proficiency}
									</span>
								</p>
							</div>
							<button className={styles.icon}>
								<i className='fas fa-chevron-right'></i>
							</button>
						</li>
					)
				)}
			</ul>
		</div>
	);
}
