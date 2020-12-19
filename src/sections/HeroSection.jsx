import React from 'react';
import styleHero from "../stylesheets/HeroSection.module.css";
import imgHero from '../assets/img_hero.png';

export const HeroSection = () => {
    return (
        <section className={styleHero.heroSection}>
            <div className={styleHero.center}>
                <div className={styleHero.cellLeft}>
                    <h1>
                    We design
                    and develop award-winning applications
                    </h1>
                </div>
                <div className={styleHero.cellRight}>
                    <img className={styleHero.imageHero} src={imgHero} alt="Hero Image"></img>
                </div>
            </div>
        </section>
    )
}