import Image from 'next/image';

export default function Servicios({ servicios }) {
  const serviciosList = servicios.map((servicio, index) => {
    return (
      <Servicio
        title={servicio.title}
        text={servicio.text}
        icon={servicio.icon}
        key={index}
      />
    );
  });

  return (
    <section>
      <h3>Nuestros Servicios</h3>
      {serviciosList}
    </section>
  );
}

function Servicio({ title, text, icon }) {
  return (
    <div>
      <Image src={icon} alt="" />
      <h4>{title}</h4>
      <p>{text}</p>
      <a>CONOCE MÁS</a>
    </div>
  );
}
