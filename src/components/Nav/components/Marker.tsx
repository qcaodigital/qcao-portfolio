import styles from './Marker.module.scss';

export default function NavMarker() {
	return (
		<div className={styles.NavMarker}>
			<div className={styles.active}></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}
