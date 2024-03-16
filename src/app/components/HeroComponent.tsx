
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faHackerrank, faDribbble, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import Image from 'next/image';
import { useSectionInView } from "../lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";

export default function HeroComponent() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const socials = [
        { icon: faGithub, link: 'https://github.com/van-surya' },
        { icon: faCodepen, link: 'https://codepen.io/dawnscript' },
        { icon: faHackerrank, link: 'https://www.hackerrank.com/profile/van_surya' },
        { icon: faDribbble, link: 'https://dribbble.com/van_surya' },
        { icon: faYoutube, link: 'https://www.youtube.com/@dawnscript?si=n8Qqt9lp8h8m23d_' },
    ];

    return (
        <section
            ref={ref}
            id="home"
            className="md:h-[100vh] flex pt-[2rem] md:pt-0 pt:md-unset pb-[3rem] md:pb-0">
            <div className="container mx-auto my-auto px-[1rem] md:px-[2rem] 2xl:px-[3rem]">
                <div className="grid md:grid-cols-2 gap-[3rem]">
                    <div className="w-full"> 
                        <div className="flex relative justify-center">
                            <motion.div className=" hero-image-component w-[280px] md:w-[300px] h-[280px] md:h-[300px] lg:h-[380px] lg:w-[380px] 2xl:h-[540px] 2xl:w-[540px]"
                                initial={{ y: -10000 }}
                                animate={{ y: [-10000, 0, 0] }}
                                transition={{
                                    duration: "2",
                                    delay: .5
                                }}>
                                <Image className="w-[100%] h-[100%]" src="/assets/images/hero.png" loading="eager" alt="Hero" width={400} height={400} />
                                <motion.div
                                    className="circle-wrap w-[140px] h-[140px] right-[12px] bottom-[-3rem] lg:right-[-1.5rem] lg:w-[180px] lg:h-[180px] xl:w-[200px]  xl:h-[200px]  xl:right-[-3rem]"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <div className="circle">
                                        <svg viewBox="0 0 150 150">
                                            <path id="curve" fill="transparent" d="M 75 75 m -50, 0 a 50, 50 0 1, 1 100, 0 a 50, 50 0 1, 1 -100, 0" />
                                            <text className="my-auto mx-auto">
                                                <textPath xlinkHref="#curve">YEARS OF WORK EXPERIENCE</textPath>
                                            </text>
                                        </svg>
                                        <h3 className="text-primary text-[4.2rem]">3</h3>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <motion.h1
                            className="hero-text text-center md:text-start text-[4rem] md:text-[4.5rem] lg:text-[7rem] xl:text-[10rem] 2xl:text-[11rem]"
                            initial={{ x: -10000 }}
                            animate={{ x: [-10000, 0, 0] }}
                            transition={{
                                duration: "2",
                                delay: .5
                            }}
                        >
                            Surya
                        </motion.h1>
                        <motion.p className="text-[1.2rem] lg:text-[1.5rem] text-neutral-500 font-thin text-center md:text-start"
                            initial={{ x: -10000 }}
                            animate={{ x: [-10000, 0, 0] }}
                            transition={{
                                duration: "2",
                                delay: .5
                            }}>
                            Currently focused on Frontend Developer, but exposed in all aspects of web development including Frontend and Backend, UI design
                        </motion.p>
                        <motion.div className="flex flex-row items-center mt-[1rem] md:mt-[1.4rem] mx-auto lg:ms-0"
                            initial={{ x: -10000 }}
                            animate={{ x: [-10000, 0, 0] }}
                            transition={{
                                duration: "2",
                                delay: .5
                            }}>
                            <button className="h-[42px] w-[42px] text-slate-900 text-[1.3rem] font-light me-[12px]">
                                <FontAwesomeIcon icon={faPlay} className="text-primary border p-2 border-primary rounded-full aspect-square hover:text-smoke hover:bg-primary" />
                            </button>
                            <p className="text-[1.125rem] my-auto hidden md:block text-neutral-400">introduction</p>
                        </motion.div>
                    </div>
                </div>
                <motion.div className="mt-[1.5rem] md:mt-[4rem] flex flex-col md:flex-row items-center"
                    initial={{ y: -10000 }}
                    animate={{ y: [-10000, 0, 0] }}
                    transition={{
                        duration: "2",
                        delay: .5
                    }}>
                    <p className="text-[1.24rem] font-light text-neutral-500">Follow Me</p>
                    <span className="h-[2rem] w-[1px] bg-neutral-500 content mx-[16px] hidden md:block" />
                    <div className="flex flex-row gap-[12px]">
                        {socials.map((social, x) => (
                            <motion.div key={x}
                                whileHover={{ scale: 1.2 }}
                            >
                                <Link href={social.link} className="w-[42px] h-[42px] rounded-md shadow-md flex items-center justify-center text-[1.5rem] bg-neutral-900 text-primary border border-transparent hover:border-primary"
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
