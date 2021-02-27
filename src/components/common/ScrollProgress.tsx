import styles from './ScrollProgress.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
interface ScrollProgressProps {
	scrollContainerRef: React.MutableRefObject<HTMLElement | null>;
	width?: string;
	color?: string;
}

export default function ScrollProgress({
	scrollContainerRef,
	width = '5px',
	color = 'black',
}: ScrollProgressProps) {
	const [maxScroll, setMaxScroll] = useState<number>(0);
	const [currentScroll, setCurrentScroll] = useState<number>(0);
	const ref = scrollContainerRef.current;

	useEffect(() => {
		function handleScroll() {
			if (ref) {
				setCurrentScroll(ref.scrollTop);
			}
		}

		function handleResize() {
			if (ref) {
				setMaxScroll(ref.scrollHeight - window.innerHeight);
			}
		}
		if (ref) {
			handleResize();
			ref.addEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleResize);

			return () => {
				ref.removeEventListener('scroll', handleScroll);
				window.removeEventListener('resize', handleResize);
			};
		}
	}, [ref]);

	return (
		<div
			className={styles.scrollProgress}
			style={{
				width: width,
				transform: `scaleY(${(currentScroll / maxScroll) * 100}%)`,
				backgroundColor: color,
			}}
		></div>
	);
}
