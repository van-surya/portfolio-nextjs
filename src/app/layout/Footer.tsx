import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Header() {

    return (
        <footer className="w-full py-[2rem]">
            <div className="container mx-auto flex flex-col items-center">
                <p className='text-[1.125rem] font-thin text-neutral-500'>© 2024 Surya. All rights reserved.</p>
                <p className='text-[1.125rem] font-thin text-neutral-500'>About this website: built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, Vercel hosting.</p>
            </div>
        </footer>
    );
}
