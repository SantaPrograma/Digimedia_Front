import Image from 'next/image';

export default function Contactanos({ text, iconLeft, iconRight }) {
  return (
    <section className="bg-[#7b22b3] text-white font-bold text-3xl text-center p-12 relative">
      <p className="mb-8 z-10 relative">{text}</p>
      <button
        id="modal-button"
        className="bg-[#ff037f] p-4 inline-block rounded-2xl z-10 relative"
      >
        Contáctanos ahora
      </button>
      <Image className="absolute bottom-4 left-0" src={iconLeft} alt="" />
      <Image className="absolute bottom-4 right-0" src={iconRight} alt="" />
    </section>
  );
}
