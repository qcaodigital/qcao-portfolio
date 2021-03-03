import styles from './ToTop.module.scss';
import { scrollToCallback } from './../../helpers/scrollToCallback';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface ToTopProps {
	sectionRef: React.MutableRefObject<HTMLElement | null>;
	setIsSubpathOpen: Dispatch<SetStateAction<boolean>>;
	isSubpathOpen: boolean;
}

export default function ToTop({ sectionRef, setIsSubpathOpen, isSubpathOpen }: ToTopProps) {
	function handleClick(): void {
		scrollToCallback(sectionRef.current, { top: 0, behavior: 'smooth' }, () => {
			setIsSubpathOpen(false);
		});
	}

	const [scrolled, setScrolled] = useState<boolean>(false);
	useEffect(() => {
		function handleScroll() {
			if (sectionRef.current!.scrollTop > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		}

		const ref = sectionRef.current;
		if (ref) {
			ref.addEventListener('scroll', handleScroll);
			return () => ref!.removeEventListener('scroll', handleScroll);
		}
	}, [sectionRef]);

	return (
		<div
			data-is-visible={isSubpathOpen && scrolled ? 'true' : 'false'}
			className={styles.ToTop}
			onClick={handleClick}
		>
			<i className={`fas fa-chevron-up ${styles.chevron}`}></i>
		</div>
	);
}
