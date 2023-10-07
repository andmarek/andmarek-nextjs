"use client";

import React, { useState, useEffect } from 'react';

export default function DynamicText() {
    const [index, setIndex] = useState(0);
    const phrases = [
        'Software Developer',
        'Runner',
        'Caffeine Connoisseur',
        'Tech Enthusiast',
        'Living in Seattle'
    ]

    useEffect(() => {
        const interval = setInterval(() =>{
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 1500); // change every 1.5 seconds
        return () => clearInterval(interval);
    }, []);
    return <h1> {phrases[index]}</h1>;
}