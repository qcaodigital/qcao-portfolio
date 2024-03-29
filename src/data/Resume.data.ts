export interface job {
	id: string;
	title: string;
	employer: string;
	yearStart: string | number;
	yearEnd: string | number;
	location: string;
	copy: string;
	info: string[];
	iconFilename: string;
}

export const jobs: job[] = [
	{
		id: 'cc',
		title: 'Webmaster',
		employer: 'Cocktail Curations',
		yearStart: '2020',
		yearEnd: 'Present',
		location: 'Alexandria, VA',
		copy:
			"Position based on bringing photographic and web development expertise to bolster a growing small business. The position requires the ability to manage a Shopify storefront and understand the workflow of managing a business' online presence.",
		info: [
			'Created a React.js based concept website to replace the Squarespace website using Prismic.io to allow for a user-friendly experience adding in blog posts and images.',
			"Built the company's Shopify e-commerce website with the Liquid templating language and successfully drove over $12,000 in online sales and nearly 5,000 website hits in the course of 6 months.",
			'Implemented SEO for both the pre-existing Squarespace website and newly created Shopify website resulting in first-page positions when querying the company name.',
		],
		iconFilename: 'cc.png',
	},
	{
		id: 'prg',
		title: 'Senior Manager',
		employer: 'PRG Hospitality',
		yearStart: '2018',
		yearEnd: '2019',
		location: 'Washington, DC',
		copy:
			'Senior leadership based position focused on launching a newly opening 134 seat restaurant. The position was initially tasked with employing and training a full front of house team as well creating standard operating procedures and systems. Once established, the position was responsible for assisting with operating and managing all four restaurants within the restaurant group.',
		info: [
			'Planned and opened the company’s new 125-seat restaurant (Declaration Nats Park) and exceeded initial sales forecasts of $40,000/month by an average of $12,000 in the first year.',
			'Responsible for assisting the company in managing and overseeing the operation of all four restaurants in the restaurant group after successfully launching Declaration Nats Park.',
		],
		iconFilename: 'prg.png',
	},
	{
		id: 'lincoln',
		title: 'Hospitality Manager',
		employer: 'LINCOLN Restaurant',
		yearStart: '2016',
		yearEnd: '2018',
		location: 'Washington, DC',
		copy:
			'Leadership based position focused on elevating front of house standards and operations in a 235 seat restaurant with a specialty in profit/loss administration and private events. In 2017, promoted to senior manager of the restaurant group, becoming responsible for opening our newest restaurant, Declaration.',
		info: [
			'Created an Excel-based system for managing multiple facets of operating the restaurant including a tip-payout system, an events payroll system, and numerous profit/loss analyzers. Later used company wide.',
			'Reduced overall labor costs by 2.5% within first eight months without compromising service or efficiency in the front of house by redistributing areas of responsibility and creating a culture focused on teamwork.',
		],
		iconFilename: 'lincoln.png',
	},
	{
		id: 'p&g',
		title: 'Restaurant Manager',
		employer: 'Pho & Grill LLC',
		yearStart: '2010',
		yearEnd: '2016',
		location: 'Olney, MD',
		copy:
			'Management based position focused on the procurement of securing and maintaining local community business, ensuring exceptional service, and delivering consistently outstanding food in a multi-establishment restaurant company.',
		info: [
			'Employed and maintained an outstanding front of the house team of an average 25 member size with a turnover rate of 12% over the duration of 5 years in a new location (2011-2016).',
			'Instrumental in the improvement of gross sales by ~40% within 5 years following the opening of the restaurant’s second location through proper team management and supervision while establishing the development of interpersonal relationships with customers.',
		],
		iconFilename: 'pg.png',
	},
];

export interface educationType {
	title: string;
	school: string;
	location?: string;
	yearCompleted: string | number;
}

export const education: educationType[] = [
	{
		title: 'Associates of Arts: STEM Core',
		school: 'Montgomery College',
		location: 'Rockville, MD',
		yearCompleted: 2011,
	},
	{
		title: 'Javascript Algorithms and Data Structures Masterclass',
		school: 'by Colt Steele',
		location: 'Udemy',
		yearCompleted: 2020,
	},
	{
		title: 'The Modern React Bootcamp',
		school: 'by Colt Steele',
		location: 'Udemy',
		yearCompleted: 2020,
	},
	{
		title: 'The Advanced Web Developer Bootcamp',
		school: 'by Colt Steele',
		location: 'Udemy',
		yearCompleted: 2019,
	},
	{
		title: 'The Web Developer Bootcamp',
		school: 'by Colt Steele',
		location: 'Udemy',
		yearCompleted: 2019,
	},
];
