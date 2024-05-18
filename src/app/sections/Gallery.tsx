import React from 'react';
import { GalleryThree } from "../components/galleryThree";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";

export default function Gallery() {
    const { ref } = useSectionInView("gallery");
    return (
        <section id='gallery'
            ref={ref}
            className="md:py-[2rem]">
            <div className="container mx-auto px-[1rem] md:px-[2rem] 2xl:px-[3rem]">
                <motion.h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3.2rem] uppercase font-medium text-neutral-800 dark:text-neutral-300 md:mt-[2rem] lg:mt-0"
                    initial={{ opacity: 0, y: 140 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: ".8",
                        delay: .5
                    }} >Gallery</motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 140 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: ".8",
                        delay: .5
                    }} className='text-[1.125rem] text-neutral-400 font-light'>scroll up/down ...</motion.h3>
                <motion.div className="md:h-[70vh]"
                    initial={{ opacity: 0, y: 140 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: ".8",
                        delay: .5
                    }} >
                    <GalleryThree />
                </motion.div>
            </div>
        </section>
    );
};

