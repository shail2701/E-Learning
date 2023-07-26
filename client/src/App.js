import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Header from "./components/header/Header";
import React from "react";
import { useContext } from "react";
import { Context } from "./context/Context";
import "./App.css";
import Fader from "./components/Fader";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


function App() {
    const { user } = useContext(Context);
    return ( 

    <Router>
<div className="App">
<Fader></Fader></div>
        <Topbar/>
        <Routes >
        <
        Route exact path = "/"
        element = { < Home / > }/>
    <Route>
         <
        Route path = "register"
        element = { user ? < Home / > : < Register / > }
        /> <
        Route path = "login"
        element = { user ? < Home / > : < Login / > }
        /><
        Route path = "write"
        element = { user ? < Write / > : < Login / > }
        /><
        Route path = "settings"
        element = { user ? < Settings / > : < Login / > }
        /> <
        Route path = "/post/:postid"
        element = { < Single / > }
        />
        </Route>
        </Routes>

        </Router>
    );
}

export default App;