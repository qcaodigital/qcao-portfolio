import { motion } from 'framer-motion';
import styles from './Notifcation.module.scss';
import { useState, useEffect } from 'react';

interface NotifcationProps {
	fontAwesomeIconClasses: string;
	text: string;
	onClick?(): any;
	animationDirection?: string;
	link?: string;
}
export default function Notification({
	fontAwesomeIconClasses,
	text,
	link,
	animationDirection,
	onClick,
}: NotifcationProps) {
	const initial =
		animationDirection === 'x' ? { opacity: 0, x: '-100%' } : { opacity: 0, y: '150%' };
	const exit = { ...initial };

	const [minimized, setMinimized] = useState<boolean>(false);
	const [isHovered, setIsHovered] = useState<boolean>(false);

	useEffect(() => {
		if (!minimized && !isHovered) {
			setTimeout(() => {
				setMinimized(true);
			}, 5000);
		}
	}, [isHovered, minimized]);

	return (
		<motion.button
			onClick={onClick}
			className={styles.notification}
			data-has-action={link ? true : false}
			data-minimized={minimized}
			initial={initial}
			exit={exit}
			animate={{ opacity: 1, y: 0, x: 0 }}
			onMouseOver={() => {
				setMinimized(false);
				setIsHovered(true);
			}}
			onMouseOut={() => {
				setMinimized(true);
				setIsHovered(false);
			}}
		>
			<i className={`${styles.icon} ${fontAwesomeIconClasses}`}></i>
			<p>{text}</p>
			{link && (
				<a href={link} download aria-label={text}>
					{text}
				</a>
			)}
		</motion.button>
	);
}
