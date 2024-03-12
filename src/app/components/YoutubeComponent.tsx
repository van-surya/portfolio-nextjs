import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import '../motionslide.scss';

const MAX_TITLE_LENGTH = 40;

export default function YoutubeComponent() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
                        part: 'snippet',
                        channelId: process.env.NEXT_PUBLIC_YOUR_CHANNEL_ID,
                        maxResults: 20,
                        order: 'rating',
                    }
                }
                );
                setVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <section className='py-[6rem]'>
            <div className="container mx-auto">
                <div className="flex flex-row items-center justify-between mb-[3rem]">
                    <h2 className='text-[2rem] text-neutral-700 font-medium'>DawnScript Channel</h2>
                    <svg id="progress" className='w-[54px] h-[54px]' viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            className="indicator"
                            style={{ pathLength: scrollXProgress }}
                        />
                    </svg>
                </div>


                <ul ref={ref}>
                    {videos.map(video => (
                        <li key={video.id.videoId} className='flex flex-col'>
                            <img className='aspect-[16/9] object-cover w-full mb-[1.2rem]' src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                            <Link className='text-[1.25rem] text-neutral-500 hover:text-primary font-light' href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                                {truncateText(video.snippet.title)}
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
}

function truncateText(text: string): string {
    if (text.length <= MAX_TITLE_LENGTH) {
        return text;
    } else {
        const truncatedText = text.substring(0, MAX_TITLE_LENGTH);
        const lastSpaceIndex = truncatedText.lastIndexOf(' ');
        return truncatedText.substring(0, lastSpaceIndex) + '...';
    }
}
