import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
interface MinTextProps {
	buttonClassName: string;
	children: JSX.Element;
	threshold: number;
}

export default function MinText({ buttonClassName, threshold = 0.5, children }: MinTextProps) {
	React.Children.only(children);
	if (0 > threshold || threshold > 1) {
		throw new Error('Threshold property must be between 0 and 1');
	}

	const [showFullText, setShowFullText] = useState<boolean>(false);

	const props: { [key: string]: any } = {
		...children.props,
	};

	let text: string[] = children.props.children.split(' ');

	const textFirstHalf: string = text.slice(0, text.length * threshold).join(' ');
	const textSecondHalf: string = text.slice(text.length * threshold).join(' ');
	const secondHalfVariants: { [key: string]: any } = {
		initial: { opacity: 0 },
		exit: { opacity: 0 },
		animate: { opacity: 1 },
	};

	const displayText: JSX.Element[] = [
		<span key={1}>{textFirstHalf + (showFullText ? '' : '...')}</span>,
		<AnimatePresence key={2}>
			{showFullText && (
				<motion.span {...secondHalfVariants}>{' ' + textSecondHalf}</motion.span>
			)}
		</AnimatePresence>,
	];

	return (
		<>
			{React.createElement(children.type, { ...props }, displayText)}
			{!showFullText && (
				<button
					className={buttonClassName}
					onClick={(): void => setShowFullText((curr) => !curr)}
				>
					+ Read more
				</button>
			)}
		</>
	);
}
