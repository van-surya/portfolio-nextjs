
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faHackerrank, faDribbble, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function HeroComponent() {

    const socials = [
        { icon: faGithub, link: 'https://github.com/van-surya' },
        { icon: faCodepen, link: 'https://codepen.io/dawnscript' },
        { icon: faHackerrank, link: 'https://www.hackerrank.com/profile/van_surya' },
        { icon: faDribbble, link: 'https://dribbble.com/van_surya' },
        { icon: faYoutube, link: 'https://www.youtube.com/@dawnscript?si=n8Qqt9lp8h8m23d_' },
    ];

    return (
        <section className="h-[90vh] flex">
            <div className="container mx-auto my-auto ">
                <div className="grid md:grid-cols-2 gap-[3rem]">
                    <div className="">
                        <div className="flex relative">
                            <div className=" hero-image-component w-[540px] h-[540px]">
                                <img className="w-[100%] h-[100%]" src="/assets/images/hero.png" alt="Hero" />
                                <motion.div
                                    className="circle-wrap"
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
                                        <h3 className="text-primary">3</h3>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <motion.h1
                            className="hero-text text-[11rem]"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }}
                            whileHover={{ skewX: 25 }}
                        >
                            Surya
                        </motion.h1>
                        <p className="text-[1.5rem] font-thin">
                            Currently focused on Frontend Developer, but exposed in all aspects of web development including Frontend and Backend, UI design
                        </p>
                        <div className="flex flex-row items-center mt-[1.4rem]">
                            <button className="h-[42px] w-[42px] text-slate-900 text-[1.3rem] font-light me-[12px]">
                                <FontAwesomeIcon icon={faPlay} className="text-primary border p-2 border-primary rounded-full aspect-square hover:text-neutral-50 hover:bg-primary" />
                            </button>
                            <p className="text-[1.125rem] my-auto">introduction</p>
                        </div>
                    </div>
                </div>
                <div className="mt-[4rem] flex flex-row items-center">
                    <p className="text-[1.24rem] font-light">Follow Me</p>
                    <span className="h-[2rem] w-[1px] bg-slate-900 content block mx-[16px]"></span>
                    {socials.map((social, x) => (
                        <motion.div key={x}
                            whileHover={{ scale: 1.2 }}
                        >
                            <Link href={social.link} className="w-[42px] h-[42px] rounded-md shadow-md flex items-center justify-center text-[1.5rem] text-primary border border-transparent hover:border-primary ms-[12px]"
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
