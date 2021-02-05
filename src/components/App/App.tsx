import Home from "../Home/";
import { Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Nav from "../Nav/";
import NavMarker from "../Nav/NavMarker/";

export default function App() {
	return (
		<main className={styles.App}>
			<div className={styles.background} />
			<Nav />
			<NavMarker />
			<Switch>
				<Route exact path='/' render={() => <Home />} />
			</Switch>
		</main>
	);
}
