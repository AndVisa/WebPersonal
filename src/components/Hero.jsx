import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero; 