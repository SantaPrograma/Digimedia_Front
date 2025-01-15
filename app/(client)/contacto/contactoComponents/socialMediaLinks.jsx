"use client";

import React from "react";
import { motion } from "framer-motion";

const SocialMediaLinks = () => (
  <motion.div
    className="formContainer"
    initial={{ opacity: 0, y: "-100%" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, delay: 1 }}
    style={{ overflow: "hidden" }}
  >
    <div className="tarjeta-redes">
      <h3>Conéctate con nosotros</h3>
      <div className="contenedor-redes">
        <div className="red">
          <a href="https://www.facebook.com/DigiMedia.Marketing1" target="_blank" rel="noopener noreferrer">
            <img src="/headerFooter/facebook.png" alt="Facebook" />
            Facebook
          </a>
        </div>
        <div className="red">
          <a href="https://www.instagram.com/digimediamkt/" target="_blank" rel="noopener noreferrer">
            <img src="/headerFooter/instagram.png" alt="Instagram" />
            Instagram
          </a>
        </div>
        <div className="red">
          <a href="https://www.linkedin.com/in/digimedia-marketing/" target="_blank" rel="noopener noreferrer">
            <img src="/headerFooter/linkedin.png" alt="LinkedIn" />
            LinkedIn
          </a>
        </div>
        <div className="red">
          <a href="https://www.tiktok.com/@digimediamkt" target="_blank" rel="noopener noreferrer">
            <img src="/headerFooter/tiktok.png" alt="TikTok" />
            TikTok
          </a>
        </div>
        <div className="red">
          <a href="https://www.youtube.com/@digimediamarketing" target="_blank" rel="noopener noreferrer">
            <img src="/headerFooter/youtube.png" alt="YouTube" />
            YouTube
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default SocialMediaLinks;
