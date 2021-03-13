export const transitions = {
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
			x: '750%',
			scaleX: [0.5, 1, 2, 1.5],
			transition: {
				x: {
					duration: 1.75,
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
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
		initial: {
			opacity: 0,
		},
		exit: {
			opacity: 0,
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
