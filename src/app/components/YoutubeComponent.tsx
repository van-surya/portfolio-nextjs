import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { useSectionInView } from "../lib/hooks";
import Image from "next/image";
import Link from "next/link";

const YoutubeComponent = () => {
    const { ref } = useSectionInView("youtube");

    return (
        <div ref={ref} id="youtube" className="bg-neutral-800">
            <HorizontalScrollCarousel />
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-likeblack">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};
interface CardProps {
    card: {
        id: number;
        image: string;
        title: string;
        link: string;
    };
}

const Card: React.FC<CardProps> = ({ card }) => {
    return (
        <div className="group relative w-[480px] h-[270px] overflow-hidden card_youtube"
            key={card.id}>
            <Image src={card.image} width={480} height={270} alt={card.title}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="card_youtube_body absolute z-10 bottom-0 p-[8px] w-full h-[64px]">
                <Link href={card.link} className=" text-neutral-100 font-normal text-[1rem]">
                    {card.title}
                </Link>
            </div>
        </div >
    );
};

export default YoutubeComponent;

const cards = [
    {
        image: "https://i.ytimg.com/vi/pEx8cdCPsFU/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDr0HKRqOBDP5rflBhYiCCcmDY4hw",
        title: "Tutorial 1 : Responsive Portfolio Website Design: Learn HTML & CSS by Building Your Own Site",
        link: "https://www.youtube.com/watch?v=pEx8cdCPsFU&list=PLnClDkXINfCrqIBVh2fLjGssj4QVwi41i&pp=gAQBiAQB",
        id: 1,
    },
    {
        image: "/assets/images/yt-1.jpg",
        title: "How to make Slider Card with HTML, CSS, and JavaScript - Step by Step Tutorial",
        link: "https://www.youtube.com/watch?v=uO-FuMAbwyo",
        id: 2,
    },
    {
        image: "https://i.ytimg.com/vi/KVlgwi4vggE/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCE0I-xe8UBgW7hUHHbF9QGSFkrqw",
        title: "Learn How to Make a Stunning Responsive Travel Website with HTML & CSS: Step-by-Step Tutorial",
        link: "https://www.youtube.com/watch?v=KVlgwi4vggE&list=PLnClDkXINfCr4CBrgHeHLOy9pR7_32-U7",
        id: 3,
    },
    {
        image: "https://i.ytimg.com/vi/XEf0zCRY0rY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDFXGs4ByXQUGVCdDj_inhFxdmGXg",
        title: "How to Create a Stunning Personal Website with HTML & CSS",
        link: "https://www.youtube.com/watch?v=XEf0zCRY0rY&list=PLnClDkXINfCrOmRZyxUsBsLVQjgS1XWw5&pp=gAQBiAQB",
        id: 4,
    },
    {
        image: "/assets/images/yt-4.jpg",
        title: "Make Responsive vespa website design using html css and javascript",
        link: "https://www.youtube.com/watch?v=hTZId1EV3C0",
        id: 5,
    },
    {
        image: "/assets/images/yt-6.jpg",
        title: "Make carousel website using HTML CSS And Javascript",
        link: "https://www.youtube.com/watch?v=tRLbHwZabfw",
        id: 6,
    },
    {
        image: "/assets/images/yt-7.jpg",
        title: "How to Make Animation Card using HTML and CSS | Dawnscript",
        link: "https://www.youtube.com/watch?v=fWULDmFjg_I",
        id: 7,
    },
];