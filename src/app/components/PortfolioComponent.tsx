"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioComponent() {

    return (
        <section className="py-[1.5rem] lg:py-[3rem] 2xl:py-[6rem]"
        >
            <div className="container mx-auto px-[12px] md:px-unset">
                <div className="mx-auto">
                    <h2 className="text-medium font-medium text-[2rem] uppercase">Portfolio</h2>
                </div>
                <div className="flex flex-row gap-[2rem] mx-auto w-[640px] mt-[2rem]">
                    <motion.div className="aspect-[3/4] shadow-xl  hover:p-[12px]"
                        whileHover={{ scale: [null, 1.2, 1.1] }}
                        transition={{ duration: 0.5 }}>
                        <Link className="" href='https://architect-design.vercel.app/'>
                            <img src="./assets/images/build-co.png" className="h-full object-cover" alt="" />
                        </Link>
                    </motion.div>
                    <div className="grid gap-[2rem]">
                        <motion.div className="shadow-xl  hover:p-[12px]"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{ duration: 0.5 }}>
                            <Link className="" href='https://architect-design.vercel.app/'>
                                <img src="./assets/images/build-co.png" alt="" />
                            </Link>
                        </motion.div>
                        <motion.div className="shadow-xl  hover:p-[12px]"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{ duration: 0.5 }}>
                            <Link className="" href='https://dawns-landingpage.vercel.app/'>
                                <img src="./assets/images/lanpage.png" alt="" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );


}
