import { Switch, Route, useLocation } from 'react-router-dom';
import styles from './App.module.scss';
import useViewport from './components/hooks/useViewport';
import { viewportType } from './components/hooks/useViewport';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import { AnimatePresence } from 'framer-motion';
import HBM from './components/Nav/components/HBM';
import { navLinksType } from './types';

export default function App() {
	const viewport: viewportType = useViewport();
	const location = useLocation<Location>();
	const navLinks: navLinksType = [
		{ path: '/', label: 'home', isActive: true },
		{ path: '/about', label: 'about me', isActive: false },
		{ path: '/work', label: 'my work', isActive: false },
		{ path: '/contact', label: 'contact', isActive: false },
		{ path: '/blog', label: 'blog', isActive: false },
	];

	return (
		<main className={styles.App}>
			<div className={styles.background} />
			<Nav viewport={viewport} />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route
						exact
						path='/'
						render={() => <Home viewport={viewport} />}
					/>
					<Route
						exact
						path='/menu'
						render={() => (
							<HBM viewport={viewport} navLinks={navLinks} />
						)}
					/>
				</Switch>
			</AnimatePresence>
		</main>
	);
}
