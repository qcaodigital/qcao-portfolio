import styles from './CTAContainer.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { scrollToCallback } from '../../helpers/scrollToCallback';
import SVGBorderButton from './SVGBorderButton';

interface CTAContainerProps {
	isSubpathOpen: boolean;
	transitions: { [key: string]: any };
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	ctaText?: string;
	// ctaAction?: (...args: any[]) => any;
}

export default function CTAContainer({
	isSubpathOpen,
	setIsSubpathOpen,
	transitions,
	sectionRef,
	ctaText,
}: // ctaAction,
CTAContainerProps) {
	return (
		<motion.div className={styles.ctaContainer} custom={1} variants={transitions.buttons}>
			<AnimatePresence exitBeforeEnter>
				{isSubpathOpen ? (
					<motion.div
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
						<SVGBorderButton text='back' animate={false} />
					</motion.div>
				) : (
					<motion.div
						key='open subpath'
						animate='animate'
						initial='initial'
						exit='exit'
						variants={transitions.buttons}
						onClick={() => {
							setIsSubpathOpen(true);
							// if (ctaAction) {
							// 	ctaAction();
							// }
						}}
					>
						<SVGBorderButton text={ctaText || 'read more'} />
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
