import React from "react";

const ContactForm = () => (
    <div className="formContainer">
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
    </div>
  );
  
  export default ContactForm;
  