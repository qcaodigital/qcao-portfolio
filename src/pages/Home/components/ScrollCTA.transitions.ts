interface variant {
	initial: object;
	animate: object;
	exit: object;
	[key: string]: object;
}

interface transitionsType {
	text: variant;
	textbox: variant;
	circle: variant;
	line: variant;
}

const speedAdjustment: number = 0.65;

export const transitions: transitionsType = {
	text: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				delay: 1.5 * speedAdjustment,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.1 * speedAdjustment,
			},
		},
	},
	textbox: {
		initial: {
			scaleX: 0,
			scaleY: 0,
			opacity: 0,
			originY: 'bottom',
		},
		animate: {
			scaleX: [1, 1, 1, 1],
			scaleY: [0.1, 0.1, 1, 1],
			opacity: 1,
			transition: {
				delay: 0.75 * speedAdjustment,
			},
		},
		exit: {
			scaleX: [1, 0.2, 0.2, 0.2],
			scaleY: [1, 1, 1, 0],
			originY: 'bottom',
			transition: {
				duration: 0.1 * speedAdjustment,
			},
		},
	},
	line: {
		initial: {
			height: 0,
		},
		animate: {
			height: '6rem',
			transition: {
				easing: 'linear',
			},
		},
		exit: {
			height: 0,
			transition: {
				duration: 0.15 * speedAdjustment,
				delay: 0.4 * speedAdjustment,
			},
		},
	},
	circle: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				delay: 0.3 * speedAdjustment,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.25 * speedAdjustment,
				delay: 0.75 * speedAdjustment,
			},
		},
	},
};
