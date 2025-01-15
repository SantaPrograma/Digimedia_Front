import ContactForm from "./contactForm";
import SocialMediaLinks from "./socialMediaLinks";

const MainSection = () => (
    <section className="mainSection">
      <div className="firstContent">
        <h2>
          <b className="subtitle">
            <span className="sectionLine">—</span> Solucionamos tus dudas
          </b>
        </h2>
        <p className="textContent">
          Responderemos tus dudas a la brevedad, envíanos un mensaje con tus consultas o dudas.
        </p>
      </div>
      <div className="secondContent">
        <ContactForm />
        <div className="srta">
          <img src="/contactanos/srta.webp" alt="srta" />
        </div>
      </div>
      <br />
      <div className="firstContent">
        <h2>
          <b className="subtitle">
            <span className="sectionLine">—</span> Tenemos redes sociales
          </b>
        </h2>
        <p className="textContent">Visita y revisa el contenido de nuestras redes sociales.</p>
      </div>
      <SocialMediaLinks />
    </section>
  );
  
  export default MainSection;
  