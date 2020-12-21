import React from 'react';
import styleTestimonial from "../stylesheets/Testimonial.module.css";
import logoASOS from "../assets/img_testimonial_ASOS.svg";
import logoAxiata from "../assets/img_testimonial_Axiata.svg";
import logoChartered from "../assets/img_testimonial_Chartered.svg";
import logoCimic from "../assets/img_testimonial_Cimic.svg";
import logoHKT from "../assets/img_testimonial_HKT.svg";
import logoHongLeong from "../assets/img_testimonial_HongLeong.svg";
import logoThomson from "../assets/img_testimonial_THOMSON.svg";
import logoWilson from "../assets/img_testimonial_Wilson.svg";

export const Testimonial = () => {
    return (
        <section className={styleTestimonial.sectionTestimonial}>
            <div className={styleTestimonial.center}>
                <div>We help companies around the world bring their ideas to life.</div>
                <div>
                    <span className={styleTestimonial.logoWrapper}>
                    <img 
                    src={logoASOS} alt="ASOS"
                    />
                    </span>
                    <span className={styleTestimonial.logoWrapper}>
                    <img
                    src={logoThomson}
                    alt="Thomson Reuters"
                    />
                    </span>
                    <span className={styleTestimonial.logoWrapper}>
                    <img
                    src={logoChartered}
                    alt="Standard Charterd"
                    />
                    </span>
                    <span className={styleTestimonial.logoWrapper}>
                    <img
                    src={logoHongLeong}
                    alt="Hong Leoong"
                    />
                    </span>
                </div>

                <div>
                    <span >
                    <img 
                    className={styleTestimonial.logoWrapper} 
                    src={logoAxiata} 
                    alt="Axiata" 
                    />
                    </span>
                    <span>
                    <img
                    className={styleTestimonial.logoWrapper}
                    src={logoWilson}
                    alt="Wilson Group"
                    />
                    </span>
                    <span>
                    <img 
                    className={styleTestimonial.logoWrapper}
                    src={logoCimic} 
                    alt="Cimic" 
                    />
                    </span>
                    <span>
                    <img 
                    className={styleTestimonial.logoWrapper}
                    src={logoHKT} 
                    alt="HKT" 
                    />
                    </span>
                </div>
            </div>
    </section>
    )
}