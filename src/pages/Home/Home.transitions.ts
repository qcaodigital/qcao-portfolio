const defaultDuration: number = 0.75;
const defaultTranslate: number = window.innerHeight * -1;

interface transitionsType {
	[key: string]: {};
}

export const transitions: transitionsType = {
	headerFadeUp: {
		top: {
			x: '-50%',
			y: -1 * defaultTranslate,
			opacity: 0,
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
			opacity: 0,
			transition: {
				duration: defaultDuration,
				ease: 'easeIn',
			},
		},
		center: {
			x: '-50%',
			y: '-50%',
			opacity: 0,
			transition: {
				duration: defaultDuration,
				ease: 'easeIn',
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
	socialList: {
		top: {
			x: '-125%',
			transition: {
				duration: 0.35,
			},
		},
		bottom: {
			x: '-125%',
			transition: {
				duration: 0.35,
			},
		},
		animate: {
			x: 0,
		},
	},
};
