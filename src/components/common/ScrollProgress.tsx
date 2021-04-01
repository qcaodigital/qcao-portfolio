import styles from './ScrollProgress.module.scss';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
	const [hoverPoint, setHoverPoint] = useState<number>(0);
	const scrollProgressRef = useRef<HTMLDivElement | null>(null);
	const scrollContainer = scrollContainerRef.current;

	//Handle animation and paint
	useEffect(() => {
		function handleScroll() {
			if (scrollContainer) {
				setCurrentScroll(scrollContainer.scrollTop);
			}
		}

		function handleResize() {
			if (scrollContainer) {
				setMaxScroll(scrollContainer.scrollHeight - window.innerHeight);
			}
		}

		if (scrollContainer) {
			handleScroll();
			handleResize();
			scrollContainer.addEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleResize);

			return () => {
				scrollContainer.removeEventListener('scroll', handleScroll);
				window.removeEventListener('resize', handleResize);
			};
		}
	}, [scrollContainer, maxScroll]);

	//Handle scroll anchoring on click
	useEffect(() => {
		const scrollProgress = scrollProgressRef.current;

		function handleClick(e: MouseEvent) {
			scrollContainer?.scrollTo({
				top: (e.clientY / window.innerHeight) * maxScroll,
				behavior: 'smooth',
			});
		}

		if (scrollProgress) {
			scrollProgress.addEventListener('click', handleClick);
			return () => scrollProgress.removeEventListener('click', handleClick);
		}
	}, [scrollProgressRef, scrollContainer, maxScroll]);

	//Handle hover effects
	useEffect(() => {
		const scrollProgress = scrollProgressRef.current;
		function handleMouseOver(e: MouseEvent) {
			setHoverPoint(e.clientY);
		}

		function handleMouseOut() {
			setHoverPoint(0);
		}

		if (scrollProgress) {
			scrollProgress.addEventListener('mouseover', handleMouseOver);
			scrollProgress.addEventListener('mousemove', handleMouseOver);
			scrollProgress.addEventListener('mouseout', handleMouseOut);
			return () => {
				scrollProgress.removeEventListener('mouseover', handleMouseOver);
				scrollProgress.removeEventListener('mousemove', handleMouseOver);
				scrollProgress.removeEventListener('mouseout', handleMouseOut);
			};
		}
	}, [maxScroll]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			ref={scrollProgressRef}
			className={styles.scrollProgress}
			style={{
				width: `calc(${width} * 3)`,
			}}
		>
			<div
				className={styles.bar}
				style={{
					transform: `scaleY(${(currentScroll / maxScroll) * 100}%)`,
					backgroundColor: color,
				}}
			></div>
			<div
				className={styles.hovered}
				style={{
					transform: `scaleY(${(hoverPoint / window.innerHeight) * 100}%)`,
					backgroundColor: color,
				}}
			></div>
		</motion.div>
	);
}
