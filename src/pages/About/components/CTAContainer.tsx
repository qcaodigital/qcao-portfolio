import styles from './CTAContainer.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { scrollToCallback } from '../../../helpers/scrollToCallback';
import { transitionsType } from './../About.transitions';

interface CTAContainerProps {
	isSubpathOpen: boolean;
	transitions: transitionsType;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	passedVariant: any;
}

export default function CTAContainer({
	isSubpathOpen,
	setIsSubpathOpen,
	transitions,
	sectionRef,
	passedVariant,
}: CTAContainerProps) {
	return (
		<motion.div className={styles.ctaContainer} variants={passedVariant}>
			<AnimatePresence exitBeforeEnter>
				{isSubpathOpen ? (
					<motion.button
						key='back'
						animate='animate'
						initial='initial'
						exit='exit'
						variants={transitions.buttons}
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
