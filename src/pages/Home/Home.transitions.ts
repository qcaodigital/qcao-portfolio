const defaultDuration: number = 1;
const defaultTranslate: number = window.innerHeight * -1;

type transitionsType = any;

export const transitions: transitionsType = {
	headerFadeUp: {
		hbmInitial: {
			opacity: 0,
			x: '-50%',
			y: '-50%',
			transition: {
				duration: defaultDuration,
			},
		},
		hbmEnter: {
			opacity: 1,
			transition: {
				duration: defaultDuration,
			},
		},
		hbmExit: {
			opacity: 0,
			transition: {
				duration: defaultDuration,
			},
		},
		downInitial: {
			y: defaultTranslate,
			x: '-50%',
			opacity: 0,
		},
		downEnter: {
			x: '-50%',
			y: '-50%',
			opacity: 1,
			transition: {
				duration: defaultDuration,
			},
		},
		downExit: {
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
		enter: {
			y: 0,
			opacity: 1,
			transition: {
				duration: defaultDuration,
			},
		},
		hbmExit: {
			opacity: 0,
			transition: {
				duration: defaultDuration,
			},
		},
		downExit: {
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
		enter: {
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
