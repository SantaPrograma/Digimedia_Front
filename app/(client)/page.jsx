import React from "react";
import Link from "next/link";
import "./components/Home_Components/Home.css"
import Services from './components/Home_Components/servicios'
import Opiniones from './components/Home_Components/testimonios'
import Clientes from "./components/Home_Components/Clientes";

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full">
        <img src="/image-home/inicio.webp" alt="Banner" className="relative h-screen w-full" />
        <div className="mb-[200px] absolute inset-0 flex items-end justify-start">
          <div className="flex flex-col items-start space-y-4">
            <div className="clip-path-polygon text-white relative text-left h-[200px] w-[700px] bg-[rgba(123,34,179,0.5)] 
                rounded-tr-[10px] rounded-br-[10px] custom-clip-path pt-[10px] pl-[20px] pr-[50px]">
              <h1 className="font-bold text-[40px]">¿No sabes por donde empezar?</h1>
              <span className="text-2 text-[#FCEE21] text-[30px]">
                Impulsa tu marca al siguiente nivel <br /> con nosotros
              </span>
            </div>
            <div className="pl-[15px]">
              <Link href="/contactanos" className="btn-grad text-white bg-[#7B22B3] px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-[#682199] transition-all duration-300 transform hover:-translate-y-1">
                ¡Contáctanos!
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Opiniones />
      <Clientes />
    </>
  );
}