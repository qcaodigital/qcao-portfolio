export interface technology {
	filename: string;
	label: string;
	proficiency: string;
	info: string[];
}

export const technologies: technology[] = [
	{
		filename: 'javascript',
		label: 'Javascript',
		proficiency: 'advanced',
		info: [
			'ES6 ECMAScript standards',
			'Implementation of object-oriented programming',
			'Implemetation of functional programming',
			'Usage of asynchronous request handling',
			'Advanced data structures',
		],
	},
	{
		filename: 'typescript',
		label: 'Typescript',
		proficiency: 'intermediate',
		info: [
			'Integration in vanilla JS, React, NextJS, and Webpack environments',
			'TS Configuration',
			'DOM Typecasting',
			'Utilizing mapped types',
			'Generics',
		],
	},
	{
		filename: 'reactjs',
		label: 'ReactJS',
		proficiency: 'advanced',
		info: [
			'Environment setup without CRA',
			'Class-based components',
			'React Hooks',
			'Context/Reducer API',
			'Efficient code splitting',
			'Utilizing higher-order components',
			'Production deployment using Heroku',
		],
	},
	{
		filename: 'reactrouter',
		label: 'React Router',
		proficiency: 'advanced',
		info: [
			'Implementation of efficient client-side routing',
			'React Router Hooks (useLocation, useHistory, useMatch)',
			'Server-side rendering with React Router',
			'Animated routing',
		],
	},
	{
		filename: 'nextjs',
		label: 'NextJS',
		proficiency: 'advanced',
		info: [
			'SEO-focused server-side rendering',
			'Static page generation with external data',
			'Custom NextJS configuration',
			'Usage of custom server',
			'Usage of custom `app` and `document` components',
		],
	},
	{
		filename: 'nodejs',
		label: 'NodeJS',
		proficiency: 'advanced',
		info: [
			'Usage of npm, managing node packages, and npm scripts',
			'Usage and knowledge of the "fs" api',
			'Creating a web server and sending requests without Express',
			'Typscript integration with "ts-node"',
		],
	},
	{
		filename: 'express',
		label: 'ExpressJS',
		proficiency: 'advanced',
		info: [
			'Creation and setup of an Express-based RESTful API',
			'Server-side development with html or templating engine',
			'Writing custom middleware',
			'Setup and connection with MongoDB',
			'Usage of Express router to modularize routes',
		],
	},
	{
		filename: 'mongodb',
		label: 'MongoDB/Atlas DB',
		proficiency: 'intermediate',
		info: [
			'Connection in a NodeJS/Express environment',
			'Creation of local databases and cloud-based clusters using AtlasDB',
			'Usage of CRUD operations',
			'Utilizing Mongoose for object modeling',
		],
	},
	// {
	// 	filename: 'jasmine',
	// 	label: 'Jasmine',
	// 	proficiency: 'intermediate',
	// 	info: [''],
	// },
	{
		filename: 'css',
		label: 'CSS',
		proficiency: 'expert',
		info: [
			'Usage of flexbox and grid for complex, responsive layouts',
			'Usage of advanced attribute selectors and media queries',
			'Usage of keyframes and animations to produce modern effects',
			'maintaining and writing cross-browser compatible CSS + polyfills',
			'CSS modules, BEM naming convention, and CSS-in-JS',
		],
	},
	{
		filename: 'sass',
		label: 'SASS/SCSS',
		proficiency: 'advanced',
		info: [
			'SASS setup in ReactJS, NextJS, and vanilla JS enviroments',
			'Usage of mixins to create reusable templates (media queries, font-scale, etc)',
			'Writing functions and mixins to interpolate efficient and readable CSS',
			'Usage of @import/@use to create a DRY CSS code-base',
		],
	},
	{
		filename: 'html',
		label: 'HTML',
		proficiency: 'expert',
		info: [
			'Usage of HTML5 semanticically-driven markup',
			'Accessibility as a foundation of markup',
			'Knowledge of advanced text formatting markup',
		],
	},
	{
		filename: 'jquery',
		label: 'jQuery',
		proficiency: 'intermediate',
		info: [
			'Use and knowledge of jQuery selectors',
			'Usage of jQuery methods for DOM manipulation and tree traversal',
			'basic DOM element animation',
		],
	},
	{
		filename: 'ejs',
		label: 'EJS',
		proficiency: 'advanced',
		info: [
			'Usage of EJS partials to form modular markup',
			'Creating layouts by manipulating EJS partials',
			'Understanding of EJS output syntax and use-cases',
			'Implementation of EJS using ExpressJS and passing data server-side',
			'EJS function caching',
		],
	},
	{
		filename: 'framer',
		label: 'Framer Motion',
		proficiency: 'advanced',
		info: [
			'Usage of animation variants and orchestrating animation flow',
			'Usage of dynamic variants',
			'Implementation of page transitions in React-Router and NextJS',
			'Layout animations to create complex FLIP animations ',
		],
	},
	// {
	// 	filename: 'threejs',
	// 	label: 'WebGL/ThreeJS',
	// 	proficiency: 'basic',
	// 	info: [''],
	// },
	{
		filename: 'webpack',
		label: 'Webpack',
		proficiency: 'intermediate',
		info: [
			'Webpack configuration/bundling for a non-CRA ReactJS and vanilla JS environment',
			'Ability to understand and implement various loaders/plugins',
		],
	},
	{
		filename: 'postman',
		label: 'Postman',
		proficiency: 'intermediate',
		info: [
			'Usage to test RESTful API calls',
			'Writing Postman scripts for dynamic behavior in requests',
			'Writing Postman tests',
		],
	},
	{
		filename: 'mailgun',
		label: 'Mailgun',
		proficiency: 'intermediate',
		info: [
			'Setup and configuration of Mailgun API with NodeJS and any domain registrar',
			'Usage of EmailJS for configuration in a server-less environment',
			'Creation of dynamic email templates using Handlebars',
		],
	},
	{
		filename: 'photoshop',
		label: 'Adobe Photoshop',
		proficiency: 'expert',
		info: [
			'Ability to use Photoshop in both photography and graphic design capacities',
			'Expert knowledge in general image manipulation and photograph retouching',
		],
	},
	{
		filename: 'lightroom',
		label: 'Adobe Lightroom',
		proficiency: 'expert',
		info: [
			'Ability to manage and optimize large collections of catalogs',
			'Create presets to produce efficient workflow',
			'Expert knowledge in general image manipulation',
		],
	},
	{
		filename: 'prismic',
		label: 'Prismic',
		proficiency: 'advanced',
		info: [
			'Usage of Prismic in any Javascript environment using the Prismic API',
			'Usage of slice zones to create user-friendly templating',
		],
	},
	{
		filename: 'shopify',
		label: 'Shopify',
		proficiency: 'advanced',
		info: [
			'Managing a Shopify storefront and maintaining a scalable product collection',
			'Usage of the JSON-T templating language to customize storefront',
			'Improving store SEO and monitoring with Google Search Console tools',
		],
	},
];
