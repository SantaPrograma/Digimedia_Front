import Image from 'next/image';

export default function Contactanos({ text, iconLeft, iconRight }) {
  return (
    <section>
      <p>{text}</p>
      <a>Contáctanos ahora</a>
      <Image src={iconLeft} alt="" />
      <Image src={iconRight} alt="" />
    </section>
  );
}
