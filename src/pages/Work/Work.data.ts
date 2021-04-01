export interface projectType {
	heading: string;
	reduceFont?: boolean;
	breakAt?: number;
	imgFilenames: string[];
	liveLink: string;
	githubLink: string;
	previewOpen: boolean;
	techs: string[];
}

export const projects: projectType[] = [
	{
		heading: 'Cocktail Curations',
		reduceFont: true,
		breakAt: 2,
		imgFilenames: ['cc_mockup.png', 'cc_mockup2.png'],
		liveLink: 'https://cocktailcurations.vercel.app',
		githubLink: 'https://github.com/qcaodigital/cocktail_curations',
		previewOpen: false,
		techs: [
			'reactjs',
			'nextjs',
			'framer',
			'javascript',
			'sass',
			'css',
			'html',
			'prismic',
			'mailgun',
		],
	},
	{
		heading: 'Charred Food',
		reduceFont: true,
		breakAt: 2,
		imgFilenames: ['charred_mockup.png', 'charred_mockup2.png'],
		liveLink: 'https://charred.netlify.app/',
		githubLink: 'https://github.com/qcaodigital/CharredFood',
		previewOpen: false,
		techs: ['reactjs', 'reactrouter', 'express', 'nodejs', 'javascript', 'css', 'html'],
	},
	{
		heading: 'Staxx',
		reduceFont: true,
		imgFilenames: ['staxx_mockup.png', 'staxx_mockup2.png'],
		liveLink: 'https://staxxz.herokuapp.com/',
		githubLink: 'https://github.com/qcaodigital/staxx',
		previewOpen: false,
		techs: [
			'jquery',
			'express',
			'nodejs',
			'mongodb',
			'javascript',
			'sass',
			'css',
			'html',
			'ejs',
		],
	},
	{
		heading: 'Portfolio',
		reduceFont: true,
		imgFilenames: ['portfolio_mockup.png', 'portfolio_mockup2.png'],
		liveLink: 'https://staxxz.herokuapp.com/',
		githubLink: 'https://github.com/qcaodigital/portfolio',
		previewOpen: false,
		techs: [
			'reactjs',
			'reactrouter',
			'framer',
			'typescript',
			'javascript',
			'sass',
			'css',
			'html',
			'mailgun',
		],
	},
];
