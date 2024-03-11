import React from 'react';
import { motion } from "framer-motion";

export default function HeaderComponent() {

    return (
        <header className="w-full p-[8px] sticky  top-0">
            <div className="container mx-auto flex flex-row items-center">
                <motion.div className="nav-brand"
                    whileHover={{ scale: 1.2 }}>
                    <h4 className="text-[1.75rem] font-bold text-primary hover:opacity-75 transition delay-150 duration-300 ease-in-out">SURYA</h4>
                </motion.div>
            </div>
        </header>
    );
}
