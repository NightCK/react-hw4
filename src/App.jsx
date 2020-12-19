import React from "react";
import { Header } from "./components/Header";
import { AboutUs } from "./sections/AboutUsSection";
import { HeroSection } from "./sections/HeroSection";


export default function App() {
    return (
        <>
        <main>
            <Header />
            <HeroSection />
            <AboutUs />
        </main>
        </>
    );
  }
  
  // Note to myself:
  // function 記得大寫，才能用。
  // className 的 C 要是小寫。
  // 所有物件都要加上 /，例如 <img />
  // 圖片需要 import

  // Question：
  // 如果用 module & styled component，但還是需要全域 CSS 的話就還是要用 .css 嗎？ 