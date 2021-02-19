import styles from './Nav.module.scss';
import { Dispatch, SetStateAction } from 'react';
import Marker from './components/Marker';
import Brand from './components/Brand';
import { AnimatePresence } from 'framer-motion';
import Link from './../common/Link';
import { navLinksType } from '../../types';

interface NavProps {
	isHBMOpen: boolean;
	setIsHBMOpen: Dispatch<SetStateAction<boolean>>;
	// paths: string[];
	currentPathIdx: number;
	isSubpathOpen: boolean;
	setCurrentPathIdx: Dispatch<SetStateAction<number>>;
	setDirection: Dispatch<SetStateAction<'up' | 'down'>>;
	navLinks: navLinksType;
}

export default function Nav({
	isHBMOpen,
	setIsHBMOpen,
	// paths,
	currentPathIdx,
	isSubpathOpen,
	setCurrentPathIdx,
	setDirection,
	navLinks,
}: NavProps) {
	return (
		<>
			<nav className={styles.Nav}>
				<Link
					to='/'
					callBefore={() => setDirection('up')}
					callAfter={() => {
						if (isHBMOpen) setIsHBMOpen(false);
						setCurrentPathIdx(0);
					}}
				>
					<Brand text={['quan', 'cao', 'digital']} />
				</Link>
				<button
					id={isHBMOpen ? styles.open : ''}
					className={styles.hbm}
					onClick={() => {
						setTimeout(() => setIsHBMOpen((curr) => !curr), 100);
					}}
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
			<AnimatePresence>
				{!isHBMOpen && !isSubpathOpen && (
					<Marker
						currentPathIdx={currentPathIdx}
						navLinks={navLinks}
						setDirection={setDirection}
					/>
				)}
			</AnimatePresence>
		</>
	);
}
