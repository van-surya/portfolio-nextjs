
// import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faHackerrank, faDribbble, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import Image from 'next/image';
import { useSectionInView } from "../lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import ReactHowler from 'react-howler';
import { useState } from "react";
import { useScroll, useTransform, motion } from
    "framer-motion"; import { Canvas } from "@react-three/fiber";
import { Experience } from '../components/Experience';

export default function Hero() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, 8000]);

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.1],
        ['#ffe3bb', '#1D1D1F']
    );


    const socials = [
        { icon: faGithub, link: 'https://github.com/van-surya' },
        { icon: faCodepen, link: 'https://codepen.io/dawnscript' },
        { icon: faHackerrank, link: 'https://www.hackerrank.com/profile/van_surya' },
        { icon: faDribbble, link: 'https://dribbble.com/van_surya' },
        { icon: faYoutube, link: 'https://www.youtube.com/@dawnscript?si=n8Qqt9lp8h8m23d_' },
    ];

    const [isPlaying, setIsPlaying] = useState(false);
    const audioSource = '/assets/introduction.mp3';
    const [icon, setIcon] = useState(faPlay);

    const handleButtonPlay = () => {
        setIsPlaying(!isPlaying);
        setIcon(isPlaying ? faPlay : faPause);
    };
    return (
        <section
            ref={ref}
            id="home"
            className="lg:h-[100vh] flex">

            <motion.div style={{ x }} className="bg-[#F1C27B] absolute top-[-6rem] -z-10 left-[-6rem] translate-x-[50%] h-[60vh] w-full md:w-[31.25rem] rounded-full blur-[10rem] opacity-35 sm:w-[68.75rem] dark:bg-[#97FEED]"></motion.div>

            <div className="relative container mx-auto my-auto px-[1rem] md:px-[2rem] 2xl:px-[3rem] h-[100vh]">
                <div className="h-[100%]">
                    <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
                        <Experience />
                    </Canvas>
                </div>
                <div className="absolute top-[16%] ">
                    <motion.h1
                        className="relative z-[-1] w-[100%] hero-text flex xl:text-[20rem] leading-[20rem] pointer-events-none"
                        initial={{ x: -10000 }}
                        animate={{ x: [-10000, 0, 0] }}
                        transition={{
                            duration: "2",
                            delay: .5
                        }}
                    >
                        Surya
                    </motion.h1>
                    <motion.div className="flex flex-row items-center"
                        initial={{ x: -10000 }}
                        animate={{ x: [-10000, 0, 0] }}
                        transition={{
                            duration: "2",
                            delay: .5
                        }}>
                        <button onClick={handleButtonPlay} className="h-[42px] w-[42px] text-slate-400 dark:text-slate-900 text-[1.3rem] font-light me-[12px]">
                            <FontAwesomeIcon icon={icon} className="text-primary border p-2 border-primary rounded-full aspect-square hover:text-sand dark:hover:text-smoke hover:bg-primary" />
                        </button>
                        <ReactHowler src={audioSource} playing={isPlaying} />
                        <p className="text-[1.125rem] my-auto hidden md:block text-neutral-700 dark:text-neutral-400">introduction</p>
                    </motion.div>
                </div>
                <div className="flex flex-row gap-[12px] absolute bottom-[3rem] w-[100%]">
                    {socials.map((social, x) => (
                        <motion.div key={x}
                            whileHover={{ scale: 1.2 }}
                        >
                            <Link href={social.link} className="w-[42px] h-[42px] rounded-md shadow-md flex items-center justify-center text-[1.5rem] bg-sand dark:bg-neutral-900 text-primary border border-transparent hover:border-primary"
                            >
                                <FontAwesomeIcon icon={social.icon} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
