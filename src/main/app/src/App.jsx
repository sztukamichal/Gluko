import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import styles from "./App.css";
import HelloRouter from "./components/HelloRouter/HelloRouter.jsx";

class App extends Component {
	render() {
		return (
			<div className={styles.container}>
				<header className={styles.header}>
					<img src={"logo.svg"} className={styles.logo} alt="logo"/>
					<h1 className={styles.title}>Welcome to React !</h1>
				</header>
				<Switch>
					<Route path="/hello" component={HelloRouter}/>
				</Switch>
			</div>
		);
	}
}

export default App;
