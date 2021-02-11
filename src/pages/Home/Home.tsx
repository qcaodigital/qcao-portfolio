import styles from './Home.module.scss';
import ScrollCTA from './components/ScrollCTA';
import { viewportType } from './../../components/hooks/useViewport';
import { motion } from 'framer-motion';
import { transitions } from './Home.transitions';
import { Link } from 'react-router-dom';

interface HomeProps {
	viewport: viewportType;
}

export default function Home({ viewport }: HomeProps) {
	return (
		<motion.section
			id={styles.Home}
			animate='animate'
			initial='initial'
			exit='exit'
		>
			<motion.header variants={transitions.headerFadeUp}>
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
						<Link to='/about'>My Work</Link>
					</button>
				</div>
			</motion.header>
			<ScrollCTA viewport={viewport} />
			<motion.div className={styles.social} variants={transitions.fadeUp}>
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
			</motion.div>
			<motion.h3 variants={transitions.fadeOut}>portfolio</motion.h3>
		</motion.section>
	);
}
