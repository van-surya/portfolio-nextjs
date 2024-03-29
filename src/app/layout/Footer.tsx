import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Header() {

    return (
        <footer className="w-full py-[2rem] md:py-[3rem] lg:py-[3rem] bg-grad">
            <div className="container mx-auto flex flex-col items-center px-[1rem] md:px-[2rem]">
                <p className='text-[1rem] md:text-[1.125rem] font-thin text-neutral-900 dark:text-neutral-400 text-center mb-2'>© 2024 Surya. All rights reserved.</p>
                <p className='text-[1rem] md:text-[1.125rem] font-thin text-neutral-800 dark:text-neutral-500 text-center'><strong className=' text-neutral-800 dark:text-neutral-400 font-medium'>About this website:</strong> built with React & Next.js, TypeScript, Tailwind CSS, Framer Motion, Vercel hosting.</p>
            </div>
        </footer>
    );
}
