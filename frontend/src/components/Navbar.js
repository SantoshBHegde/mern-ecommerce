import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons';

const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} className="fa-lg" />
const wishListIcon = <FontAwesomeIcon icon={faHeart} className="fa-lg" />

const Navbar = () => {
    const [toggle, setToggle] = useState("");
    

    return (
        <nav>
            <ul className="menu">
                <li className="logo"><Link to="/"><b>Shopdeal</b></Link></li>
                <li className={`item ${toggle}`}><Link to="/wishlist">{wishListIcon}<span className="sideBadge">6</span></Link></li>
                <li className={`item ${toggle}`}><Link to="/cart">{cartIcon}<span className="sideBadge">6</span></Link></li>
                <li className={`item ${toggle}`}><Link to="/login" className="black-empty-button">Login</Link></li>
                <li className="toggle" onClick={() => toggle===""?setToggle("active"):setToggle("")}><span className="bars"></span></li>
            </ul>
        </nav>
    )
}

export default Navbar;
