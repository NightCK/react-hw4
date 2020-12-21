import React from 'react';
import styleOurService from "../stylesheets/OurService.module.css";
import imgServiceUIUX from "../assets/img_service_UIUX.png";
import imgServiceSkylab from "../assets/img_service_Skylab.svg";
import imgServiceProductDev from "../assets/img_service_productDev.svg";
import imgServiceMicroServices from "../assets/img_service_MicroServices.svg";

export const OurService = () => {
    return (
        <section className={styleOurService.sectionServices}>
            <div className={styleOurService.center}>    
                <div className={styleOurService.textBlock}>
                    <h3>Digital transformation powered by ingenuity</h3>
                    <div>
                        <p>
                        We don’t just build apps. Oursky creates digital experiences that
                        help our partners succeed in today’s fast-paced business
                        landscape.
                        </p>

                        <p>
                        work with founders in creating their blueprints for success — from
                        minimum viable products (MVPs) to interactive prototypes. Oursky
                        uses an iterative approach to help startups launch faster, scale
                        quickly, and deliver great user experience.
                        </p>

                        <p>
                        Oursky partners with enterprises to fast-track their digital
                        transformation, helping them adopt and transition to cloud-native
                        technologies and microservices.
                        </p>

                        <p>
                        <a href="https://www.oursky.com/services">
                        More on our core services
                        </a>
                        </p>
                    </div>
                </div>

                <div className={styleOurService.menuBlock}>
                    <h5>Core Services</h5>
                    <ul>
                        <li>
                            <a
                            className={styleOurService.menuItem}
                            href="https://www.oursky.com/product-development"
                            >
                                <img
                                className={styleOurService.menuItemIcon}
                                src={imgServiceProductDev}
                                alt="Product Development"
                                />
                                <div className={styleOurService.menuItemText}>
                                    <h6>Digital Product Development</h6>
                                    <p>Accuracy and creativity for web and mobile</p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a className={styleOurService.menuItem} href="https://skylab.ai/">
                                <img
                                className={styleOurService.menuItemIcon}
                                src={imgServiceSkylab}
                                alt="Skylab.AI"
                                />
                                <div className={styleOurService.menuItemText}>
                                    <h6>Skylab.AI</h6>
                                    <p>
                                    Scalable machine learning and artificial intelligence (AI)
                                    solutions
                                    </p>
                                </div>
                            </a>
                            </li>
                        <li>
                            <a className={styleOurService.menuItem} href="https://www.oursky.com/design">
                                <img
                                className={styleOurService.menuItemIcon}
                                src={imgServiceUIUX}
                                alt="Design"
                                />
                                <div className={styleOurService.menuItemText}>
                                    <h6>UI/UX and Digital Product Design</h6>
                                    <p>
                                    User-centric, intuitive, and immersive digital experience
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                            className={styleOurService.menuItem}
                            href="https://www.oursky.com/microservices"
                            >
                                <img
                                className={styleOurService.menuItemIcon}
                                src={imgServiceMicroServices}
                                alt="Micro Services"
                                />
                                <div className={styleOurService.menuItemText}>
                                    <h6>Microservices and Containerization</h6>
                                    <p>
                                    Become cloud native and adopt microservices and continuous
                                    integration/delivery (CI/CD)
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}