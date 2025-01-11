import Link from "next/link";

export default function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/servicios/desing-desarrollo">Diseño y Desarrollo Web</Link>
                </li>
                <li>
                    <Link href="/servicios/gestion-redes">Gestión de Redes Sociales</Link>
                </li>
                <li>
                    <Link href="/servicios/marketing-gestion">Marketing y Gestión Digital</Link>
                </li>
                <li>
                    <Link href="/servicios/branding-desing">Branding y Diseño</Link>
                </li>
                <li>
                    <Link href="/nosotros">Nosotros</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/preguntas">Preguntas Frecuentes</Link>
                </li>
                <li>
                    <Link href="/contacto">Contacto</Link>
                </li>
                <li>
                    <Link href="/login">Ingresar</Link>
                </li>
                <li>
                    <Link href="/dashboard/home">Ingresar</Link>
                </li>
                <li>
                    <Link href="/dashboard/users">Ingresar</Link>
                </li>
            </ul>
        </header>
    );
}
