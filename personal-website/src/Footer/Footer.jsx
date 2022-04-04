import React from 'react';
import { Link } from 'react-router-dom';

// SASS/icon imports
import '../Styles/Footer.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <div className="footer">
            <div className="iconContainer">
                <a href="https://www.linkedin.com/in/danielfenske/" target="_blank"><LinkedInIcon fontSize="large" /></a>
                <a href="https://github.com/danielfenske" target="_blank"><GitHubIcon fontSize="large" /></a>
                <a href="mailto: dlfenske.fenske@gmail.com" target="_blank"><EmailIcon fontSize="large" /></a>
            </div>
        </div>
    )
}

export default Footer;