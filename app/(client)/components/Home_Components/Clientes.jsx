export default function Clientes() {
  return (
    <section className="my-6 mx-12">
      <h3 className="text-2xl text-[#752E75]">NUESTROS CLIENTES</h3>
      <div className="flex justify-center items-center border-b-[1px] max-w-max m-auto border-[#752E75] flex-wrap">
        <Cliente src="/image-home/ContigoVoy.svg" alt="Contigo Voy logo" />
        <Cliente src="/image-home/Digimedia.svg" alt="Digimedia logo" />
        <Cliente src="/image-home/NHL.svg" alt="NHL logo" />
        <Cliente src="/image-home/Tami.svg" alt="Tami logo" />
        <Cliente src="/image-home/Yuntas.svg" alt="Yuntas logo" />
      </div>
    </section>
  );
}

function Cliente({ src, alt }) {
  return <img className="w-52" src={src} alt="" />;
}
