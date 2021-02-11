import styles from './Nav.module.scss';
import { Dispatch, SetStateAction } from 'react';
import Marker from './components/Marker';
import Brand from './components/Brand';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

interface NavProps {
	isHBMOpen: boolean;
	setIsHBMOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Nav({ isHBMOpen, setIsHBMOpen }: NavProps) {
	return (
		<>
			<nav className={styles.Nav}>
				<Link to='/'>
					<Brand text={['quan', 'cao', 'digital']} />
				</Link>
				<button
					id={isHBMOpen ? styles.open : ''}
					className={styles.hbm}
					onClick={() => setIsHBMOpen((curr) => !curr)}
				>
					<p>menu</p>
					<div className={styles.hbmButton}>
						<div id={styles.top} />
						<div id={styles.bottom}>
							<div id={styles.left} className={styles.half} />
							<div id={styles.right} className={styles.half} />
						</div>
					</div>
				</button>
				<div className={styles.markerContainer}></div>
			</nav>
			<AnimatePresence>{!isHBMOpen && <Marker />}</AnimatePresence>
		</>
	);
}
