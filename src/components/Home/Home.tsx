import Cube from './components/Cube';
import styles from './Home.module.scss';
import ScrollCTA from './components/ScrollCTA';

interface HomeProps {
	viewport: any;
}

export default function Home({ viewport }: HomeProps) {
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
						<span>About Me</span>
					</button>
					<button>
						<span>My Work</span>
					</button>
				</div>
			</header>
			<ScrollCTA viewport={viewport} />
			<div className={styles.social}>
				<a
					href='https://github.com/qcaodigital'
					target='_blank'
					rel='noopener noreferrer'
					className={styles.icon}
				>
					<i className='fab fa-github'></i>
				</a>
				<a
					href='mailto: qcao.digital@gmail.com'
					className={styles.icon}
				>
					<i className='fas fa-at'></i>
				</a>
			</div>
			<h3>portfolio</h3>
			{/* <Cube /> */}
		</section>
	);
}
