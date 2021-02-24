import { useState } from 'react';
import { useEffect } from 'react';

interface ParallaxWrapperProps {
	scrollElement: React.MutableRefObject<HTMLElement | null>;
	children: JSX.Element;
}

export default function ParallaxWrapper({ scrollElement, children }: ParallaxWrapperProps) {
	const [scrollPosition, setScrollPosition] = useState<number>(scrollElement.current!.scrollTop);
	useEffect(() => {
		function handleScroll() {
			setScrollPosition(scrollElement.current!.scrollTop);
		}
		if (scrollElement.current) {
			scrollElement.current.addEventListener('scroll', handleScroll);
		}
	}, [scrollPosition, scrollElement]);
	return (
		<div style={{ transform: 'translateY(50px)' }} {...children.props}>
			{children}
		</div>
	);
}
