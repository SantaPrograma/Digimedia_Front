"use client";

import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div
      className="formContainer"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      style={{ overflow: "hidden" }}
    >
      <form action="backend" method="post">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input type="text" id="name" name="name" placeholder="Nombre" required />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <input type="email" id="email" name="email" placeholder="Email" required />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <input type="tel" id="phone" name="phone" placeholder="Número" required />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <textarea id="message" name="message" placeholder="Mensaje" rows="10" required></textarea>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <button type="submit">
            Enviar mensaje <span className="icon">📩</span>
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;