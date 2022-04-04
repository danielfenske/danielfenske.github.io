import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/personal-logo.png';

// STYLING
import '../Styles/NavBar.scss';

function NavBar() {
    return (
        <div className="navBarContainer">
            <img src={Logo} alt="DF logo"/>
            <div className="lineBreak"></div>
            <div className="linksContainer">
                <Link className="navLink" to="/home">
                    <p>home</p>
                </Link>

                <Link className="navLink" to="/portfolio">
                    <p>portfolio</p>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;