import styles from "./Nav.module.scss";

export default function Nav() {
	return (
		<nav className={styles.Nav}>
			<div className={styles.brand}>
				<span>qc.d</span>
			</div>
			<button className={styles.hbm}>
				<p>menu</p>
				<div className={styles.hbmButton}>
					<div id={styles.top} />
					<div id={styles.bottom} />
				</div>
			</button>
			<div className={styles.markerContainer}></div>
		</nav>
	);
}
