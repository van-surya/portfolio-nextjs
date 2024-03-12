
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";

export default function AboutComponent() {

    const aboutmes = [
        { icon: faMicrochip, title: 'EXPERIENCE', desc: '3 Years working' },
        { icon: faCode, title: 'PROJECTS', desc: '56 Project' },
        { icon: faGear, title: 'TOOL', desc: 'VsCode, Git, GitBash, Laragon, Figma, Adobe Photoshop, Adobe Ilustrator' },
    ];
    return (
        <section className="py-[6rem] lg:py-[3rem] xl:py-[4rem] 2xl:py-[6rem]">
            <div className="container mx-auto px-[12px] lg:px-none">
                <motion.div className="flex flex-col w-max	"
                    initial={{ scale: 3 }}
                    whileInView={{ scale: 1 }}>
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
                    <h2 className="text-[2rem] font-medium text-neutral-800 z-10">About Me</h2>
                </motion.div>

                <div className="pt-[2rem] md:pt-[3rem] md:ps-[2rem] lg:pt-[1.5rem] border-b border-neutral-500" >
                    <div className="">
                        <h3 className="text-[2rem] md:text-[3.5rem] xl:text-[4rem] font-medium">
                            FRONTEND DEVELOPER
                        </h3>
                        <p className="text-[1.125rem] md:text-[1.5rem] lg:text-[1.5rem] xl:text-[2rem] text-neutral-500 font-thin mb-[0.5rem]">I help companies from all over the world with tailor-made solutions.
                            With each project, I push my work to new horizons, always putting quality first.</p>
                    </div>
                </div>

                <motion.div className="grid md:grid-cols-3 gap-[2rem]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
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
                >

                    {aboutmes.map((aboutme, x) => (
                        <div className="border rounded-sm flex flex-col mt-[3.5rem] p-[24px]
            hover:shadow-lg shadow-md text-neutral-600 hover:text-primary"
                            key={x}>
                            <FontAwesomeIcon icon={aboutme.icon} className="mx-auto text-[2rem] text-primary" />
                            <h3 className="font-medium text-[1.4rem] uppercase mx-auto mt-[1rem]">{aboutme.title}</h3>
                            <p className="text-neutral-500 font-medium mx-auto text-center">{aboutme.desc}</p>
                        </div>
                    ))}

                </motion.div>
            </div>


        </section>
    );
}
