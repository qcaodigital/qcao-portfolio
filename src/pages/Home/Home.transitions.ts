const defaultDuration: number = 0.75;
const defaultTranslate: number = window.innerHeight * -1;

type transitionsType = any;

export const transitions: transitionsType = {
	stagger: {
		exit: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	},
	headerFadeUp: {
		initial: {
			y: defaultTranslate,
			x: '-50%',
			opacity: 0,
		},
		animate: {
			x: '-50%',
			y: '-50%',
			opacity: 1,
			transition: {
				duration: defaultDuration,
			},
		},
		exit: {
			y: defaultTranslate,
			opacity: 0,
			transition: {
				duration: defaultDuration,
			},
		},
	},
	fadeUp: {
		initial: {
			y: defaultTranslate / 2,
			opacity: 0,
			transition: {
				duration: defaultDuration,
			},
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: defaultDuration,
			},
		},
		exit: {
			y: defaultTranslate / 2,
			opacity: 0,
			transition: {
				duration: defaultDuration,
			},
		},
	},
	fadeOut: {
		initial: {
			opacity: 0,
			transitions: {
				duration: defaultDuration,
			},
		},
		animate: {
			opacity: 0.12,
			transitions: {
				duration: defaultDuration,
			},
		},
		exit: {
			opacity: 0,
			transitions: {
				duration: defaultDuration,
			},
		},
	},
};
