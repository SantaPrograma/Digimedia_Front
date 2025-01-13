"use client";

import React from "react";
import { motion } from "framer-motion";

const Banner = () => (
  <div className="banner">
    <img id="bannerImg" src="/contactanos/banner.webp" alt="Banner" />
    <div className="overlay">
      <motion.div
        className="iconBannerWrapper"
        initial={{
          opacity: 0,
          scale: 0.5,
          rotate: 720,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <img
          className="iconBanner"
          src="/contactanos/iconContact.svg"
          alt="Icono"
        />
      </motion.div>
      <h2 className="titleBanner">CONTÁCTANOS AHORA</h2>
    </div>
  </div>
);

export default Banner;
