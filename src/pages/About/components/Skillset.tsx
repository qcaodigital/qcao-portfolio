import styles from './Skillset.module.scss';

interface technology {
	filename: string;
	label: string;
	proficiency: string;
}

const technologies: technology[] = [
	{
		filename: 'javascript',
		label: 'Javascript',
		proficiency: 'advanced',
	},
	{
		filename: 'typescript',
		label: 'Typescript',
		proficiency: 'intermediate',
	},
	{
		filename: 'reactjs',
		label: 'ReactJS',
		proficiency: 'advanced',
	},
	{
		filename: 'reactrouter',
		label: 'React Router',
		proficiency: 'advanced',
	},
	{
		filename: 'nextjs',
		label: 'NextJS',
		proficiency: 'advanced',
	},
	{
		filename: 'nodejs',
		label: 'NodeJS',
		proficiency: 'advanced',
	},
	{
		filename: 'express',
		label: 'ExpressJS',
		proficiency: 'advanced',
	},
	{
		filename: 'mongodb',
		label: 'MongoDB/Atlas DB',
		proficiency: 'intermediate',
	},
	{
		filename: 'jasmine',
		label: 'Jasmine',
		proficiency: 'intermediate',
	},
	{
		filename: 'css',
		label: 'CSS',
		proficiency: 'expert',
	},
	{
		filename: 'sass',
		label: 'SASS/SCSS',
		proficiency: 'advanced',
	},
	{
		filename: 'html',
		label: 'HTML',
		proficiency: 'expert',
	},
	{
		filename: 'jquery',
		label: 'jQuery',
		proficiency: 'intermediate',
	},
	{
		filename: 'framer',
		label: 'Framer Motion',
		proficiency: 'advanced',
	},
	{
		filename: 'threejs',
		label: 'WebGL/ThreeJS',
		proficiency: 'beginner',
	},
	{
		filename: 'photoshop',
		label: 'Adobe Photoshop',
		proficiency: 'expert',
	},
	{
		filename: 'lightroom',
		label: 'Adobe Lightroom',
		proficiency: 'expert',
	},
	{
		filename: 'prismic',
		label: 'Prismic',
		proficiency: 'advanced',
	},
	{
		filename: 'shopify',
		label: 'Shopify',
		proficiency: 'advanced',
	},
];

export default function Skillset() {
	return (
		<div className={styles.Skillset}>
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
