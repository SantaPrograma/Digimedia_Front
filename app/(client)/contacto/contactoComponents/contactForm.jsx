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
        <div>
          <input type="text" id="name" name="name" placeholder="Nombre" required />
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <div>
          <input type="tel" id="phone" name="phone" placeholder="Número" required />
        </div>
        <div>
          <textarea id="message" name="message" placeholder="Mensaje" rows="10" required></textarea>
        </div>
        <div>
          <button type="submit">Enviar mensaje <span className="icon">📩</span></button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
