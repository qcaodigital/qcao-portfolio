import styles from './Nav.module.scss';
import { useState } from 'react';

export default function Nav() {
	const brandTextSplit: JSX.Element[] = ['quan', 'cao', 'digital'].map(
		(text: string) => {
			const [firstLetter, ...rest]: string[] = [...text];
			return (
				<span key={text} className={styles[text]}>
					<span className={styles.firstLetter}>{firstLetter}</span>
					{rest.map((letter: string, idx: number) => (
						<span key={letter + idx} className={styles.rest}>
							{letter}
						</span>
					))}
				</span>
			);
		}
	);

	const [isHbmOpen, setIsHbmOpen] = useState<boolean>(false);
	const handleHbmClick = (): void => {
		setIsHbmOpen((curr: boolean): boolean => !curr);
	};

	return (
		<nav className={styles.Nav}>
			<div className={styles.brand}>{brandTextSplit}</div>
			<button
				id={isHbmOpen ? styles.open : ''}
				className={styles.hbm}
				onClick={handleHbmClick}
			>
				<p>menu</p>
				<div className={styles.hbmButton}>
					<div id={styles.top} />
					<div id={styles.bottom}>
						<div id={styles.left} className={styles.half} />
						<div id={styles.right} className={styles.half} />
					</div>
				</div>
			</button>
			<div className={styles.markerContainer}></div>
		</nav>
	);
}
