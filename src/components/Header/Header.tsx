import React from 'react';
import c from './Header.module.css'

const Header = () => {
    return (
        <header className={c.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg" alt="" className=""/>
        </header>
    )
}

export default Header;
