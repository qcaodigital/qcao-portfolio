const defaultTranslate: number = window.innerHeight * 0.75;
const defaultDuration: number = 0.75;

interface variants {
	top: {};
	animate: {};
	bottom: {};
	[key: string]: {};
}

interface stdVariants {
	animate: {};
	exit: {};
	initial: {};
	[key: string]: {};
}

interface transitionsType {
	stagger: variants;
	transUp: variants;
	buttons: stdVariants;
	scrollCTA: stdVariants;
}

export const transitions: transitionsType = {
	stagger: {
		top: {
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
		animate: {
			transition: {
				staggerChildren: 0.05,
			},
		},
		bottom: {
			transition: {
				staggerChildren: 0.05,
				staggerDirection: 1,
			},
		},
	},
	transUp: {
		top: {
			y: defaultTranslate,
			opacity: 0,
			transition: {
				duration: defaultDuration,
				ease: 'easeIn',
			},
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: defaultDuration,
				ease: 'circOut',
			},
		},
		bottom: {
			y: defaultTranslate * -1,
			opacity: 0,
			transition: {
				duration: defaultDuration,
				ease: 'easeIn',
			},
		},
	},
	buttons: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.35,
				delay: 0.5,
			},
		},
		exit: {
			opacity: 0,
			// transition: {
			// 	duration: 0.35,
			// },
		},
	},
	scrollCTA: {
		initial: {
			opacity: 0,
			y: '100%',
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.35,
				ease: 'easeOut',
				delay: 0.5,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.35,
			},
		},
	},
};
