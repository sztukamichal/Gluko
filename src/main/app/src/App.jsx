import React, {Component} from "react";
import styles from "./App.css";

class App extends Component {
    static render() {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <img src={"logo.svg"} className={styles.logo} alt="logo"/>
                    <h1 className={styles.title}>Welcome to React !</h1>
                </header>
                <p className={styles.intro}>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
