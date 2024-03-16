"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { skills } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { useSectionInView } from "../lib/hooks";

const fadeInAnimationsVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (x: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: .2 * x,
            delay: 0.05 * x
        }
    }),
};

export default function SkillComponent() {
    const { ref } = useSectionInView("skill");

    // const ref = useRef<HTMLDivElement>(null);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["0 1", "1 1"]
    // })
    return (
        <section id="skill"
            ref={ref}
            className="py-[3rem] lg:py-[3rem] 2xl:py-[6rem] relative" >
            <div className="container mx-auto px-[1rem] md:px-[2rem] 2xl:px-[3rem]">
                <motion.div className="flex flex-col w-max	"
                    initial={{ opacity: 0, y: 140 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: ".5",
                        delay: .05
                    }} 
                >
                    <div className="relative">
                        <div className="digital-ball w-[42px] h-[42px] top-[8px] left-0">
                            <div className="overlay"></div>
                            <div className="globe">
                                <div className="globe-wrap">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle-hor"></div>
                                    <div className="circle-hor-middle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-[2rem] font-medium text-neutral-100 z-10">
                        SKILL
                    </h2>
                    <p className="text-neutral-500 font-thin text-[1.2rem] md:text-[1.4rem]">Technical skill</p>
                </motion.div>

                <div className="py-[2rem] lg:py-[3rem] xl:ps-[2rem] ">
                    <div className="flex flex-row flex-wrap gap-[1rem] lg:gap-[2rem]">
                        {skills.map((skill, x) => (
                            <motion.div key={x} className="shadow-lg text-[1rem] md:text-[1.4rem] bg-likeblack font-thin text-neutral-400 py-[8px] px-[12px]"
                                variants={fadeInAnimationsVariants}
                                initial="initial"
                                whileInView="animate"
                                custom={x}
                            >
                                {skill.title}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

        </section >

    );
}
