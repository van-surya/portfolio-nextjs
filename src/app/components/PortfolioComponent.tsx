// import { motion } from "framer-motion";
import { portfolios } from "../data/";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function PortfolioComponent() {
    return (
        <section className="py-[6rem]">
            <div className="container mx-auto">
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
                    className="Portfolio mt-[3rem]"
                >
                    {portfolios.map((portfolio, x) => (
                        <SwiperSlide>
                            <div className="card_">
                                <img className="mb-[1.2rem]" src={portfolio.image} alt={portfolio.title} />
                                <Link className="text-[1.25rem] font-light text-start hover:text-primary text-neutral-500" href={portfolio.link}>{portfolio.title}</Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );


}
