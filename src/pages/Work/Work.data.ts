export interface projectType {
	heading: string;
	reduceFont?: boolean;
	breakAt?: number;
	imgFilename: string;
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
		imgFilename: 'cc_mockup.png',
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
		imgFilename: 'charred_mockup.png',
		liveLink: 'https://charred.netlify.app/',
		githubLink: 'https://github.com/qcaodigital/CharredFood',
		previewOpen: false,
		techs: ['reactjs', 'reactrouter', 'express', 'nodejs', 'javascript', 'css', 'html'],
	},
	{
		heading: 'Staxx',
		reduceFont: true,
		imgFilename: 'staxx_mockup.png',
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
		imgFilename: 'portfolio_mockup.png',
		liveLink: 'https://staxxz.herokuapp.com/',
		githubLink: 'https://github.com/qcaodigital/cocktail_curations',
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
		],
	},
];
