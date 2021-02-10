import styles from './Brand.module.scss';

interface BrandProps {
	text: string[];
}

export default function Brand({ text }: BrandProps) {
	const brandTextSplit: JSX.Element[] = text.map((text: string) => {
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
	});

	return <div className={styles.brand}>{brandTextSplit}</div>;
}
