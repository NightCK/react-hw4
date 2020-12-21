import React from 'react';
import styleCaseStudy from "../stylesheets/CaseStudy.module.css";

export const SectionCaseStudy = () => {
    return (
        <section className={styleCaseStudy.sectionCaseStudy}>
            <div className={styleCaseStudy.center}>
                <div className={styleCaseStudy.cardWrapper}>
                    {/* TODO 這邊要做 map */}
                    {/* TODO projectCard 要再切 component */}
                    <a
                    className={styleCaseStudy.projectCard}
                    href="https://www.oursky.com/cases/asos/"
                    >
                    <span>Case Study</span>
                    <h3>ASOS</h3>
                    <p>
                    We helped ASOS create a browsing experience where 4,000 new
                    fashion items are published weekly.
                    </p>
                    </a>
                    <a
                    className={styleCaseStudy.projectCard}
                    href="https://www.oursky.com/cases/jamnplayer"
                    >
                    <span>Case Study</span>
                    <h3>Jamn PLAYER</h3>
                    <p>
                    We teamed up with Jamn by MiQ Limited to build the next iteration
                    of an award-winning iOS music app.
                    </p>
                    </a>
                    <a
                    className={styleCaseStudy.projectCard}
                    href="https://www.oursky.com/cases/wilson-parking"
                    >
                    <span>Case Study</span>
                    <h3>Wilson Parking</h3>
                    <p>
                    We worked with Wilson Parking to complement its digital
                    transformation by revamping their mobile apps.
                    </p>
                    </a>
                </div>
                <a href="https://www.oursky.com/case-studies">
                Explore more of our work
                </a>
            </div>
        </section>
    )
}