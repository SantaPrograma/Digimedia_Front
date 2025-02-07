import Link from 'next/link';

import './Home.css';

export default function Banner() {
  return (
    <section className="bg-[url(/image-home/inicio.webp)] bg-cover bg-[30%] h-[calc(100vh-67px)] relative">
      <div className="mb-[200px] absolute inset-0 flex items-end justify-start">
        <div className="flex flex-col items-start space-y-4">
          <div
            className="clip-path-polygon text-white relative text-left h-[200px] w-[700px] bg-[rgba(123,34,179,0.5)] 
            rounded-tr-[10px] rounded-br-[10px] custom-clip-path pt-[10px] pl-[20px] pr-[50px]"
          >
            <h1 className="font-bold text-[40px]">
              ¿No sabes por donde empezar?
            </h1>
            <span className="text-2 text-[#FCEE21] text-[20px]">
              Impulsa tu marca al siguiente nivel <br /> con nosotros
            </span>
          </div>
          <div className="pl-[15px]">
            <Link
              href="/contacto"
              className="btn-grad text-white bg-[#7B22B3] px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-[#682199] transition-all duration-300 transform hover:-translate-y-1"
            >
              ¡Contáctanos!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
