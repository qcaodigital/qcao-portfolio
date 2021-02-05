import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<section className={styles.Home}>
			<header>
				<h1>
					<span>Quan&nbsp;</span>
					<span>Cao</span>
				</h1>
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
					<div className={styles.arrow} />
				</button>
				<div className={styles.line}></div>
			</div>
			<div className={styles.social}>
				<a
					href='https://github.com/qcaodigital'
					target='_blank'
					rel='noopener noreferrer'
					className={styles.icon}>
					<i className='fab fa-github'></i>
				</a>
				<a
					href='mailto: qcao.digital@gmail.com'
					className={styles.icon}>
					<i className='fas fa-at'></i>
				</a>
			</div>
			<h3>portfolio</h3>
		</section>
	);
}
