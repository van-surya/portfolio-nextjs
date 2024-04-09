"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { useSectionInView } from "../lib/hooks";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive';

export default function AboutComponent() {
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
            is1023px ? 0 : is1024px ? 5 : is1280px ? 10 : is1536px ? 15 : is1920px ? 20 : 0, // Nilai awal x
            is1023px ? 0 : is1024px ? 200 : is1280px ? 300 : is1536px ? 400 : is1920px ? 550 : 0 // Nilai akhir x
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
            ref={ref} className="pt-[3rem] pb-0 md:py-[2.5rem] md:px-[2.5rem] lg:py-[4rem] xl:py-[6rem] 2xl:py-[8rem] bg-rose dark:bg-likeblack overflow-hidden "
        >
            <motion.div style={{ x }} className="container mx-auto px-[1rem] md:px-0 xl:ml-[3rem] 2xl:mx-[auto] md:bg-sand dark:md:bg-smoke overflow-hidden lg:px-[2rem] xl:pl-[3rem] xl:pr-0 2xl:px-[3rem] 2xl:pr-0">
                <motion.div className="cursor hidden lg:block" variants={variants} animate={cursorVariant}> </motion.div>
                <div className="grid xl:grid-cols-2 xl:gap-[4rem] md:p-[2rem] lg:p-0" onMouseEnter={textEnter} onMouseLeave={textLeave} >
                    <div className="flex flex-col">
                        <motion.h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3.2rem] uppercase font-medium text-neutral-900 dark:text-neutral-300 lg:mt-[3rem]"
                            initial={{ opacity: 0, y: 120 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: ".5",
                                delay: .5
                            }}
                        >About ME</motion.h2>
                        <motion.h2 className="text-[1.4rem] md:text-[1.7rem] lg:text-[2rem] mt-[1rem] md:mt-[1.2rem] lg:mt-[auto] text-neutral-800 dark:text-neutral-400"
                            initial={{ opacity: 0, y: 120 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: ".6",
                                delay: .5
                            }}  >FRONTEND DEVELOPER</motion.h2>
                        <motion.p className="text-[1rem] md:text-[1.25rem] lg:text-[1.4rem] font-thin text-neutral-700 dark:text-neutral-500"
                            initial={{ opacity: 0, y: 120 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: ".7",
                                delay: .5
                            }} >
                            I`am <strong className="text-primary font-semibold"> Surya</strong>, a seasoned frontend developer with three years of experience crafting stunning <strong className="text-primary font-semibold">digital experiences</strong>. With a keen eye for detail and a passion for user-centric design, I specialize in creating seamless frontend solutions that captivate and delight users. Let`s embark on a <strong className="text-primary font-semibold">journey</strong> where every click leads to an enhanced user interface and a memorable digital journey.</motion.p>
                        <motion.div className="grid md:grid-cols-2 gap-[2rem] mt-[1.5rem] mb-[4rem]"
                            initial={{ opacity: 0, y: 140 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: ".8",
                                delay: .5
                            }} >
                            <div className="border border-neutral-300 dark:border-neutral-600 p-[12px] flex flex-col items-center rounded-md">
                                <FontAwesomeIcon icon={faCode} className="text-primary h-[28px] w-[28px] border border-primary rounded-full p-[12px] mb-[1rem]" />
                                <h4 className="text-neutural-800 dark:text-neutral-400">Experience</h4>
                                <p className="text-neutral-700 dark:text-neutral-500">3 Years working</p>
                            </div>
                            <div className="border border-neutral-300 dark:border-neutral-600 p-[12px] flex flex-col items-center rounded-md">
                                <FontAwesomeIcon icon={faSuitcase} className="text-primary h-[28px] w-[28px] border border-primary rounded-full p-[12px] mb-[1rem]" />
                                <h4 className="text-neutural-800 dark:text-neutral-400">Projects</h4>
                                <p className="text-neutral-700 dark:text-neutral-500">56 Project</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="justify-start md:hidden lg:flex">
                        <motion.div className="h-full w-full overflow-hidden relative"
                            initial={{ opacity: 0, y: 240 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: ".5",
                                delay: .5
                            }} >
                            <motion.div className="absolute w-[100%] bottom-[0] right-[-4rem]"
                                whileHover={{ bottom: 0, right: 0 }}
                                transition={{
                                    duration: ".5",
                                    delay: .5
                                }}>
                                <Image src="/assets/images/code-1.png" className="rounded-tl-2xl w-full aspect-7/5 "
                                    alt="Surya Frontend" width={500} height={500}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section >
    );
} 