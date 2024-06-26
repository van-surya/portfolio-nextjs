import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import clsx from "clsx";
import { useActiveSectionContext } from "../context/active-section-context";
import { links } from '../data';

type FuncType = (...args: any[]) => void; 

function debounce(func: FuncType, delay: number) {
    let timeoutId: NodeJS.Timeout; 

    return function (this: any, ...args: any[]) { 
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

    useEffect(() => {
        const setInitialActiveSection = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            links.forEach(link => {
                const section = document.querySelector(link.hash);
                if (section) {
                    const { top, bottom } = section.getBoundingClientRect();
                    if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
                        setActiveSection(link.name);
                    }
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        setInitialActiveSection();

        const handleScroll = debounce(() => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            links.forEach(link => {
                const section = document.querySelector(link.hash);
                if (section) {
                    const { top, bottom } = section.getBoundingClientRect();
                    if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
                        setActiveSection(link.name);
                    }
                }
            });
        }, 100);

        window.addEventListener('scroll', handleScroll);
        return () => { 
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setActiveSection]);

    return (
        <motion.header className="w-full sticky top-[22px] hidden md:block"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        > 
            <div className="flex justify-center">
                <ul className="flex py-[4px] px-[12px] items-center gap-[12px] rounded-full">
                    {links.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 py-3 hover:text-slate-900 dark:hover:text-likeblack transition text-neutral-600 dark:text-neutral-400 font-medium text-[1rem]",
                                    {
                                        "text-neutral-900 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-200":
                                            activeSection === link.name,
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}
                                {link.name === activeSection && (
                                    <motion.span
                                        className="rounded-full absolute inset-0 -z-10 bg-sand dark:bg-smoke"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.header>
    );
}
