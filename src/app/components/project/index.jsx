'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({ index, title, desc, year, setModal }) {

    return (
        <div onMouseEnter={() => { setModal({ active: true, index }) }} onMouseLeave={() => { setModal({ active: false, index }) }} className={styles.project}>
            <h2 className='transition-all duration-3 text-[3rem] font-bold text-neutral-200 m-0 flex flex-row'><span className='uppercase'>{title}</span><span className='mb-auto text-[1.35rem]'>{year}</span></h2>
            <p className='transition-all duration-3 text-[1.5rem] font-normal text-neutral-200' >{desc}</p>
        </div>
    )
}