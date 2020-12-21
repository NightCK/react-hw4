import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SectionAboutUs } from "./sections/SectionAboutUs";
import { SectionCaseStudy } from "./sections/SectionCaseStudy";
import { CTABanner } from "./sections/SectionCTABanner";
import { SectionHero } from "./sections/SectionHero";
import { OurProduct } from "./sections/SectionOurProduct";
import { OurService } from "./sections/SectionOurService";
import { Testimonial } from "./sections/SectionTestimonial";


export default function App() {
    return (
        <>
        <main>
            <Header />
            <SectionHero />
            <SectionAboutUs />
            <SectionCaseStudy />
            <OurService />
            <OurProduct />
            <Testimonial />
            <CTABanner />
            <Footer />
        </main>
        </>
    );
  }
  
  // Note to myself:
  // function 記得大寫，才能用。
  // className 的 C 要是小寫。
  // 所有物件都要加上 /，例如 <img />
  // 圖片需要 import
  // import 路徑別忘了副檔名

  // Question：
  // 如果用 module & styled component，但還是需要全域 CSS 的話就還是要用 .css 嗎？ 