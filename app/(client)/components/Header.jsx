'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

export default function Header2() {
  const pathname = usePathname();

  // Función para verificar si una ruta está activa
  const isActive = (path) => pathname === path;
  const isServiceActive = pathname.startsWith('/servicios');
  const isMoreActive = pathname.startsWith('/blog') || pathname.startsWith('/preguntas') || pathname.startsWith('/contacto');

  return (
    <header className="header">
      <div className="contenidoHeader">
        <div className="logoHeader d-flex align-items-center">
          <Link href="/">
            <img src="/headerFooter/logoblanco2.webp" alt="Digimedia" width="190px" height="65px" />
          </Link>
        </div>
        <div className="seccionesHeader">
          <input type="checkbox" id="menucheckbox" />
          <label htmlFor="menucheckbox">
            <img src="/headerFooter/menu.webp" alt="menú" className="menuIcono" width="25" height="25" />
          </label>
          <ul className="menuHorizontal">
            <li className={isActive('/') ? 'active' : ''}>
              <Link href="/">Inicio</Link>
            </li>
            <li className={isServiceActive ? 'active' : ''}>
              <p>Servicios &#9660;</p>
              <ul className="menuVertical">
                <li className={isActive('/servicios/desing-desarrollo') ? 'active-sub' : ''}>
                  <Link href="/servicios/desing-desarrollo">Diseño y Desarrollo Web</Link>
                </li>
                <li className={isActive('/servicios/gestion-redes') ? 'active-sub' : ''}>
                  <Link href="/servicios/gestion-redes">Gestión de Redes Sociales</Link>
                </li>
                <li className={isActive('/servicios/marketing-gestion') ? 'active-sub' : ''}>
                  <Link href="/servicios/marketing-gestion">Marketing y Gestión Digital</Link>
                </li>
                <li className={isActive('/servicios/branding-desing') ? 'active-sub' : ''}>
                  <Link href="/servicios/branding-desing">Branding y Diseño</Link>
                </li>
              </ul>
            </li>
            <li className={isActive('/nosotros') ? 'active' : ''}>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li className={isMoreActive ? 'active' : ''}>
              <p>Más &#9660;</p>
              <ul className="menuVertical">
                <li className={isActive('/blog') ? 'active-sub' : ''}>
                  <Link href="/blog">Blog</Link>
                </li>
                <li className={isActive('/preguntas') ? 'active-sub' : ''}>
                  <Link href="/preguntas">FQA</Link>
                </li>
                <li className={isActive('/contacto') ? 'active-sub' : ''}>
                  <Link href="/contacto">Contacto</Link>
                </li>
              </ul>
            </li>
            <li className={isActive('/login') ? 'active' : ''}>
              <Link href="/login">Ingresar</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}