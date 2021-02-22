import styles from './Sub.module.scss';

interface SubProps {
	id: string;
	heading: string;
	children: React.ReactNode;
}

export default function Sub({ id, heading, children }: SubProps) {
	return (
		<section id={styles[id]} className={styles.Sub}>
			<header>
				<h3 className={styles.subSectionHeader}>
					<span className={styles.numberMarker}>0{id}</span>
					{heading}
					{/* {id === '3' && <span className={styles.link}>Download my resume</span>} */}
				</h3>
			</header>
			<div className={styles.content}>{children}</div>
		</section>
	);
}
