
import { motion } from "framer-motion";
import { skills } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'

export default function SkillComponent() {

    return (
        <section className="py-[6rem]">
            <div className="container mx-auto">
                <div className="flex flex-col w-max	"
                >
                    <div className="relative">
                        <div className="digital-ball w-[42px] h-[42px] top-[8px] left-0">
                            <div className="overlay"></div>
                            <div className="globe">
                                <div className="globe-wrap">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle-hor"></div>
                                    <div className="circle-hor-middle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-[2rem] font-medium text-neutral-800 z-10">
                        SKILL
                    </h2>
                    <p className="text-neutral-500 font-thin text-[1.4rem]">Technical skill</p>
                </div>

                <div className="py-[3rem] ps-[2rem] border-b border-neutral-500">
                    <div className="border border-neutral-400 p-[3rem]">
                        <div className="grid grid-cols-6">
                            {skills.map((skill, x) => (
                                <div className="mt-[1.4rem]" key={x}>
                                    <div className="flex flex-row items-center text-primary">
                                        <FontAwesomeIcon icon={faBrain} className="me-[12px] text-[1.rem]" />
                                        <div className="">
                                            <h5 className="font-medium text-[1.5rem] text-neutral-600">
                                                {skill.title}
                                            </h5>
                                            <p className="text-[1.125rem] font-thin text-neutral-600">
                                                {skill.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </section>

    );
}
