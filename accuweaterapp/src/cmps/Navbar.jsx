import React, {useEffect} from 'react';
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';

export function _Navbar() {

    useEffect(() => {
        const navbar = document.querySelector('.navbar-container')
        window.onscroll = function () {
            if (window.pageYOffset > 0) {
                navbar.classList.add('scrolled')

            } else {
                navbar.classList.remove('scrolled')

            }
        }
    },[]);


        return (
            <div className="full main-container navbar-container">
                <Link to="/"><div className="logo"><img src={require('../assets/img/icon.png')} alt="logo_img"/></div></Link>
                <ul className="nav-list flex">
                    <li className="item-list"><Link to="/">Home</Link></li>
                    <li className="item-list"><Link to="/favorite">Favorites</Link></li>
                </ul>
                </div>

        )
    
}

export const Navbar = withRouter(_Navbar);

