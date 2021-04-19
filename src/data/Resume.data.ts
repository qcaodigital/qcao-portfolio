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
			"Created the company's Shopify e-commerce website and have successfully assisted in driving over $12,000 in online sales and nearly 5,000 website hits in the course of 6 months.",
			'Implemented SEO for both the pre-existing Squarespace website and newly created Shopify website resulting in first-page positions when querying the company name.',
		],
		iconFilename: 'cc.png',
	},
	{
		id: 'dec',
		title: 'General Manager',
		employer: 'Declaration',
		yearStart: '2017',
		yearEnd: '2019',
		location: 'Washington, DC',
		copy:
			'Senior leadership based position focused on launching a newly opening 134 seat restaurant. The position was initially tasked with employing and training a full front of house team as well creating standard operating procedures and systems. Once established, the position was responsible for overseeing all facets of the front of house and handling all administrative tasks necessary for the restaurant.',
		info: [
			'Exceeded initial sales forecasts of $40,000/month by over an average of $12,000 monthly through various methods of training and marketing.',
			'Maintained an opening front of house team of 27 with a turnover rate of 14.8% in the first eight months of the restaurant launch against an estimated 50% turnover rate.',
			'Effectively operated the front of house as the only and primary manager by streamlining administrative tasks and service operations as well as successfully elevating staff to take on additional responsibilities such as supply ordering, shift supervising, and repair/maintenance.',
		],
		iconFilename: 'dec.png',
	},
	{
		id: 'lincoln',
		title: 'Restaurant Manager',
		employer: 'LINCOLN Restaurant',
		yearStart: '2016',
		yearEnd: '2019',
		location: 'Washington, DC',
		copy:
			'Leadership based position focused on elevating front of house standards and operations in a 235 seat restaurant with a specialty in profit/loss administration and private events. In 2017, promoted to senior manager of the restaurant group, becoming responsible for assisting in managing all four restaurants in the restaurant group with a focus on opening our newest restaurant, Declaration.',
		info: [
			'Reduced overall labor costs by 2.5% within eight months without compromising service or efficiency in the front of house by redistributing areas of responsibility and creating a culture focused on teamwork.',
			'Established and maintained a culture within the management team centered around hands-on leadership in the dining room, improving the overall morale and motivation of the front of house team leading to a 27% turnover rate against the previous year’s 55% turnover rate.',
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
		yearCompleted: 2012,
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
