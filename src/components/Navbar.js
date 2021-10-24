import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/shared/logo.svg";

function formatRouteNumber(index) {
  const num = index + 1;
  return num < 10 ? `0${num}` : num;
}

export default function Navbar({ routes }) {
  return (
    <div className="flex items-center">
      <Logo />
      <ul className="ml-auto flex space-x-12 h-24 items-center bg-whiteTransparent backdrop-filter backdrop-blur pl-32 pr-[165px]">
        {routes.map((r, index) => (
          <li className="uppercase tracking-navText">
            <Link to={r.path}>
              <span className="mr-3 font-bold">{formatRouteNumber(index)}</span>
              {r.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
