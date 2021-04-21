import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved";
import Header from "./components/Header";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Router>
                    <Switch>
                        <Route path="/saved">
                            <Saved />
                        </Route>
                        <Route path={["/search", "/"]}>
                            <Search />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;
