import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SlideUpProps {
	trigger: 'inView' | boolean;
	onAnimationComplete?: () => void;
	children: JSX.Element;
}

export default function SlideUp({ trigger, onAnimationComplete, children }: SlideUpProps) {
	React.Children.only(children);
	if (!children.props.className) {
		console.warn(
			"SlideUp's child component does not have a className. Using a className is recommended as relying on element tags for CSS styling may result in unexpected behavior."
		);
	}

	const [ref, inView] = useInView({ triggerOnce: true });
	const style = {
		...children.props.style,
		...{ overflowY: 'hidden' },
	};
	const newContainerProps = {
		...children.props,
		style,
		ref,
	};

	const spanTextNode = (
		<span
			style={{
				display: 'inline-block',
				fontFamily: 'inherit',
				fontSize: 'inherit',
				lineHeight: 'inherit',
				letterSpacing: 'inherit',
				textDecoration: 'inherit',
				textShadow: 'inherit',
				transition: '750ms ease-out',
				transform: `translateY(${
					(trigger === 'inView' && inView) || (typeof trigger === 'boolean' && trigger)
						? '0'
						: '100%'
				})`,
			}}
		>
			{children.props.children}
		</span>
	);

	return React.createElement(children.type, newContainerProps, spanTextNode);
}
