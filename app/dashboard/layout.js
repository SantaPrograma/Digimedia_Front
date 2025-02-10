'use client';
import '../globals.css';
import Link from 'next/link';
import AuthGuard from './components/AuthGuard';
import { useRouter } from 'next/navigation';
import { deleteCookie, getCookie } from 'cookies-next';
import Image from 'next/image';

export default function RootLayout({ children }) {
  const router = useRouter();

  const handleLogout = async () => {

    await fetch("https://back.digimediamkt.com/api/logout", {
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      },
    }).then(data => data.json() ?? false).then(data => {
      deleteCookie('token');
      router.push('/login');
    })

  };
  return (
    <AuthGuard>
      <div className="flex bg-[#f9f9f9] w-[100vw] overflow-hidden">
        <div className="flex flex-col shrink-0 p-2 bg-white h-screen">
          <div className="flex gap-2 items-center justify-center my-10">
            <img src="/dashboard/main-icon.svg" alt="" width={40} />
            <h1 className="text-2xl font-bold">Digimedia</h1>
          </div>

          <button
            onClick={handleLogout}
            className="flex gap-2 bg-black text-white px-4 py-3 rounded-lg justify-center mb-5"
          >
            <Image
              src="/dashboard/logout-icon.svg"
              alt="Logout icon"
              width={20}
              height={20}
            />
            Cerrar sesión
          </button>

          <nav>
            <ul className="flex flex-col gap-1">
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

          <div className="flex mt-auto gap-2 items-center">
            <img src="/dashboard/user-icon.svg" alt="" width={40} />
            <p className="font-bold">
              Bienvenido
              <span className="font-normal block">Administrador</span>
            </p>
          </div>
        </div>
        {children}
      </div>
    </AuthGuard>
  );
}

function TableLink({ href, title }) {
  return (
    <li>
      <Link
        href={href}
        className="flex gap-2 items-center rounded-lg hover:bg-[#eee] px-4 py-3"
      >
        <img src="/dashboard/section-icon.svg" alt="" width={20} />
        {title}
      </Link>
    </li>
  );
}
