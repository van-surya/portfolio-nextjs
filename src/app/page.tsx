// import React from 'react';
import Image from "next/image";
import { SVGProps } from 'react';
interface TextPathProps extends SVGProps<SVGTextPathElement> {
  xlinkHref: string;
}

"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import ModeComponent from "./components/ModeComponent";
import Header from './layout/Header';
import HeroComponent from "./components/HeroComponent";
import AboutComponent from "./components/AboutComponent";
import SkillComponent from "./components/SkillComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import YoutubeComponent from "./components/YoutubeComponent";
import Footer from './layout/Footer';

export default function Home() {

  const { scrollYProgress } = useScroll();  
  return (
    <>
      {/* <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} /> */}

      <Header /> 

      <HeroComponent />

      {/* <div className="sparator h-[3rem] w-full bg-primary mt-[2rem] md:mt-0 md:mt-unset"></div> */}

      <AboutComponent />

      <PortfolioComponent />

      <SkillComponent />


      <ModeComponent />
      <Footer />

    </>
  );
}
