import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '../../assets/home.svg'

export function Navbar() {
    const location = useLocation();
    const path = location.pathname;
    const isPortfolioPage = path === '/portfolio';
    const isAboutPage = path === '/aboutme';
    const isBlogsPage = path === '/blogs'

    return (
        <div className="nav">
            <div className="navicon">
                <Link to='/'><img src={HomeIcon} alt="" id='homeicon'/></Link>
            </div>
            <div className="navbar">
                <Link to="/portfolio" id='Port' className={`navbutton ${isPortfolioPage ? 'active' : ''}`} >Portfolio</Link>
                <Link to='/aboutme' id='About' className={`navbutton ${isAboutPage ? 'active' : ''}`}>About Me</Link>
                <Link to="/blogs" id='Contact' className={`navbutton ${isBlogsPage ? 'active' : ''}`}>Blog</Link>
            </div>
        </div>
    )
}