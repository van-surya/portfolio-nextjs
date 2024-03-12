// import { motion } from "framer-motion";
import { portfolios } from "../data/";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioComponent() {
    return (
        <section className="py-[1.5rem] lg:py-[3rem] 2xl:py-[6rem]">
            <div className="container mx-auto px-[12px] md:px-unset">
                <div className="mx-auto">
                    <h2 className="text-medium font-medium text-[2rem] uppercase">Portfolio</h2>
                </div>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="Portfolio mt-[2rem] lg:mt-[3rem]"
                >
                    {portfolios.map((portfolio, x) => (
                        <SwiperSlide key={x}>
                            <div className="card_">
                                <Image className="mb-[1.2rem]" width={500} height={300} src={portfolio.image} alt={portfolio.title} />
                                <Link className="text-[1.25rem] font-light text-start hover:text-primary text-neutral-500" href={portfolio.link}>{portfolio.title}</Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );


}
