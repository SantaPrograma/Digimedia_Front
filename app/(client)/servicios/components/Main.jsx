import Image from 'next/image';

export default function Main({ title, subtitle, text, image }) {
  return (
    <main>
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{text}</p>
        <a>¿CÓMO TRABAJAMOS?</a>
      </div>
      <Image src={image} alt="" />
    </main>
  );
}
