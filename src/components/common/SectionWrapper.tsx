import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import ScrollProgress from './ScrollProgress';
interface SectionWrapperProps {
	direction: string;
	children: JSX.Element;
	isSubpathOpen: boolean;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
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

export default function SectionWrapper({
	direction,
	isSubpathOpen,
	sectionRef,
	children,
}: SectionWrapperProps) {
	return (
		<motion.div
			initial={direction === 'down' ? 'top' : 'bottom'}
			animate='animate'
			exit={direction === 'down' ? 'bottom' : 'top'}
			variants={transUp}
		>
			<motion.section
				animate='animate'
				initial='initial'
				ref={sectionRef}
				style={{
					overflowY: isSubpathOpen ? 'scroll' : 'hidden',
					height: 'var(--trueHeight)',
					overflowX: 'hidden',
					scrollbarWidth: 'none',
				}}
			>
				{children}
				{isSubpathOpen && (
					<ScrollProgress
						scrollContainerRef={sectionRef}
						color='var(--highlight-color)'
						width='.5rem'
					/>
				)}
			</motion.section>
		</motion.div>
	);
}
