import React from 'react';
import styleCTABanner from "../stylesheets/CTABanner.module.css";

export const CTABanner = () => {
    return (
        <section className={styleCTABanner.ctaBanner}>
            <div className={styleCTABanner.center}>
                <h2>We build award-winning digital products.</h2>
                <h4>Oursky can help you create one.</h4>
                <a className={styleCTABanner.btnCTA} href="https://www.oursky.com/enquiry">
                Let's Talk
                </a>
            </div>
    </section>
    )
}