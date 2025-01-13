import Link from "next/link";
import Image from "next/image";
import telefono from "@/public/headerFooter/phone.png";
import correo from "@/public/headerFooter/correo.png";
import location from "@/public/headerFooter/location.png";
import logoFooter from "@/public/headerFooter/logoFooter.webp";
import tiktok from "@/public/headerFooter/tiktok.png";
import instagram from "@/public/headerFooter/instagram.png";
import youtube from "@/public/headerFooter/youtube.png";
import linkedin from "@/public/headerFooter/linkedin.png";
import facebook from "@/public/headerFooter/facebook.png";

export default function Footer() {
    return (
        <footer>
            <div className="mainFooter bg-[#333333]">
                <div className="footerContenido pt-[70px] px-[70px] pb-0 text-white flex justify-evenly">
                    <div className="imgFooter">
                        <Image src={logoFooter} alt="Digimedia" width={250} height={100} />
                    </div>
                    <div className="contactoFooter listaFooter w-[300px]">
                        <h3 className="pb-[20px] text-white">Contacto</h3>
                        <ul className="list-none">
                            <li className="pb-[10px]">
                                <Link className="flex" href="https://wa.me/936910425" target="_blank">
                                    <Image className="mr-[10px]" src={telefono} alt="Celular" width="25px" height="25px" /> 936 910 425
                                </Link>
                            </li>
                            <li className="pb-[10px]">
                                <Link className="flex" href="mailto:digimediamkt@gmail.com" target="_blank">
                                    <Image className="mr-[10px]" src={correo} alt="Correo" width="25px" height="25px" />
                                    digimediamkt@gmail.com
                                </Link>
                            </li>
                            <li className="pb-[10px]">
                                <Link className="flex items-center" href="#">
                                    <Image className="mr-[10px]" src={location} alt="Ubicación" width="25px" height="25px" />
                                    Jr. Paruro 1401, Cercado de Lima - Lima
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="legalesFooter listaFooter">
                        <h3 className="pb-[20px] text-white">Legales</h3>
                        <ul>
                            <li className="pb-[10px]">
                                <Link href="/politica-privacidad" target="_blank">
                                    Política de privacidad
                                </Link>
                            </li>
                            <li className="pb-[10px]">
                                <Link href="/terminos-condiciones" target="_blank">
                                    Términos y Condiciones
                                </Link>
                            </li>
                            <li className="pb-[10px]">
                                <Link href="/reclamaciones" target="_blank">
                                    Libro de reclamaciones
                                </Link>
                            </li>
                            <li className="pb-[10px]">Trabaja con nosotros</li>
                        </ul>
                    </div>
                    <div className="redesFooter listaFooter">
                        <h3 className="pb-[20px] text-white">Redes Sociales</h3>
                        <ul className="flex gap-[20px]">
                            <li className="transition-all duration-500 hover:scale-[1.1]">
                                <Link href="https://www.tiktok.com/@digimediamkt" target="_blank">
                                    <Image src={tiktok} alt="TikTok" width="25px" height="25px" />
                                </Link>
                            </li>
                            <li className="transition-all duration-500 hover:scale-[1.1]">
                                <Link href="https://www.instagram.com/digimediamkt/" target="_blank">
                                    <Image src={instagram} alt="Instagram" width="25px" height="25px" />
                                </Link>
                            </li>
                            <li className="transition-all duration-500 hover:scale-[1.1]">
                                <Link href="https://www.youtube.com/@digimediamarketing" target="_blank">
                                    <Image src={youtube} alt="YouTube" width="25px" height="25px" />
                                </Link>
                            </li>
                            <li className="transition-all duration-500 hover:scale-[1.1]">
                                <Link href="https://www.linkedin.com/in/digimedia-marketing/" target="_blank">
                                    <Image src={linkedin} alt="LinkedIn" width="25px" height="25px" />
                                </Link>
                            </li>
                            <li className="transition-all duration-500 hover:scale-[1.1]">
                                <Link href="https://www.facebook.com/DigiMedia.Marketing1" target="_blank">
                                    <Image src={facebook} alt="Facebook" width="25px" height="25px" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="barraFooter flex justify-center">
                    <hr className="border-[1px] border-white w-[98%] rounded-[5px]" />
                </div>
                <div className="rucFooter bg-[#333333] p-[10px_30px] text-white flex justify-between">
                    <div className="ruc">
                        <p>RUC: 20605116559</p>
                    </div>
                    <div className="derechosFooter">
                        <p>@digimedia.com. Derechos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
