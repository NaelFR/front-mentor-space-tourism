import React from "react";
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from "../assets/shared/logo.svg"

export default function Navbar() {
    return (
        <div>
            <Logo />
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/destination">DESTINATION</Link>
                </li>
                <li>
                    <Link to="/crew">CREW</Link>
                </li>
                <li>
                    <Link to="/technology">TECHNOLOGY</Link>
                </li>
            </ul>
        </div>
    )
}