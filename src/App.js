import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import "./styles/index.css";

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
