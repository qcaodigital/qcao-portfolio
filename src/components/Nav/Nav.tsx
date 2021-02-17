import styles from './Nav.module.scss';
import { Dispatch, SetStateAction } from 'react';
import Marker from './components/Marker';
import Brand from './components/Brand';
import { AnimatePresence } from 'framer-motion';
import Link from './../common/Link';
import { CSSProperties } from 'react';

interface customCSS extends CSSProperties {
	'--main-color': string;
}

interface NavProps {
	isHBMOpen: boolean;
	setIsHBMOpen: Dispatch<SetStateAction<boolean>>;
	paths: string[];
	currentPath: number;
	isSubpathOpen: boolean;
	setCurrentPath: Dispatch<SetStateAction<number>>;
	setDirection: Dispatch<SetStateAction<'up' | 'down'>>;
}

export default function Nav({
	isHBMOpen,
	setIsHBMOpen,
	paths,
	currentPath,
	isSubpathOpen,
	setCurrentPath,
	setDirection,
}: NavProps) {
	return (
		<>
			<nav
				className={styles.Nav}
				// style={
				// 	{
				// 		'--main-color':
				// 			isSubpathOpen && currentPath === 1 && !isHBMOpen ? 'white' : 'black',
				// 	} as customCSS
				// }
			>
				<Link
					to='/'
					callBefore={() => setDirection('up')}
					callAfter={() => {
						if (isHBMOpen) setIsHBMOpen(false);
						setCurrentPath(0);
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
				{!isHBMOpen && !isSubpathOpen && <Marker currentPath={currentPath} paths={paths} />}
			</AnimatePresence>
		</>
	);
}
