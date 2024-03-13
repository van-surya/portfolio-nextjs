"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { skills } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'

export default function SkillComponent() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    return (
        <motion.section className="py-[3rem] lg:py-[3rem] 2xl:py-[6rem]" ref={ref}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress
            }}>
            <div className="container mx-auto px-[12px] lg:px-unset">
                <div className="flex flex-col w-max	"
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
                    <h2 className="text-[2rem] font-medium text-neutral-800 z-10">
                        SKILL
                    </h2>
                    <p className="text-neutral-500 font-thin text-[1.4rem]">Technical skill</p>
                </div>

                <div className="py-[1.4rem] lg:py-[3rem] xl:ps-[2rem] border-b border-neutral-500">
                    <div className="border border-neutral-400 p-[12px] lg:p-[32px] xl:p-[3rem]">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[12px] lg:gap-[2rem]">
                            {skills.map((skill, x) => (
                                <div className="mt-[1.4rem]" key={x}>
                                    <div className="flex flex-row items-center text-primary">
                                        <FontAwesomeIcon icon={faBrain} className="me-[12px] text-[1.rem]" />
                                        <div className="">
                                            <h5 className="font-medium text-[1.125rem] lg:text-[1.5rem] text-neutral-600">
                                                {skill.title}
                                            </h5>
                                            <p className="text-[0.937rem] lg:text-[1.125rem] font-thin text-neutral-600">
                                                {skill.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </motion.section>

    );
}
