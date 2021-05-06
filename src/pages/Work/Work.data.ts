export interface projectType {
	heading: string;
	reduceFont?: boolean;
	breakAt?: number;
	imgFilenames: string[];
	gifFilename: string;
	liveLink: string;
	githubLink: string;
	previewOpen: boolean;
	techs: string[];
	conceptText: string;
	challengesText: string;
	notesText: string;
}

export const projects: projectType[] = [
	{
		heading: 'Cocktail Curations',
		reduceFont: true,
		breakAt: 2,
		imgFilenames: ['cc_mockup.png', 'cc_mockup2.png'],
		gifFilename: 'cc.gif',
		liveLink: 'https://cocktail-curations.com',
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
		conceptText: `Cocktail Curations is a beverage catering company I work with in the capacity of a product photographer and webmaster. This project is a concept website which will eventually replace our SquareSpace and Shopify websites with a focus on elevating the design and overall user experience. It was created with NextJS as a framework due to the necessity for its server-side rendering and SEO advantages. The project features a fully functioning blog powered by Prismic as a user-friendly CMS which takes advantage of NextJS static path generation. All components were written in React and coded by myself with the only major dependencies being Framer Motion for page transitioning and unmounting animations. `,
		challengesText:
			'Cocktail Curations is considered to be a "luxury" brand so the design and overall feel needed to express that. With that in mind, I built most layouts in the project without the "standard" grid layout and thus ensuring everything was responsive and looked/felt great on any viewport size was quite labor intensive. With this project also using a CMS that would be used by other users other than myself, fool-proofing and battle testing the blog section proved to be a lengthy process which really taught me the importance of error handling.',
		notesText:
			"This project will continue to be developed as we hope to deploy it in 2021 using Shopify's headless-cms in order to merge our existing Shopify website with it.",
	},
	{
		heading: 'Charred Food',
		reduceFont: true,
		breakAt: 2,
		imgFilenames: ['charred_mockup.png', 'charred_mockup2.png'],
		gifFilename: 'charred.gif',
		liveLink: 'https://www.charred-food.com',
		githubLink: 'https://github.com/qcaodigital/CharredFood',
		previewOpen: false,
		techs: ['reactjs', 'reactrouter', 'express', 'nodejs', 'javascript', 'css', 'html'],
		conceptText: `This project was my very first serious project as I was tasked to redo Charred Food's current website. With no particular directives or idea in mind, I was left to simply create what I felt a restaurant website should be- straight to the point, no frills, appealing to look at but simple. The project ended up being scrapped due to a change in ownership with the restaurant but, nonetheless, it provided a great opportunity to test newly acquired ReactJS knowledge. The website employs a simple structure, using create react app for a serverless front-end using React Router. Express and NodeJS were used in a small capacity to create an API for the contact form.`,
		challengesText: `Admitedly, this project took longer than it should have as I struggled with web design and responsiveness. For one reason or another, I went with a desktop-first approach only to scrap most of the project and start over with a mobile-first approach. As you can probably tell, the design isn't fantastic and I truly learned how important design is to the overall user experience.`,
		notesText:
			'While this project will likely never be deployed for production, I will be revamping it in the future with the existing structure but redesigned as a template to hopefully use or sell for another client.',
	},
	{
		heading: 'Staxx',
		reduceFont: true,
		imgFilenames: ['staxx_mockup.png', 'staxx_mockup2.png'],
		gifFilename: 'staxx.gif',
		liveLink: 'http://www.staxxthegame.com',
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
		conceptText:
			'Staxx, inspired by a classic arcade game, was designed as a means to provide myself the opportunity to move away from the typical "website" coding. Yes its still manipulating DOM elements but I found great experience in coding a game where problem-solving and logic were more important than design. I made this project using NodeJS and Express as a simple back-end server for the game and for managing the leaderboard (with MongoDB as a database). The front-end was made with jQuery and EJS with object-oriented programming in mind.',
		challengesText: `As my first game I've coded, I found myself finishing it wishing I had managed to organize my variables better. While they were nicely organized in objects, it was still tough keeping track of what was what or what was where. This ultimately led me to learn Typescript and now I can't quite imagine not writing in Typescript.`,
		notesText: `The game's got a leaderboard! Go try it!`,
	},
	{
		heading: 'Portfolio',
		reduceFont: true,
		imgFilenames: ['portfolio_mockup.png', 'portfolio_mockup2.png'],
		gifFilename: 'portfolio.gif',
		liveLink: 'www.qcao.dev',
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
		conceptText: `Yep, this is the website you're on! Its like 'Inception' or recursion right?! This project was built with create react app and fully written in Typescript. The structure is much like my Charred Foods project without a backend to handle the contact form, instead using emailJS to avoid doing so. The goal was to go with an uncoventional design that would challenge me in this project as I really didn't want to create another simple, scrolling website but all while keeping it intuitive and easy to navigate.`,
		challengesText: `Writing the navigation system (where scrolling causes the page to animate in/out) seemed simple enough at first but as I progressed I realized it was going to have many more moving parts than I imagined as I needed to continually keep track and assign the direction that things were going to move in based on the scroll direction. All of a sudden, opening up the navigation menu and clicking on a link wasn't as simple as that. Designing the website this way made this an exceptionally fun yet challenging project to work on.`,
		notesText: '',
	},
];
