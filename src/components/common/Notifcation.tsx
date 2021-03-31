import { motion } from 'framer-motion';
import styles from './Notifcation.module.scss';
import { useState, useEffect } from 'react';

interface NotifcationProps {
	fontAwesomeIconClasses: string;
	text: string;
	filename?: string;
	direction?: string;
}
export default function Notification({
	fontAwesomeIconClasses,
	text,
	filename,
	direction,
}: NotifcationProps) {
	const initial = direction === 'x' ? { opacity: 0, x: '-100%' } : { opacity: 0, y: '150%' };
	const exit = { ...initial };

	const [minimized, setMinimized] = useState<boolean>(false);
	const [isHovered, setIsHovered] = useState<boolean>(false);

	useEffect(() => {
		if (filename && !minimized && !isHovered) {
			setTimeout(() => {
				setMinimized(true);
			}, 5000);
		}
	}, [filename, isHovered, minimized]);

	return (
		<motion.div
			className={styles.notification}
			data-has-action={filename ? true : false}
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
			<a href={`/files/${filename}`} download aria-label={text}>
				{text}
			</a>
		</motion.div>
	);
}
