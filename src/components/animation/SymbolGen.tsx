import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface SymbolGenProps {
	trigger: 'inView' | boolean;
	onAnimationComplete?: () => void;
	children: JSX.Element;
}

export default function SymbolGen({ trigger, onAnimationComplete, children }: SymbolGenProps) {
	React.Children.only(children);

	const { props, type }: any = children;
	const speed: number = 7;
	const symbols: string = '&*-¤=+.#%~';
	const text: string = props.children;
	const [textArr, setTextArr] = useState<string[]>([...text]);
	const [count, setCount] = useState<number>(-1);

	const [ref, inView] = useInView();
	const newProps: any = {
		ref,
		...props,
	};

	useEffect(() => {
		if (
			count < [...text].length * speed &&
			((typeof trigger === 'boolean' && trigger) || inView)
		) {
			setTimeout(() => {
				setCount((curr) => curr + 1);
				setTextArr((textArr) =>
					textArr.map((char, idx) => {
						if (idx === 0 || count === idx * speed) {
							return [...text][idx];
						} else if ([...text].includes(char) && count > 0) {
							return char;
						} else return [...symbols][Math.floor(Math.random() * symbols.length)];
					})
				);
			}, 50);
		} else if (count >= [...text].length * speed && onAnimationComplete) {
			onAnimationComplete();
		}
	}, [count, text, trigger, onAnimationComplete, inView]);

	return React.createElement(type, newProps, textArr);
}
