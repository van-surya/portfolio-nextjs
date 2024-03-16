"use client";
import React, { useState } from 'react';
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faSun } from '@fortawesome/free-solid-svg-icons';

export default function ModeComponent() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;


    return (
        <button
            onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
            className='fixed bottom-[2rem] right-[-22px] py-[4px] px-[12px] transform rotate-90 rounded-br-xl rounded-bl-xl shadow-xl text-neutral-50 bg-primary text-[1.2rem] flex items-center justify-center'>
            {theme == "dark" ? 'Light' : 'Dark'}
        </button>
    );
}
