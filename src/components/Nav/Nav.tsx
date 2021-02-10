import styles from './Nav.module.scss';
import { useState, useEffect } from 'react';
import Marker from './components/Marker';
import Brand from './components/Brand';
import { viewportType } from './../hooks/useViewport';
import { Link, useHistory } from 'react-router-dom';

interface NavProps {
	viewport: viewportType;
}

export default function Nav({ viewport }: NavProps) {
	const [isHbmOpen, setIsHbmOpen] = useState<boolean | null>(null);
	const handleHbmClick = (): void => {
		setIsHbmOpen((curr: boolean | null): boolean => !curr);
	};

	const history = useHistory();
	useEffect(() => {
		console.log(history);
		if (isHbmOpen) {
			history.push('/menu');
		} else if (isHbmOpen !== null) {
			history.goBack();
		}
	}, [isHbmOpen, history]);

	return (
		<>
			<nav className={styles.Nav}>
				<Link to='/'>
					<Brand text={['quan', 'cao', 'digital']} />
				</Link>
				<button
					id={isHbmOpen ? styles.open : ''}
					className={styles.hbm}
					onClick={handleHbmClick}
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
			<Marker />
		</>
	);
}
