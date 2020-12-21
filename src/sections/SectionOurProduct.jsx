import React from 'react';
import styleOurProduct from "../stylesheets/OurProduct.module.css";
import imgProductAuthgear from "../assets/img_product_Authgear.png"
import imgProductFormX from "../assets/img_product_FormX.png"
import imgProductGesprek from "../assets/img_product_Gesprek-chat.png"

export const OurProduct = () => {
    return (
        <section className={styleOurProduct.sectionProduct}>
            <div className={styleOurProduct.center}>    
                <div className={styleOurProduct.menuBlock}>
                    <h5>Products</h5>
                    <ul>
                        <li>
                            <a
                            className={styleOurProduct.menuItem}
                            href="https://formx.ai/"
                            >
                                <img
                                className={styleOurProduct.menuItemIcon}
                                src={imgProductFormX}
                                alt="FormX"
                                />
                                <div className={styleOurProduct.menuItemText}>
                                    <h6>FormX.ai</h6>
                                    <p>AI-powered data capture and extraction solution</p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a className={styleOurProduct.menuItem} href="https://www.authgear.com/">
                                <img
                                className={styleOurProduct.menuItemIcon}
                                src={imgProductAuthgear}
                                alt="Authgear"
                                />
                                <div className={styleOurProduct.menuItemText}>
                                    <h6>Authgear</h6>
                                    <p>
                                    Authentication as a service for secure login experience
                                    </p>
                                </div>
                            </a>
                            </li>
                        <li>
                            <a className={styleOurProduct.menuItem} href="https://www.gesprek.chat/">
                                <img
                                className={styleOurProduct.menuItemIcon}
                                src={imgProductGesprek}
                                alt="Gesprek Chat"
                                />
                                <div className={styleOurProduct.menuItemText}>
                                    <h6>Gesprek.chat</h6>
                                    <p>
                                    Conversational sales and marketing for businesses
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styleOurProduct.textBlock}>
                    <h3>We’re your low-code solution for your next IT project.</h3>
                    <div>
                        <p>
                        We develop various open-source solutions that can be used by developers and organizations around the world to solve problems.
                        </p>

                        <p>
                        At the heart of Oursky is the art of software engineering: translating expertise and ideas into opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}