"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";

export default function AboutComponent() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    }) 
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

    return ( 
        <motion.section className="2xl:py-[8rem] bg-likeblack overflow-hidden"
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
        >
            <div className="container mx-auto p-[12px] md:p-unset">
                <div className="grid grid-cols-2 gap-[2rem] px-[4rem]">
                    <div className="flex flex-col">
                        <motion.h2 className="text-[3.2rem] uppercase font-medium text-neutral-300"
                            initial={{ x: 100, y: 100 }}
                            whileInView={{ x: [0, -100, 0], y: [0, -100, 0] }}
                            transition={{
                                duration: "2",
                                delay: .5
                            }} 
                        >About ME</motion.h2>
                        <motion.h2 className="text-[2rem] mt-auto text-neutral-400"
                            initial={{ x: 50, y: 50 }}
                            whileInView={{ x: [0, -50, 0], y: [0, -50, 0] }}
                            transition={{
                                duration: "2",
                                delay: .5
                            }} >FRONTEND DEVELOPER</motion.h2>
                        <motion.p className="text-[1.4rem] font-thin text-neutral-500"
                            initial={{ x: -80 }}
                            whileInView={{ x: [0, 80, 0] }}
                            transition={{
                                duration: "2",
                                delay: .5
                            }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque modi at fuga enim explicabo. A, quis optio. Enim dolor ratione soluta placeat illum laboriosam esse obcaecati. Deleniti ea reiciendis nulla!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut doloribus. Rem minima eum quas reprehenderit necessitatibus error omnis exercitationem officia. Laudantium sed minima tempore, maxime assumenda doloremque excepturi magni.
                        </motion.p>
                        <motion.div className="grid grid-cols-2 gap-[2rem] mt-[1.5rem]"
                            initial={{ y: -80, x: -80 }}
                            whileInView={{ y: [0, 80, 0], x: [0, 80, 0] }}
                            transition={{
                                duration: "2",
                                delay: .5
                            }}>
                            <div className="border border-neutral-600 p-[12px] flex flex-col items-center rounded-md">
                                <FontAwesomeIcon icon={faCode} className="text-primary h-[28px] w-[28px] border border-primary rounded-full p-[12px] mb-[1rem]" />
                                <h4 className="text-neutral-400">Experience</h4>
                                <p className="text-neutral-500">3 Years working</p>
                            </div>
                            <div className="border border-neutral-600 p-[12px] flex flex-col items-center rounded-md">
                                <FontAwesomeIcon icon={faSuitcase} className="text-primary h-[28px] w-[28px] border border-primary rounded-full p-[12px] mb-[1rem]" />
                                <h4 className="text-neutral-400">Projects</h4>
                                <p className="text-neutral-500">56 Project</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex justify-start">
                        <motion.div className="aspect-square rounded-full my-auto overflow-hidden bg-smoke relative w-full"
                            initial={{ x: -300, y: -300 }}
                            whileInView={{ x: [0, 300, 0], y: [0, 300, 0] }}
                            transition={{
                                duration: "2",
                                delay: .5
                            }}
                        >
                            <motion.img src="./assets/images/code-1.png"
                                className="w-[80%] absolute bottom-[30%] right-0" alt="Surya Frontend"
                                drag
                                dragConstraints={{
                                    top: 100,
                                    left: -50,
                                    right: 50,
                                    bottom: 50,
                                }} />
                            <motion.img src="./assets/images/bot.png"
                                className="w-[40%] absolute bottom-[30%] right-0" alt="Surya Frontend"
                                drag
                                dragConstraints={{
                                    top: -80,
                                    left: -50,
                                    right: 50,
                                    bottom: 50,
                                }} />
                            <h4 className="absolute top-10 left-[40%] text-neutral-400 text-[2rem]">DRAG ME</h4>
                        </motion.div>
                    </div>
                </div>
            </div>


        </motion.section > 
    );
}
// I help companies from all over the world with tailor - made solutions.
//                             With each project, I push my work to new horizons, always putting quality first.