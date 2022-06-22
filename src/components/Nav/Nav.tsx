import React from "react";
import c from './Nav.module.css';


const Nav = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <a href="src/components/Nav/Nav">Profile</a>
            </div>
            <div className={c.item}>
                <a href="src/components/Nav/Nav">Message</a>
            </div>
            <div className={c.item}>
                <a href="src/components/Nav/Nav">News</a>
            </div>
            <div className={c.item}>
                <a href="src/components/Nav/Nav">Music</a>
            </div>
            <div className={c.item}>
                <a href="src/components/Nav/Nav">Settings</a>
            </div>

        </nav>
    )
}

export default Nav;
