export const transitions = {
	stagger: {
		animate: {
			transition: {
				staggerChildren: 0.25,
			},
		},
	},
	modal: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
		exit: {
			opacity: 0,
		},
	},
	iframe: {
		initial: {
			opacity: 0,
			scale: 0.9,
			y: '-50%',
			x: '-50%',
		},
		animate: {
			opacity: 1,
			scale: 1,
			transition: {
				opacity: {
					duration: 0.5,
				},
			},
		},
		exit: {
			opacity: 0,
		},
	},
};
