import { SVGProps } from 'react';
interface TextPathProps extends SVGProps<SVGTextPathElement> {
  xlinkHref: string;
}
"use client";
import { useState, useEffect } from 'react';

import Header from './layout/Header';
import About from './sections/About';
import Hero from "./sections/Hero";
import Skill from "./sections/Skill";
import Experience from "./sections/Experience";
import Gallery from "./sections/Gallery";
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
            <Hero />
            <About />
            <Experience />
            <Skill />
            <Gallery />
            <Footer />
          </>
      )
      }
    </div >

  );
}
