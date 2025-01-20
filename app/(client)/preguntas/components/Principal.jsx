import Image from "next/image"
import logo from "@/public/faq/fondo.webp"

export default function Principal() {


    return (
        <>
            <section className="relative w-full h-[500px]  overflow-hidden">
                <Image
                    src={logo}
                    alt="logo de preguntas y respuestas"
                    className="absolute  inset-0 w-full h-full xl:h-auto  object-cover z-0 "
                />
                <div className="absolute inset-0 z-2 flex justify-center items-center  bg-gradient-to-r from-[#7b22b344] to-[#7b22b344]">
                    <h1 className="text-white text-[30px] text-center md:text-[50px] font-semibold" >PREGUNTAS FRECUENTES</h1>
                </div>
            </section>
        </>
    )
}

