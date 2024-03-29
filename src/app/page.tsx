import { SVGProps } from 'react';
interface TextPathProps extends SVGProps<SVGTextPathElement> {
  xlinkHref: string;
}
"use client";
import { useState, useEffect } from 'react';

import Header from './layout/Header';
import HeroComponent from "./components/HeroComponent";
import AboutComponent from "./components/AboutComponent";
import SkillComponent from "./components/SkillComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import YoutubeComponent from "./components/YoutubeComponent";
import Footer from './layout/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loading-screen bg-smoke flex flex-col h-[100vh] overflow-hidden">
          <div className="icon">
            <div className="headphone"></div>
          </div>
          <p className="text-center px-3 md:px-0 text-neutral-200 text-[1.375rem] uppercase">For a better experience</p>
          <p className="text-center px-3 md:px-0 text-neutral-400 text-[1.125rem]">open this website on a desktop browser and use headphones.</p>
        </div>
      ) : (
          <>
            <Header />
            <HeroComponent />
            <AboutComponent />
            <PortfolioComponent />
            <SkillComponent />
            <YoutubeComponent />
            <Footer />
          </>
      )
      }
    </div >

  );
}
