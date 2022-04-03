import React from 'react';
import {Link} from 'react-router-dom';

// STYLING
import '../Styles/NavBar.scss';

function NavBar() {
    return(
        <div className="navBarContainer">
            <Link className="navLink" to="/home">
                <p>home</p>
            </Link>
        </div>
    )
}

export default NavBar;