import Link from 'next/link';

import './Home.css';

export default function Banner() {
  return (
    <main className="bg-[url(/image-home/inicio.webp)] bg-cover bg-[30%] h-[calc(100vh-67px)]">
      <div className="flex flex-col items-center justify-center h-full mx-4 md:justify-end md:items-start md:mx-0">
        <div className="bg-[rgba(123,34,179,0.5)] text-center py-4 px-10 rounded-xl md:[clip-path:polygon(0_0,100%_0,80%_100%,0_100%)] md:px-24 md:text-left">
          <h1 className="text-white font-bold text-4xl md:text-6xl max-w-xl">
            ¿No sabes por dónde empezar?
          </h1>
          <p className="text-[#FCEE21] text-2xl max-w-96 m-auto md:m-0">
            Impulsa tu marca al siguiente nivel con nosotros
          </p>
        </div>
        <Link
          className="btn-grad text-white bg-[#7B22B3] px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-[#682199] transition-all duration-300 transform hover:-translate-y-1 mx-24 mt-5 mb-8"
          href="/contacto"
        >
          ¡Contáctanos!
        </Link>
      </div>
    </main>
  );
}
