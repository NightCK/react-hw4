import React from 'react';
import styleFooter from "../stylesheets/Footer.module.css";
import logoFooter from "../assets/company-logo-white.svg"

export const Footer = () => {
    return (
        <footer>
            <div className={styleFooter.siteFooter}>
                <div className={styleFooter.footerCell}>
                    <img src={logoFooter} alt="OurSky" />
                </div>
                <div className={styleFooter.footerCell}>
                    <span>Products</span>
                    <ul>
                        <li>
                        <a href="#">Authgear</a>
                        </li>
                        <li>
                        <a href="#">FormX.ai</a>
                        </li>
                        <li>
                        <a href="#">Gesprek</a>
                        </li>
                    </ul>
                </div>

                <div className={styleFooter.footerCell}>
                    <span>Services</span>
                    <ul>
                        <li>
                        <a href="">Digital Product Development</a>
                        </li>
                        <li>
                        <a href="">Mobile App Development</a>
                        </li>
                        <li>
                        <a href="">Web App Development</a>
                        </li>
                        <li>
                        <a href="">UI/UX and Digital Product Design</a>
                        </li>
                        <li>
                        <a href="">Machine Learning Solutions (Skylab.ai)</a>
                        </li>
                        <li>
                        <a href="">Microservices and Containerization</a>
                        </li>
                    </ul>
                </div>
                <div className={styleFooter.footerCell}>
                    <span>Know More</span>
                    <ul>
                        <li>
                        <a href="#">About Us</a>
                        </li>
                        <li>
                        <a href="#">Tech Stack</a>
                        </li>
                        <li>
                        <a href="#">Case Studies</a>
                        </li>
                        <li>
                        <a href="#">Oursky Blog</a>
                        </li>
                        <li>
                        <a href="#">Engineering Blog</a>
                        </li>
                        <li>
                        <a href="#">Open-Source Projects</a>
                        </li>
                    </ul>
                </div>
                <div className={styleFooter.footerCell}>
                    <span>Connect</span>
                    <ul>
                        <li>
                        <a href="#">Facebook</a>
                        </li>
                        <li>
                        <a href="#">Linkedin</a>
                        </li>
                        <li>
                        <a href="#">Twitter</a>
                        </li>
                        <li>
                        <a href="#">Service Enquiry</a>
                        </li>
                        <li>
                        <a href="#">Find Us</a>
                        </li>
                        <li>
                        <a href="#">Join Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}