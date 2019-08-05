import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { Helmet } from "react-helmet";
import "./App.css";
import "./styles/index.css";

function App() {
  const styles = {};
  return (
    <div>
      <Helmet
        bodyAttributes={{
          style:
            "background-image : linear-gradient(to bottom, #9fa8a3 70%, #e3e0cf)"
        }}
      />
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
