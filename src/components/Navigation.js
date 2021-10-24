import React from "react";
import { Route, Switch, useLocation} from "react-router-dom";
import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";
import Home from "../pages/Home";
import Navbar from "./Navbar";

export default function Navigation() {
    const match = useLocation();
    console.log({ match })
    const classNames = {
        "/": "bg-home",
        "/crew": "bg-crew",
        "/technology": "bg-technology",
        "/destination": "bg-destination",
    }
    return (
        <div className={`h-screen font-barlow text-white ${classNames[match.pathname]} bg-cover pt-10`}>
        <Navbar />

        <Switch>
            <Route path="/destination">
                <Destination />
            </Route>
            <Route path="/crew">
                <Crew />
            </Route>
            <Route path="/technology">
                <Technology />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </div>)
}