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
    <section className="p-4">
      <h3 className="font-bold text-xl mb-2">Nuestros Servicios</h3>
      {serviciosList}
    </section>
  );
}

function Servicio({ title, text, icon }) {
  return (
    <div className="bg-[#973cd1] text-white text-center flex flex-col items-center gap-4 p-4 my-4">
      <Image className="max-w-52" src={icon} alt="" />
      <h4 className="font-bold text-2xl max-w-52">{title}</h4>
      <p className="max-w-52">{text}</p>
      <a className="bg-white text-[#973cd1] font-bold px-8 py-2 rounded-full">
        CONOCE MÁS
      </a>
    </div>
  );
}
