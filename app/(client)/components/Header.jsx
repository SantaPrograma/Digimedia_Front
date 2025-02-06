import Link from 'next/link';
import './Header.css';

export default function Header2() {
  return (
    <header>
      <div className="contenidoHeader">
        <div className="logoHeader d-flex align-items-center">
          <Link href="/">
            <img
              src="/headerFooter/logoblanco2.webp"
              alt="Digimedia"
              width="190px"
              height="65px"
            />
          </Link>
        </div>
        <div className="seccionesHeader">
          <input type="checkbox" id="menucheckbox" />
          <label for="menucheckbox">
            <img
              src="/headerFooter/menu.webp"
              alt="menú"
              className="menuIcono"
              width="25"
              height="25"
            />
          </label>
          <ul className="menuHorizontal">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li disable>
              <p>Servicios &#9660;</p>
              <ul className="menuVertical">
                <li>
                  <Link href="/servicios/desing-desarrollo">
                    Diseño y Desarrollo Web
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/gestion-redes">
                    Gestión de Redes Sociales
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/marketing-gestion">
                    Marketing y Gestión Digital
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/branding-desing">
                    Branding y Diseño
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <p>Más &#9660;</p>
              <ul className="menuVertical">
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/preguntas">FQA</Link>
                </li>
                <li>
                  <Link href="/contacto">Contacto</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/login">Ingresar</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
