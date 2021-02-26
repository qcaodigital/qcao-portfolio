export type technology = {
	[P in 'filename' | 'label' | 'proficiency']: string;
};

export const technologies: technology[] = [
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
		filename: 'postman',
		label: 'Postman',
		proficiency: 'intermediate',
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
