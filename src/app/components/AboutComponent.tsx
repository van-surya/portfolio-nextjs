"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";  

export default function AboutComponent() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.1 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

    return (
        <motion.section className="py-[6rem] lg:py-[3rem] xl:py-[4rem] 2xl:py-[6rem]"
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
        >
            <div className="container mx-auto p-[12px] md:p-unset">
                <div className="grid grid-cols-2 gap-[2rem] px-[4rem]">
                    <div className="flex flex-col">
                        <motion.h2 className="text-[3.2rem] uppercase font-medium"
                            whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                        >About ME</motion.h2>
                        <h2 className="text-[2rem] mt-auto">FRONTEND DEVELOPER</h2>
                        <p className="text-[1.4rem] font-thin">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque modi at fuga enim explicabo. A, quis optio. Enim dolor ratione soluta placeat illum laboriosam esse obcaecati. Deleniti ea reiciendis nulla!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut doloribus. Rem minima eum quas reprehenderit necessitatibus error omnis exercitationem officia. Laudantium sed minima tempore, maxime assumenda doloremque excepturi magni.
                        </p>
                    </div>
                    <div className="flex justify-start">
                        <motion.div className="h-[480px] w-[480px] bg-slate-600 relative overflow-hidden" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <motion.img className="w-[400px] absolute top-[8px] left-[-120px]"
                                whileHover={{
                                    scale: 1,
                                    transition: { duration: 1 },
                                    left: '8px'
                                }}
                                whileTap={{ left: 0 }}
                                src="./assets/images/code-1.png" alt="FRONTEND DEVELOPER" />
                            <FontAwesomeIcon icon={faCode} className="text-primary p-[6px] absolute right-[12px] top-[12px] border-2 border-primary rounded-full w-[42px] h-[42px]" />
                            <motion.img className="w-[460px] absolute bottom-0 left-[-80px]"
                                whileHover={{
                                    scale: 1,
                                    transition: { duration: 1 },
                                    left: '12px'
                                }}
                                whileTap={{ left: 0 }}
                                src="./assets/images/code-2.png" alt="FRONTEND DEVELOPER" />
                        </motion.div>
                    </div> 
                </div>
            </div>


        </motion.section>
    );
}
// I help companies from all over the world with tailor - made solutions.
//                             With each project, I push my work to new horizons, always putting quality first.