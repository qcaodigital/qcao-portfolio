import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<section className={styles.Home}>
			<header>
				<h1>Quan Cao</h1>
				<h2>full-stack web developer</h2>
				<div className={styles.cta}>
					<button>
						<Link to='/about'>About Me</Link>
					</button>
					<button>
						<Link to='/work'>My Work</Link>
					</button>
				</div>
			</header>
			<div className={styles.scrollCta}>
				<div className={styles.textBox}>
					<p>scroll.</p>
				</div>
				<button className={styles.circle}>
					<div />
				</button>
				<div className={styles.line}></div>
			</div>
		</section>
	);
}
