import React from 'react';
import siteLogo from '../assets/company-logo-white.svg';
import headerStyle from "../stylesheets/Header.module.css";

export const Header = () => {
 return(
     <header className={headerStyle.siteHeader}>
        <div className={headerStyle.center}>
            <a href="https://www.oursky.com/">
                <img className={headerStyle.siteLogo} src={siteLogo} alt="OurSky"></img>
            </a>
            <nav>
                <ul className={headerStyle.navElementWrapper}>
                    <li className={headerStyle.navElement}>
                    <a href="#">Products</a>
                    </li>
                    <li className={headerStyle.navElement}>
                    <a href="#">Services</a>
                    </li>
                    <li className={headerStyle.navElement}>
                    <a href="#">Resourse</a>
                    </li>
                    <li className={headerStyle.navElement}>
                    <a href="#">About Us</a>
                    </li>
                    <li className={headerStyle.navElement}>
                    <a className={headerStyle.navCTA} href="https://www.oursky.com/enquiry">
                        Start your project
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
     </header>
 )
}