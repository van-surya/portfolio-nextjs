"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { useSectionInView } from "../lib/hooks";

export default function PortfolioComponent() {
    const { ref } = useSectionInView("portfolio");

    // const refs = useRef<HTMLDivElement>(null);
    // const { scrollYProgress } = useScroll({
    //     target: refs,
    //     offset: ["0 1", "1 1"]
    // })

    return (
        <motion.section ref={ref} id="portfolio" className="py-[1.5rem] lg:py-[3rem] 2xl:py-[6rem] overflow-hidden"
        // style={{
        //     scale: scrollYProgress,
        //     opacity: scrollYProgress
        // }}
        >
            <div className="container mx-auto px-[1rem] md:px-[2rem] 2xl:px-[3rem]">
                <div className="grid lg:grid-cols-2 lg:gap-[2rem] mx-auto mt-[2rem]">
                    <motion.div className="grid md:grid-cols-2 gap-[1rem] order-2 lg:order-1 mt-[1.5rem] mb:lg:[1rem]"
                        initial={{ opacity: 0, y: 140 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: ".8",
                            delay: .5
                        }} >
                        <div className="row-span-2 h-full mx-auto overflow-hidden bg-rose dark:bg-likeblack flex">
                            <motion.div className="aspect-[3/4] my-auto"
                                initial={{ opacity: 0, y: 140 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: .9 }}
                                transition={{
                                    duration: ".8",
                                    delay: .5
                                }} >
                                <Link className="" href='https://architect-design.vercel.app/'>
                                    <Image width={400} height={400} src="/assets/images/iphone.png" className="h-full object-cover" alt="" />
                                </Link>
                            </motion.div>
                        </div>
                        <div className="bg-rose dark:bg-likeblack overflow-hidden flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 140 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.2 }}
                                transition={{
                                    duration: ".8",
                                    delay: .5
                                }} >
                                <Link className="" href='https://architect-design.vercel.app/'>
                                    <Image src="/assets/images/build-co.png" width={400} height={400} alt="build-co.png" />
                                </Link>
                            </motion.div>
                        </div>
                        <div className="bg-rose dark:bg-likeblack overflow-hidden flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 140 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.2 }}
                                transition={{
                                    duration: ".8",
                                    delay: .5
                                }} >
                                <Link className="" href='https://dawns-landingpage.vercel.app/'>
                                    <Image width={400} height={400} src="/assets/images/lanpage.png" alt="" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                    <div className="flex flex-col order-1 lg:order-2">
                        <motion.h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3.2rem] uppercase font-medium text-neutral-800 dark:text-neutral-300 md:mt-[2rem] lg:mt-0"
                            initial={{ opacity: 0, y: 140 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: ".8",
                                delay: .5
                            }} >Portfolio</motion.h2>
                        <motion.div className=""
                            initial={{ opacity: 0, y: 140 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: ".8",
                                delay: .5
                            }} >
                            <p className="text-[1rem] md:text-[1.25rem] md:mt-[1.4rem] lg:mt-0 lg:text-[1.4rem] font-thin text-neutral-700 dark:text-neutral-500">
                                The <strong className="text-primary font-semibold">combination</strong> of my passion for design, code & interaction positions me in a unique place in the web design <strong className="text-primary font-semibold">world</strong>.
                            </p>
                            <br />
                            <p className="text-[1rem] md:text-[1.25rem] lg:text-[1.4rem] font-thin text-neutral-700 dark:text-neutral-500">
                                <strong className="text-primary font-semibold">Explore</strong> my three designs by <strong className="text-primary font-semibold">clicking</strong> on the images, where you&apos;ll be directed to each website. Each skill showcases my creativity and expertise in frontend development. <strong className="text-primary font-semibold">Dive</strong> in to experience the seamless blend of aesthetics and functionality, crafted to <strong className="text-primary font-semibold">captivate</strong> and engage users.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
