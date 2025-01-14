import React from "react";
import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/public/home/inicio.webp"
import "@/app/(client)/Home_Components/Home.css"

export default function Home() {
  return(
      <section className="relative h-screen w-full">
        <Image src={bannerImg} alt="Banner" className="relative h-screen w-full" />
        <div className="mb-[200px] absolute inset-0 flex items-end justify-start">
          <div className="flex flex-col items-start space-y-4">
            <div className="clip-path-polygon text-white relative text-left w-[45%] h-[200px] w-[700px] bg-[rgba(123,34,179,0.5)] 
                rounded-tr-[10px] rounded-br-[10px] custom-clip-path pt-[10px] pl-[20px] pr-[50px]">
              <h1 className="font-bold text-[40px]">¿No sabes por donde empezar?</h1>
              <span className="text-2 text-[#FCEE21] text-[30px]">
                Impulsa tu marca al siguiente nivel <br /> con nosotros
              </span>
            </div>
            <Link href="/contactanos" className="btn-contactos text-light block">
              ¡Contáctanos!
            </Link>
          </div>
        </div>
  </section>

  );
}