interface variants {
	animate?: any;
	exit?: any;
	initial?: any;
	[key: string]: any;
}

export interface transitionsType {
	[key: string]: variants;
}

export const transitions: transitionsType = {
	buttons: {
		initial: {
			opacity: 0,
		},
		animate: (duration: number): any => ({
			opacity: 1,
			transition: {
				duration: duration ?? 0.35,
				delay: 0.5,
			},
		}),
		exit: {
			opacity: 0,
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
	bar: {
		initial: {
			x: '100%',
		},
		animate: {
			x: '650%',
			scaleX: [0.5, 1, 2, 1.5],
			transition: {
				x: {
					duration: 1.5,
					ease: [0.745, 0.015, 0.0, 1],
				},
			},
		},
	},
	img: {
		animate: {
			overflow: 'visible',
			transition: {
				delay: 1.25,
			},
		},
	},
	bracket: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				delay: 1.25,
				ease: 'easeOut',
			},
		},
		exit: {
			opacity: 0,
		},
	},
	stagger: {
		animate: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	},
	headerChildren: {
		initial: {
			x: -window.innerWidth * 1,
		},
		animate: {
			x: 0,
			transition: {
				x: {
					duration: 0.75,
					ease: 'easeOut',
				},
			},
		},
	},
};
