import React from 'react';
import '../styles/global.css'; // Ensure global styles with animations are available if needed, though usually imported in App

export default function BackgroundOrbs() {
    return (
        <>
            <div className="hero-orb orb-1" />
            <div className="hero-orb orb-2" />
            <div className="hero-orb orb-3" />
            <div className="hero-orb orb-4" />
        </>
    );
}
