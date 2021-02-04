import Home from "./components/Home/";
import { Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Nav from "./components/Nav/";
import NavMarker from "./components/NavMarker/";

export default function App() {
	return (
		<main className={styles.App}>
			<div className={styles.background}>
				<h3>portfolio</h3>
			</div>
			<Nav />
			<NavMarker />
			<Switch>
				<Route exact path='/' render={() => <Home />} />
			</Switch>
		</main>
	);
}
