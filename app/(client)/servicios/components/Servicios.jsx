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
    <section className="p-4 max-w-6xl m-auto md:py-16">
      <h3 className="font-bold text-xl mb-2 font-title">Nuestros Servicios</h3>
      <div className="flex flex-wrap justify-center gap-4">{serviciosList}</div>
    </section>
  );
}

function Servicio({ title, text, icon }) {
  return (
    <div className="bg-[#973cd1] text-white text-center flex flex-col items-center justify-between gap-4 p-4 basis-64 flex-1 shrink-0 min-[832px]:max-[1118px]:basis-96">
      <Image className="max-w-36" src={icon} alt="" />
      <h4 className="font-bold text-2xl max-w-52 font-title">{title}</h4>
      <p className="max-w-48 basis-24">{text}</p>
      <a className="bg-white text-[#973cd1] font-bold px-8 py-2 rounded-full">
        CONOCE MÁS
      </a>
    </div>
  );
}
