// import React from 'react';
import Image from "next/image";
import { SVGProps } from 'react';
interface TextPathProps extends SVGProps<SVGTextPathElement> {
  xlinkHref: string;
}
"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

import HeaderComponent from './components/HeaderComponent';
import HeroComponent from "./components/HeroComponent";
import AboutComponent from "./components/AboutComponent";
import SkillComponent from "./components/SkillComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import YoutubeComponent from "./components/YoutubeComponent";

export default function Home() {

  const { scrollYProgress } = useScroll();  
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

      <HeaderComponent />


      <HeroComponent />

      <div className="sparator h-[3rem] w-full bg-primary mt-[2rem] md:mt-0 md:mt-unset"></div>

      <AboutComponent />

      <SkillComponent />

      <PortfolioComponent />

      {/* <YoutubeComponent /> */}

    </>
  );
}
