import React from 'react';
import styleAboutUs from "../stylesheets/AboutUs.module.css";

export const AboutUs = () => {
    return (
<section className={styleAboutUs.AboutUsSection}>
    <div className={styleAboutUs.center}>
        <div className={styleAboutUs.cellLeft}>
            <h2>About Us</h2>
            <p>
            Oursky is a team of talented developers, designers, data scientists, product and project managers and QA engineers working from Hong Kong, London, and Taipei. Using cutting-edge technologies, we are an end-to-end digital product, web, and mobile app development consultancy whose creations have garnered millions of downloads and awards from the Apple App Store and Asia Smart Apps Awards.
            </p>
        </div>
        <div className={styleAboutUs.cellRight}>
            <img className={styleAboutUs.imgAboutUs} src="https://fakeimg.pl/330x330/" alt="Hero Image"></img>
        </div>
    </div>
</section>
    )
}
