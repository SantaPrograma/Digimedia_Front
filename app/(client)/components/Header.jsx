import Link from "next/link";
import "./Header.css"

export default function Header() {
    return (
        <header className="flex justify-center text-center bg-[#7B22B3] shadow-xl">
            <div className="contenidoHeader flex w-full h-[67px] justify-evenly">
                {/* Logo */}
                <div className="logoHeader p-2">
                    <Link href="/">
                        <img src="/headerFooter/logoblanco2.webp" alt="Digimedia" className="w-[190px]" />
                    </Link>
                </div>

                {/* Menú */}
                <div className="seccionesHeader flex items-center">
                    <input type="checkbox" id="menucheckbox" className="hidden" />
                    <label htmlFor="menucheckbox" className="flex items-center cursor-pointer">
                        <img src="/headerFooter/menu.webp"
                            alt="menú"
                            id="menucheckbox"
                            className="w-[25px]" />
                    </label>
                    <ul className="menuHorizontal flex list-none m-0 items-center pl-0">
                        <li className="flex items-center">
                            <Link href="/" className="block text-white font-bold text-sm py-[15px] px-[10px] w-full">
                                Inicio
                            </Link>
                        </li>
                        <li className="flex items-center relative">
                            <p className="block text-white font-bold text-sm py-[15px] px-[10px] w-full">
                                Servicios &#9660;
                            </p>
                            <ul className="menuVertical">
                                <li><Link href="/servicios/desing-desarrollo" className="text-white py-2 px-4">Diseño y Desarrollo Web</Link></li>
                                <li><Link href="/servicios/gestion-redes" className="text-white py-2 px-4">Gestión de Redes Sociales</Link></li>
                                <li><Link href="/servicios/marketing-gestion" className="text-white py-2 px-4">Marketing y Gestión Digital</Link></li>
                                <li><Link href="/servicios/branding-desing" className="text-white py-2 px-4">Branding y Diseño</Link></li>
                            </ul>
                        </li>
                        <li className="flex items-center">
                            <Link href="/nosotros" className="block text-white font-bold text-sm py-[15px] px-[10px] w-full">
                                Nosotros
                            </Link>
                        </li>
                        <li className="flex items-center relative">
                            <p className="block text-white font-bold text-sm py-[15px] px-[10px] w-full">
                                Más &#9660;
                            </p>
                            <ul className="menuVertical absolute bg-[#7B22B3] top-[50px] left-0 right-0 hidden flex-col z-10 list-none p-0">
                                <li><Link href="/blog" className="text-white py-2 px-4">Blog</Link></li>
                                <li><Link href="/preguntas" className="text-white py-2 px-4">FQA</Link></li>
                                <li><Link href="/contacto" className="text-white py-2 px-4">Contacto</Link></li>
                            </ul>
                        </li>
                        <li className="flex items-center">
                            <Link href="/login" className="block text-white font-bold text-sm py-[15px] px-[10px] w-full">
                                Ingresar
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
