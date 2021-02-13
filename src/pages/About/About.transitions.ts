const defaultTranslate: number = window.innerHeight * 0.75;
const defaultDuration: number = 0.75;

export const transitions = {
	landing: {
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
				ease: 'easeOut',
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
};
