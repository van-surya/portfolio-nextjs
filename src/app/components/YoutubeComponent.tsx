import { motion } from "framer-motion";
import React from "react";
import { useSectionInView } from "../lib/hooks";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';
import 'swiper/css/effect-creative';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

const youtubes = [
    {
        image: "/assets/images/yt01.jpg",
        title: "Tutorial 1 : Responsive Portfolio Website Design: Learn HTML & CSS by Building Your Own Site",
        link: "https://www.youtube.com/watch?v=pEx8cdCPsFU&list=PLnClDkXINfCrqIBVh2fLjGssj4QVwi41i&pp=gAQBiAQB",
        id: 1,
    },
    {
        image: "/assets/images/yt-1.jpg",
        title: "How to make Slider Card with HTML, CSS, and JavaScript - Step by Step Tutorial",
        link: "https://www.youtube.com/watch?v=uO-FuMAbwyo",
        id: 2,
    },
    {
        image: "/assets/images/yt02.jpg",
        title: "Learn How to Make a Stunning Responsive Travel Website with HTML & CSS: Step-by-Step Tutorial",
        link: "https://www.youtube.com/watch?v=KVlgwi4vggE&list=PLnClDkXINfCr4CBrgHeHLOy9pR7_32-U7",
        id: 3,
    },
    {
        image: "/assets/images/yt03.jpg",
        title: "How to Create a Stunning Personal Website with HTML & CSS",
        link: "https://www.youtube.com/watch?v=XEf0zCRY0rY&list=PLnClDkXINfCrOmRZyxUsBsLVQjgS1XWw5&pp=gAQBiAQB",
        id: 4,
    },
    {
        image: "/assets/images/yt-4.jpg",
        title: "Make Responsive vespa website design using html css and javascript",
        link: "https://www.youtube.com/watch?v=hTZId1EV3C0",
        id: 5,
    },
    {
        image: "/assets/images/yt-6.jpg",
        title: "Make carousel website using HTML CSS And Javascript",
        link: "https://www.youtube.com/watch?v=tRLbHwZabfw",
        id: 6,
    },
    {
        image: "/assets/images/yt-7.jpg",
        title: "How to Make Animation Card using HTML and CSS | Dawnscript",
        link: "https://www.youtube.com/watch?v=fWULDmFjg_I",
        id: 7,
    },
];


const whileInView = {
    opacity: 1, x: 0, y: 0
};


const YoutubeComponent = () => {
    const { ref } = useSectionInView("youtube");

    const is767px = useMediaQuery({ maxWidth: 767 });
    const is768px = useMediaQuery({ maxWidth: 768 });
    const is1024px = useMediaQuery({ maxWidth: 1024 });

    const initialRight = {
        opacity: 0,
        x: is767px ? 0 : is768px ? 0 : (is1024px ? -180 : -180),
        y: is767px ? 0 : is768px ? 120 : (is1024px ? -180 : -180)
    };

    const initialLeft = {
        opacity: 0,
        x: is767px ? 0 : (is768px ? 0 : (is1024px ? 180 : 180)),
        y: is767px ? 0 : (is768px ? 120 : (is1024px ? -180 : -180))
    };

    return (
        <div ref={ref} id="youtube" className="bg-neutral-800 py-[6rem]">
            <div className="container mx-auto px-[1rem] md:px-[2rem] 2xl:px-[3rem]">
                <h2 className="text-[1.75rem] md:text-[2.5rem] lg:text-[3.2rem] uppercase font-medium text-neutral-800 dark:text-neutral-300 md:mt-[2rem] lg:mt-0">Youtube Channel</h2>
                <div className="2xl:px-[5rem]">
                    <Swiper
                        grabCursor={true}
                        effect={'creative'}
                        loop={true}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: ['-120%', 0, -500],
                            },
                            next: {
                                shadow: true,
                                translate: ['120%', 0, -500],
                            },
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, EffectCreative]} className="Swiper">
                        {youtubes.map((youtube, items) =>
                            <SwiperSlide className="bg-transparent flex items-center" key={items}>
                                <div className="pt-[1.5rem] md:pb-0 md:p-[5rem] lg:p-[6.5rem] lg:pt-[1.5rem] xl:p-[7rem] xl:pt-[2rem] 2xl:p-[8rem]">
                                    <Image className="rounded-2xl" src={youtube.image} alt={youtube.title} width={1200} height={1000}></Image>
                                </div>
                                <motion.div className={` bg-neutral-700 bottom-0 mt-[-2rem] mb-[0.5rem] md:mb-[1rem] mt:lg-[unset] mx-auto lg:mx-[unset] relative lg:absolute z-20 ${items % 2 === 0 ? 'lg:right-[5rem]' : 'lg:left-[5rem]'} p-[22px] xl:p-[32px] rounded-t-none md:rounded-t-2xl rounded-2xl xl:rounded-3xl flex flex-col items-start  md:h-[140px] h-[240px] w-full md:w-[640px] lg:w-[300px] lg:h-[300px] xl:w-[320px] xl:h-[340px]`}
                                    initial={items % 2 === 0 ? initialRight : initialLeft}
                                    whileInView={whileInView}
                                    transition={{
                                        duration: ".8",
                                        delay: .8
                                    }}
                                >
                                    <h3 className="text-start text-slate-200 md:text-[1.3rem] xl:text-[1.375rem] xl:mt-[2rem] font-light">
                                        {youtube.title}
                                    </h3>
                                    <Link className="bg-smoke py-[6px] px-[32px] mb-[0.75rem] md:mb-0 ms-auto mt-auto text-slate-200 hover:text-slate-50 rounded-2xl font-light" href={youtube.link}>
                                        Let's Go
                                    </Link>
                                </motion.div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </div >
    );
};


export default YoutubeComponent;
