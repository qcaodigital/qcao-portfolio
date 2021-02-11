interface variant {
	initial: object;
	load: object;
	animate: object;
	[key: string]: object;
}

interface transitionsType {
	text: variant;
	textbox: variant;
	circle: variant;
	line: variant;
}

export const transitions: transitionsType = {
	text: {
		initial: {
			opacity: 0,
		},
		load: {
			opacity: 1,
			transition: {
				delay: 1.5,
			},
		},
		animate: {
			opacity: 0,
			transition: {
				duration: 0.2,
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
		load: {
			scaleX: [1, 1, 1, 1],
			scaleY: [0.1, 0.1, 1, 1],
			opacity: 1,
			transition: {
				delay: 0.75,
			},
		},
		animate: {
			scaleX: [1, 0.2, 0.2, 0.2],
			scaleY: [1, 1, 1, 0],
			originY: 'bottom',
			transition: {
				duration: 0.3,
				when: 'afterChildren',
			},
		},
	},
	line: {
		initial: {
			height: 0,
		},
		load: (viewportRank: number) => ({
			height: viewportRank <= 3 ? '6rem' : '6rem',
			transition: {
				easing: 'linear',
			},
		}),
		animate: {
			height: 0,
			transition: {
				duration: 0.15,
				delay: 0.75,
			},
		},
	},
	circle: {
		initial: {
			opacity: 0,
		},
		load: {
			opacity: 1,
			transition: {
				delay: 0.3,
			},
		},
		animate: {
			opacity: 0,
			transition: {
				duration: 0.25,
				delay: 1,
			},
		},
	},
};
