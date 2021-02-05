import styles from "./Nav.module.scss";
import { useState } from "react";

export default function Nav() {
	// const brandText = ["quan", "cao", "digital"];
	// const brandTextSplit = brandText.map((text) => {
	// 	const [firstLetter, ...rest] = [...text];
	// 	console.log(firstLetter, rest);
	// 	return (
	// 		<span>
	// 			<span className={styles.firstLetter}>{firstLetter}</span>
	// 			<span className={styles.rest}>{rest}</span>
	// 		</span>
	// 	);
	// });
	interface stateArg {
		name: string;
		age: number;
	}
	const [count, setCount] = useState<stateArg>({ name: "quan", age: 30 });

	return (
		<nav className={styles.Nav}>
			{/* <div className={styles.brand}>{brandTextSplit}</div> */}
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
