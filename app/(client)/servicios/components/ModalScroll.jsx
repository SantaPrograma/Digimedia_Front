import Image from 'next/image';

import logo from '@/public/servicios/logo-modal.webp';

export default function ModalScroll({ text, fondo, title }) {
  return (
    <div className="bg-[rgb(0,0,0,0.5)] w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-50">
      <div className="bg-white">
        <button>X</button>
        <div>
          <Image src={fondo} alt="" />
          <Image src={logo} alt="" />
          <p>{text}</p>
        </div>
        <div>
          <p>{title}</p>
          <form>
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" />
            <label htmlFor="phone">Teléfono</label>
            <input id="phone" type="text" />
            <label htmlFor="email">Correo</label>
            <input id="email" type="email" />
            <button>HAZLO YA</button>
          </form>
        </div>
      </div>
    </div>
  );
}
