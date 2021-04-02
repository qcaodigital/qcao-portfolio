import { motion, AnimatePresence } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect } from 'react';
import ScrollProgress from './ScrollProgress';
import ToTop from './ToTop';

interface SectionWrapperProps {
	direction: string;
	setDirection: Dispatch<SetStateAction<string>>;
	children: JSX.Element;
	isSubpathOpen: boolean;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	isHBMOpen: boolean;
}

const defaultTranslate: number = window.innerHeight * 0.65;
const defaultDuration: number = 0.6;

const transUp = {
	top: {
		y: defaultTranslate,
		opacity: 0.1,
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
		opacity: 0.1,
		transition: {
			duration: defaultDuration,
			ease: 'easeIn',
		},
	},
	center: {
		y: 0,
		opacity: 0,
		transition: {
			duration: defaultDuration,
			ease: 'easeIn',
		},
	},
};

export default function SectionWrapper({
	direction,
	setDirection,
	isSubpathOpen,
	setIsSubpathOpen,
	sectionRef,
	isHBMOpen,
	children,
}: SectionWrapperProps) {
	let initial;
	let exit;

	switch (direction) {
		case 'down':
			initial = 'top';
			exit = 'bottom';
			break;
		case 'up':
			initial = 'bottom';
			exit = 'top';
			break;
		case 'center':
			initial = 'center';
			exit = 'center';
	}

	//Default transition direction to 'center' on render
	useEffect(() => {
		setDirection('center');
	}, [setDirection]);

	return (
		<motion.div initial={initial} animate='animate' exit={exit} variants={transUp}>
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
				<AnimatePresence>
					{isSubpathOpen && !isHBMOpen && (
						<ScrollProgress
							scrollContainerRef={sectionRef}
							color='var(--highlight-color)'
							width='.5rem'
						/>
					)}
				</AnimatePresence>
				<ToTop
					sectionRef={sectionRef}
					setIsSubpathOpen={setIsSubpathOpen}
					isSubpathOpen={isSubpathOpen}
				/>
			</motion.section>
		</motion.div>
	);
}
