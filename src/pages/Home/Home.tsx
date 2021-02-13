import styles from './Home.module.scss';
import ScrollCTA from './components/ScrollCTA';
import { viewportType } from './../../components/hooks/useViewport';
import { motion } from 'framer-motion';
import { transitions } from './Home.transitions';
import Link from './../../components/common/Link';
import { Dispatch, SetStateAction } from 'react';

interface HomeProps {
	viewport: viewportType;
	navDirection: 'up' | 'down';
	setDirection: Dispatch<SetStateAction<'up' | 'down'>>;
	setCurrentPath: Dispatch<SetStateAction<number>>;
}

export default function Home({ viewport, navDirection, setDirection, setCurrentPath }: HomeProps) {
	return (
		<motion.section
			id={styles.Home}
			initial={navDirection === 'down' ? 'top' : 'bottom'}
			animate='animate'
			exit={navDirection === 'down' ? 'bottom' : 'top'}
		>
			<motion.header variants={transitions.headerFadeUp}>
				<h1>
					<span>Quan&nbsp;</span>
					<span>Cao</span>
				</h1>
				<h2>full-stack web developer</h2>
				<div className={styles.cta}>
					<Link to='/about' callBefore={() => setDirection('down')}>
						<button>About Me</button>
					</Link>
					<Link to='/about' callBefore={() => setDirection('down')}>
						<button>My Work</button>
					</Link>
				</div>
			</motion.header>
			<ScrollCTA setCurrentPath={setCurrentPath} setDirection={setDirection} />
			<motion.div className={styles.social} variants={transitions.fadeUp}>
				<a
					href='https://github.com/qcaodigital'
					target='_blank'
					rel='noopener noreferrer'
					className={styles.icon}
				>
					<i className='fab fa-github'></i>
				</a>
				<a href='mailto: qcao.digital@gmail.com' className={styles.icon}>
					<i className='fas fa-at'></i>
				</a>
			</motion.div>
			<motion.h3 variants={transitions.fadeOut}>portfolio</motion.h3>
		</motion.section>
	);
}
