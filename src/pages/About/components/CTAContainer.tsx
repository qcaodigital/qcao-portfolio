import styles from './CTAContainer.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction, useRef } from 'react';
import { scrollToCallback } from '../../../helpers/scrollToCallback';
import { transitionsType } from './../About.transitions';
import { useEffect } from 'react';

interface CTAContainerProps {
	isSubpathOpen: boolean;
	transitions: transitionsType;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
}

export default function CTAContainer({
	isSubpathOpen,
	setIsSubpathOpen,
	transitions,
	sectionRef,
}: CTAContainerProps) {
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	useEffect(() => console.log(buttonRef), [buttonRef]);
	return (
		<motion.div className={styles.ctaContainer} custom={1.5} variants={transitions.buttons}>
			<svg width='146px' height='58px'>
				<polyline
					fill='none'
					stroke='black'
					points='145,1 145,57 1,57 1,1 145,1'
				></polyline>
			</svg>
			<AnimatePresence exitBeforeEnter>
				{isSubpathOpen ? (
					<motion.button
						key='back'
						animate='animate'
						initial='initial'
						exit='exit'
						variants={transitions.buttons}
						ref={buttonRef}
						onClick={() => {
							scrollToCallback(
								sectionRef.current,
								{ top: 0, behavior: 'smooth' },
								setIsSubpathOpen.bind(null, false)
							);
						}}
					>
						<span>Back</span>
					</motion.button>
				) : (
					<motion.button
						key='open subpath'
						animate='animate'
						initial='initial'
						exit='exit'
						variants={transitions.buttons}
						ref={buttonRef}
						onClick={() => {
							setIsSubpathOpen(true);
						}}
					>
						<span>Read more</span>
					</motion.button>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
