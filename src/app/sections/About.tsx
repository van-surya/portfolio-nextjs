"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { useSectionInView } from "../lib/hooks";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

export default function About() {
    const { ref } = useSectionInView("about");

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const is1023px = useMediaQuery({ maxWidth: 1023 });
    const is1024px = useMediaQuery({ maxWidth: 1024 });
    const is1280px = useMediaQuery({ maxWidth: 1280 });
    const is1536px = useMediaQuery({ maxWidth: 1536 });
    const is1920px = useMediaQuery({ maxWidth: 1920 });

    const { scrollYProgress } = useScroll();

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [
            is1023px ? 0 : is1024px ? 5 : is1280px ? 10 : is1536px ? 15 : is1920px ? 20 : 0,
            is1023px ? 0 : is1024px ? 200 : is1280px ? 300 : is1536px ? 400 : is1920px ? 550 : 0
        ]
    );
    // const movement = useTransform(scrollYProgress, [0, 1], [0, 8000]);

    const [cursorVariant, setCursorVariat] = useState("default");

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants: Variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 76,
            y: mousePosition.y - 76,
            backgroundColor: "orange",
            mixBlendMode: "difference"
        }
    }

    const textEnter = () => setCursorVariat("text");
    const textLeave = () => setCursorVariat("default");

    return (
        <section
            id="about"
            ref={ref} className=""
        >
            <div className="container">
                <motion.h2 className="text-[15rem]  uppercase font-medium text-neutral-900 dark:text-neutral-300 lg:mt-[3rem]"
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: ".5",
                        delay: .5
                    }}
                >About ME</motion.h2>
                <motion.p className="text-[1rem] md:text-[1.25rem] lg:text-[1.4rem] font-thin text-neutral-700 dark:text-neutral-500"
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: ".7",
                        delay: .5
                    }} >
                    I`am <strong className="text-primary font-semibold"> Surya</strong>, a seasoned frontend developer with three years of experience crafting stunning <strong className="text-primary font-semibold">digital experiences</strong>. With a keen eye for detail and a passion for user-centric design, I specialize in creating seamless frontend solutions that captivate and delight users. Let`s embark on a <strong className="text-primary font-semibold">journey</strong> where every click leads to an enhanced user interface and a memorable digital journey.</motion.p>

            </div>
        </section >
    );
} 