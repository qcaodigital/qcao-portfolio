const defaultDuration: number = 0.75;
const defaultTranslate: number = window.innerHeight * -1;

type transitionsType = any;

export const transitions: transitionsType = {
	headerFadeUp: {
		top: {
			x: '-50%',
			y: -1 * defaultTranslate,
			opacity: 0.5,
			transition: {
				duration: defaultDuration,
				ease: 'easeOut',
			},
		},
		animate: {
			x: '-50%',
			y: '-50%',
			opacity: 1,
			transition: {
				duration: defaultDuration,
				ease: 'easeOut',
			},
		},
		bottom: {
			x: '-50%',
			y: defaultTranslate,
			opacity: 0.5,
			transition: {
				duration: defaultDuration,
				ease: 'easeIn',
			},
		},
	},
	fadeUp: {
		top: {
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
		bottom: {
			y: defaultTranslate / 2,
			opacity: 0,
			transition: {
				duration: defaultDuration,
			},
		},
	},
	fadeOut: {
		top: {
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
		bottom: {
			opacity: 0,
			transitions: {
				duration: defaultDuration,
			},
		},
	},
};
