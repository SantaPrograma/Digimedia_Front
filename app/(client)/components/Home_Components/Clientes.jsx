export default function Clientes() {
  return (
    <section className="my-6 mx-12">
      <h3 className="text-2xl text-[#752E75]">NUESTROS CLIENTES</h3>
      <div className="flex justify-center items-center border-b-[1px] max-w-max m-auto border-[#752E75] flex-wrap">
        <Cliente 
          src="/image-home/ContigoVoy.svg" 
          alt="Contigo Voy logo" 
          link="https://www.contigo-voy.com/" 
        />
        <Cliente 
          src="/image-home/Digimedia.svg" 
          alt="Digimedia logo" 
          link="https://www.digimediamkt.com/" 
        />
        <Cliente 
          src="/image-home/NHL.svg" 
          alt="NHL logo" 
          link="https://nhldecoracioncomercial.com/" 
        />
        <Cliente 
          src="/image-home/Tami.svg" 
          alt="Tami logo" 
          link="https://tami-peru.com/views/" 
        />
        <Cliente 
          src="/image-home/Yuntas.svg" 
          alt="Yuntas logo" 
          link="https://yuntasproducciones.com/" 
        />
      </div>
    </section>
  );
}

function Cliente({ src, alt, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="w-52" src={src} alt={alt} />
    </a>
  );
}
