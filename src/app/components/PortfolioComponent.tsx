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
        <motion.section className="py-[1.5rem] lg:py-[3rem] 2xl:py-[6rem]"
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress
            }}>
            <div className="container mx-auto px-[12px] md:px-unset"> 
                <div className="grid grid-cols-2 gap-[2rem] mx-auto mt-[2rem]">
                    <div className="grid grid-cols-2 gap-[2rem]">
                        <div className="row-span-2 h-full mx-auto overflow-hidden bg-slate-600 flex">
                            <motion.div className="aspect-[3/4] my-auto"
                                whileHover={{ scale: [null, .8, 1.2] }}
                                transition={{ duration: 0.8 }}>
                                <Link className="" href='https://architect-design.vercel.app/'>
                                    <img src="./assets/images/iphone.png" className="h-full object-cover" alt="" />
                                </Link>
                            </motion.div>
                        </div>
                        <div className="bg-slate-600 overflow-hidden">
                            <motion.div
                                whileHover={{ scale: [null, .8, 1.2] }}
                                transition={{ duration: 0.8 }}>
                                <Link className="" href='https://architect-design.vercel.app/'>
                                    <img src="./assets/images/build-co.png" alt="" />
                                </Link>
                            </motion.div>
                        </div>
                        <div className="bg-slate-600 overflow-hidden">
                            <motion.div
                                whileHover={{ scale: [null, .8, 1.2] }}
                                transition={{ duration: 0.8 }}>
                                <Link className="" href='https://dawns-landingpage.vercel.app/'>
                                    <img src="./assets/images/lanpage.png" alt="" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-[3.2rem] uppercase font-medium">Portfolio</h2>
                        <h2 className="text-[2rem] mt-auto">FRONTEND DEVELOPER</h2>
                        <p className="text-[1.4rem] font-thin">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque modi at fuga enim explicabo. A, quis optio. Enim dolor ratione soluta placeat illum laboriosam esse obcaecati. Deleniti ea reiciendis nulla!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut doloribus. Rem minima eum quas reprehenderit necessitatibus error omnis exercitationem officia. Laudantium sed minima tempore, maxime assumenda doloremque excepturi magni.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section >
    );


}
