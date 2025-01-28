import '../globals.css';
import Link from 'next/link';

export const metadata = {
  title: '.:: DigiMedia ::.',
};

export default function RootLayout({ children }) {
  return (
    <>
      <div>
        <div>
          <img src="/dashboard/main-icon.svg" alt="" width={40} />
          <h1>Digimedia</h1>
        </div>

        <button>
          <img src="/dashboard/logout-icon.svg" alt="" width={20} />
          Cerrar sesión
        </button>

        <nav>
          <ul>
            <TableLink title="Sección Principal" href="/dashboard/main" />
            <TableLink
              title="Libro de Reclamaciones"
              href="/dashboard/reclamaciones"
            />
            <TableLink title="Modales" href="/dashboard/modales" />
            <TableLink title="Usuarios" href="/dashboard/users" />
            <TableLink title="Servicios" href="/dashboard/servicios" />
          </ul>
        </nav>

        <div>
          <img src="/dashboard/user-icon.svg" alt="" width={40} />
          Bienvenido <span>Administrador</span>
        </div>
      </div>
      {children}
    </>
  );
}

function TableLink({ href, title }) {
  return (
    <li>
      <Link href={href}>
        <img src="/dashboard/section-icon.svg" alt="" width={20} />
        {title}
      </Link>
    </li>
  );
}
