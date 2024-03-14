"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioComponent() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    })

    return (
        <motion.section className="py-[1.5rem] lg:py-[3rem] 2xl:py-[6rem] overflow-hidden"
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress
            }}>
            <div className="container mx-auto px-[12px] md:px-unset">
                <div className="grid grid-cols-2 gap-[2rem] mx-auto mt-[2rem]">
                    <motion.div className="grid grid-cols-2 gap-[1rem]"
                        initial={{ x: 50, y: 50 }}
                        whileInView={{ x: [0, -50, 0], y: [0, -50, 0] }}
                        transition={{
                            duration: "2",
                            delay: .5
                        }}>
                        <div className="row-span-2 h-full mx-auto overflow-hidden bg-likeblack flex">
                            <motion.div className="aspect-[3/4] my-auto"
                                whileHover={{ scale: [null, 1.2, 1] }}
                                transition={{ duration: 0.8 }}>
                                <Link className="" href='https://architect-design.vercel.app/'>
                                    <img src="./assets/images/iphone.png" className="h-full object-cover" alt="" />
                                </Link>
                            </motion.div>
                        </div>
                        <div className="bg-likeblack overflow-hidden">
                            <motion.div
                                whileHover={{ scale: [null, .9, 1.2] }}
                                transition={{ duration: 0.8 }}>
                                <Link className="" href='https://architect-design.vercel.app/'>
                                    <img src="./assets/images/build-co.png" alt="" />
                                </Link>
                            </motion.div>
                        </div>
                        <div className="bg-likeblack overflow-hidden">
                            <motion.div
                                whileHover={{ scale: [null, 1, 1.2] }}
                                transition={{ duration: 0.8 }}>
                                <Link className="" href='https://dawns-landingpage.vercel.app/'>
                                    <img src="./assets/images/lanpage.png" alt="" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="flex flex-col">
                        <motion.h2 className="text-[3.2rem] uppercase font-medium text-neutral-500"
                            initial={{ x: -50, y: -50 }}
                            whileInView={{ x: [0, 50, 0], y: [0, 50, 0] }}
                            transition={{
                                duration: "2",
                                delay: .5
                            }}>Portfolio</motion.h2>
                        <motion.div className=""
                            initial={{ x: -150, y: -50 }}
                            whileInView={{ x: [0, 150, 0], y: [0, 50, 0] }}
                            transition={{
                                duration: "2",
                                delay: .5
                            }}>
                            <p className="text-[1.4rem] font-thin text-neutral-500">
                                The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                            </p>
                            <br />
                            <p className="text-[1.4rem] font-thin text-neutral-500">
                                Explore my three designs by clicking on the images, where you'll be directed to each website. Each skill showcases my creativity and expertise in frontend development. Dive in to experience the seamless blend of aesthetics and functionality, crafted to captivate and engage users.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
