import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/shared/logo.svg";

function formatRouteNumber(index) {
  const num = index + 1;
  return num < 10 ? `0${num}` : num;
}

export default function Navbar({ routes }) {
  return (
    <header className="flex items-center justify-between relative">
      <Logo />

      <nav>
        <ul className="ml-auto flex gap-x-12 h-24 items-center bg-whiteTransparent backdrop-filter backdrop-blur px-12 lg:pl-32 lg:pr-[165px] relative">
          <div className="h-1 bg-white opacity-25 -left-1/3 xl2:-left-1/2 absolute w-[350px] xl2:w-[473px] z-10 hidden xl:block"></div>
          {routes.map((r, index) => (
            <li className="uppercase tracking-navText">
              <Link to={r.path}>
                <span className="hidden lg:inline-block mr-3 font-bold">
                  {formatRouteNumber(index)}
                </span>
                {r.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
