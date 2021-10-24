import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";
import Home from "../pages/Home";
import Navbar from "./Navbar";

const routes = [
  {
    title: "home",
    path: "/",
    component: Home,
  },
  {
    title: "destination",
    path: "/destination",
    component: Destination,
  },
  {
    title: "crew",
    path: "/crew",
    component: Crew,
  },
  {
    title: "technology",
    path: "/technology",
    component: Technology,
  },
];

export default function Navigation() {
  const match = useLocation();
  console.log({ match });
  const classNames = {
    "/": "bg-home",
    "/crew": "bg-crew",
    "/technology": "bg-technology",
    "/destination": "bg-destination",
  };
  return (
    <div
      className={`h-screen font-barlowCondensed text-white ${
        classNames[match.pathname]
      } bg-cover pt-10 pl-[55px]`}
    >
      <Navbar routes={routes} />

      <div className="px-[165px] h-[calc(100vh-136px)]">
        <Switch>
          {routes.map((r) => {
            const Component = r.component;
            return (
              <Route key={r.path} path={r.path}>
                <Component />
              </Route>
            );
          })}
        </Switch>
      </div>
    </div>
  );
}
