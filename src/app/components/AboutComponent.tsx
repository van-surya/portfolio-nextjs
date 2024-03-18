"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { useSectionInView } from "../lib/hooks";
import Image from "next/image";

export default function AboutComponent() {
    const { ref } = useSectionInView("about");

    /* onst ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
 */
    return (
        <section
            id="about"
            ref={ref} className="pt-[3rem] pb-0 md:py-[2.5rem] md:px-[2.5rem] lg:py-[4rem] xl:py-[6rem] 2xl:py-[8rem] bg-rose dark:bg-likeblack overflow-hidden "
        >
            <div className="container mx-auto px-[1rem] md:px-0 xl:ml-[3rem] 2xl:mx-[auto] md:bg-sand dark:md:bg-smoke overflow-hidden lg:px-[2rem] xl:pl-[3rem] xl:pr-0 2xl:px-[3rem] 2xl:pr-0">
                <div className="grid xl:grid-cols-2 xl:gap-[4rem] md:p-[2rem] lg:p-0">
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque modi at fuga enim explicabo. A, quis optio. Enim dolor ratione soluta placeat illum laboriosam esse obcaecati. Deleniti ea reiciendis nulla!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut doloribus. Rem minima eum quas reprehenderit necessitatibus error omnis exercitationem officia. Laudantium sed minima tempore, maxime assumenda doloremque excepturi magni.
                        </motion.p>
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
                            {/* <motion.div className=" h-full absolute top-[4rem] right-[-240px]"
                                whileHover={{ top: 0, right: 0 }}
                                transition={{
                                    duration: ".5",
                                    delay: .5
                                }}
                            > */}
                            {/* <Link href="https://github.com/van-surya"> */}
                            {/* <div className="absolute top-[4rem] right-[-240px]"> */}
                            <motion.div className="absolute w-[100%] bottom-[0] right-[-4rem]"
                                whileHover={{ bottom: 0, right: 0 }}
                                transition={{
                                    duration: ".5",
                                    delay: .5
                                }}>
                                <Image src="./assets/images/code-1.png" className="rounded-tl-2xl w-full aspect-7/5 "
                                    alt="Surya Frontend" width={500} height={500}
                                />
                            </motion.div>
                            {/* </div> */}
                            {/* </Link> */}
                            {/* </motion.div> */}
                        </motion.div>

                        {/* <motion.div className="aspect-square rounded-full my-auto overflow-hidde bg relative w-full"
                            initial={{ opacity: 0, y: 130 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: "2",
                                delay: .5
                            }}
                        > */}

                        {/* <motion.div className="w-[80%] absolute top-0 left-0 " drag
                                dragConstraints={{
                                    top: -80,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }} >
                                <img src="./assets/images/bot.png" className="w-full bg-white" alt="Surya Frontend"
                                /></motion.div> */}

                        {/* </motion.div> */}
                    </div>
                </div>
            </div>


        </section >
    );
}
// I help companies from all over the world with tailor - made solutions.
//                             With each project, I push my work to new horizons, always putting quality first.