"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { useSectionInView } from "../lib/hooks";
import Project from '../components/project';
import Modal from '../components/modal';

const projects = [
    {
        title: "C2 Montreal",
        year: "2022",
        src: "yt-1.jpg",
        color: "#6DC5D1",
        desc: 'Frontend Developmet'
    },
    {
        title: "C2 Montreal",
        year: "2022",
        src: "yt-1.jpg",
        color: "#FDE49E",
        desc: 'Frontend Developmet'
    },
    {
        title: "Freelance",
        year: "2014",
        src: "yt-1.jpg",
        color: "#FEB941",
        desc: 'Design & Developmet'
    },
    {
        title: "Freelance",
        year: "2014",
        src: "yt-1.jpg",
        color: "#DD761C",
        desc: 'Design & Developmet'
    }
]

export default function Experience() {
    const { ref } = useSectionInView("experience");
    const [modal, setModal] = useState({ active: false, index: 0 })
    return (
        <motion.section ref={ref} id="experience" className="flex items-center overflow-hidden h-[100vh]"
        >
            <div className="container mx-auto px-[1rem] md:px-[2rem] 2xl:px-[3rem]">
                <h4 className="text-neutral-200 text-[2rem]">Working Experience</h4>
                <div className="w-[100%] flex items-center justify-center">
                    <div className="w-[100%] flex flex-col items-center justify-center">
                        {
                            projects.map((project, index) => {
                                return <Project index={index} title={project.title} desc={project.desc} year={project.year} setModal={setModal} key={index} />
                            })
                        }
                    </div>
                    <Modal modal={modal} projects={projects} />
                </div>
            </div>
        </motion.section>
    );
}
