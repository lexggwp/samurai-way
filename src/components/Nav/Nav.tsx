import React from "react";
import c from './Nav.module.css';
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/dialogs">Message</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="src/components/Nav/Nav">News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="src/components/Nav/Nav">Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="src/components/Nav/Nav">Settings</NavLink>
            </div>

        </nav>
    )
}

export default Nav;
