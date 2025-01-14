import Image from 'next/image';

export default function Main({ title, subtitle, text, image }) {
  return (
    <main className="flex flex-col-reverse items-center">
      <div className=" text-center">
        <h1 className="text-[#7b22b3] font-bold text-5xl m-4">{title}</h1>
        <h2 className="font-bold text-2xl m-2">{subtitle}</h2>
        <p>{text}</p>
        <a className="bg-[#7b22b3] text-white font-bold p-3 inline-block rounded-full m-8">
          ¿CÓMO TRABAJAMOS?
        </a>
      </div>
      <Image src={image} alt="" />
    </main>
  );
}
