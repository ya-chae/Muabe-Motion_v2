/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Technology from "./components/Technology";
import Demo from "./components/Demo";
import Architecture from "./components/Architecture";
import Products from "./components/Products";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionsOrder = ["hero", "technology", "demo", "architecture", "products", "industries", "contact"];
    const offset = 120; // 헤더 높이 및 여유 공간 고려

    const handleScroll = () => {
      // 최상단 근처일 때는 항상 hero
      if (window.scrollY < 50) {
        setActiveSection("hero");
        return;
      }

      // 페이지 하단에 도달했는지 확인 (Contact 섹션 활성화를 위함)
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isBottom) {
        setActiveSection("contact");
        return;
      }

      // 현재 스크롤 위치에서 가장 적합한 섹션 찾기
      const scrollPos = window.scrollY + offset;
      
      for (let i = sectionsOrder.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionsOrder[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          
          if (top <= scrollPos) {
            setActiveSection(sectionsOrder[i]);
            break;
          }
        }
      }
    };

    // 초기 실행 및 이벤트 등록
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Navbar activeSection={activeSection} onSetActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Technology />
        <Demo />
        <Architecture />
        <Products />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
