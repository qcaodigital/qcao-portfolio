import React from 'react';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './TypeWriter.module.scss';

interface TypeWriterProps {
	trigger?: 'inView' | boolean;
	onAnimationComplete?: () => void;
	children: JSX.Element;
	delay?: number;
	color?: string;
}

export default function TypeWriter({
	trigger,
	children,
	onAnimationComplete,
	delay,
	color = 'black',
}: TypeWriterProps) {
	React.Children.only(children);

	const { type, props } = children;
	const text: string = props.children;

	const className: string = `${styles.typeWriterAnimation} ${props.className}`;
	const { ref, inView } = useInView({ triggerOnce: true });
	const style = { ...children.props.style, 'var(--color)': color };
	console.log(style);
	const newProps: any = { ...props, ref, className, style };

	const [textArr, setTextArr] = useState<string[]>([]);

	useEffect(() => {
		function traverseText(currentArray: string[], currentIndex: number): void {
			if (currentIndex > text.length) {
				if (onAnimationComplete) onAnimationComplete();
				return;
			}
			setTextArr((textArr) => [...textArr, [...text][currentIndex]]);
			setTimeout(() => {
				traverseText(textArr, currentIndex + 1);
			}, 75);
		}

		if (trigger === 'inView' && inView) {
			traverseText(textArr, 0);
		} else if (trigger === true) {
			traverseText(textArr, 0);
		} else if (!trigger) {
			setTextArr([...text]);
		}
		// eslint-disable-next-line
	}, [inView, text]);

	return <>{React.createElement(type, newProps, textArr)}</>;
}
