import styles from './Home.module.scss';
import ScrollCTA from './components/ScrollCTA';
import { motion } from 'framer-motion';
import { transitions } from './Home.transitions';
import Link from './../../components/common/Link';
import { Dispatch, SetStateAction, useEffect } from 'react';

interface HomeProps {
	direction: string;
	setDirection: Dispatch<SetStateAction<string>>;
	setCurrentPathIdx: Dispatch<SetStateAction<number>>;
}

export default function Home({ direction, setDirection, setCurrentPathIdx }: HomeProps) {
	let initial;
	let exit;

	switch (direction) {
		case 'down':
			initial = 'top';
			exit = 'bottom';
			break;
		case 'up':
			initial = 'bottom';
			exit = 'top';
			break;
		case 'center':
			initial = 'center';
			exit = 'center';
	}

	//Default transition direction to 'center' on render
	useEffect(() => {
		setDirection('center');
	}, [setDirection]);

	return (
		<motion.section id={styles.Home} initial={initial} animate='animate' exit={exit}>
			<motion.header variants={transitions.headerFadeUp}>
				<h1>
					<span>Quan&nbsp;</span>
					<span>Cao</span>
				</h1>
				<h2>
					<span>full-stack </span>
					<span>web developer</span>
				</h2>
				<div className={styles.cta}>
					<Link to='/about' callBefore={() => setDirection('down')}>
						About Me
					</Link>
					<Link to='/work' callBefore={() => setDirection('down')}>
						My Work
					</Link>
				</div>
			</motion.header>
			<ScrollCTA setCurrentPathIdx={setCurrentPathIdx} setDirection={setDirection} />
			<motion.div className={styles.social} variants={transitions.socialList}>
				<a
					href='https://github.com/qcaodigital'
					target='_blank'
					rel='noopener noreferrer'
					className={styles.icon}
				>
					<i className='fab fa-github'></i>
				</a>
				<a
					href='https://www.linkedin.com/in/quan-cao-757974210/'
					target='_blank'
					rel='noopener noreferrer'
					className={styles.icon}
				>
					<i className='fab fa-linkedin'></i>
				</a>
				<a
					href='https://twitter.com/qcao_dev'
					target='_blank'
					rel='noopener noreferrer'
					className={styles.icon}
				>
					<i className='fab fa-twitter'></i>
				</a>
				<a href='mailto: qcao.digital@gmail.com' className={styles.icon}>
					<i className='fas fa-at'></i>
				</a>
			</motion.div>
			<motion.h3 variants={transitions.fadeOut}>portfolio</motion.h3>
		</motion.section>
	);
}
