import { motion } from 'framer-motion';
interface SectionWrapperProps {
	direction: string;
	children: JSX.Element;
}

const defaultTranslate: number = window.innerHeight * 0.75;
const defaultDuration: number = 0.75;

const transUp = {
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
			ease: 'circOut',
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
};

export default function SectionWrapper({ direction, children }: SectionWrapperProps) {
	return (
		<motion.div
			initial={direction === 'down' ? 'top' : 'bottom'}
			animate='animate'
			exit={direction === 'down' ? 'bottom' : 'top'}
			variants={transUp}
		>
			{children}
		</motion.div>
	);
}
