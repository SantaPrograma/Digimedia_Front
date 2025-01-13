import Image from "next/image"
import logo from "@/public/blog/fondo.webp"
import logoTb from "@/public/blog/fondo-tablet.webp"
import logoMb from "@/public/blog/fondo-mobiles.webp"

export default function Principal() {
    return (
        <>

            <div className="relative w-[100%] h-[100vh] object-cover overflow-hidden">
                <Image
                    src={logo}
                    alt="Logo de la pagina"
                    className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover w-[100%] inset-0 z-0"
                />
                <Image
                    src={logoTb}
                    alt="Logo de la pagina"
                    className="hidden sm:block lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover w-[100%] inset-0 z-0"
                />
                <Image
                    src={logoMb}
                    alt="Logo de la pagina"
                    className="block sm:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover w-[100%] inset-0 z-0"
                />

                <div className="absolute flex justify-center items-center z-1 inset-0 w-[100%] h-[100%] bg-black bg-opacity-50">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-white tracking-[10px] text-[10px] sm:text-[15px]  lg:text-[20px]">DIGIMEDIA</h2>
                        <h1 className="text-white tracking-widest text-[54px] sm:text-[100px] lg:text-[170px]">BLOG</h1>
                        <button className="text-white text-[16px] sm:text-[20px]  lg:text-[24px]">COMIENZA YA</button>
                    </div>
                </div>
            </div>

        </>
    )
}

