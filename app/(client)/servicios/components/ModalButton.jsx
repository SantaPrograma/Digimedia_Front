'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function ModalClick({ text, fondo, title }) {
  const modalRef = useRef(null);

  const hideModal = () => {
    modalRef.current.classList.add('hidden');
  };

  return (
    <div
      ref={modalRef}
      onClick={hideModal}
      className="bg-[rgb(0,0,0,0.5)] w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-50 "
    >
      <div className="bg-black flex relative text-white rounded-2xl overflow-hidden bg-gradient-to-bl from-[#B721FF] to-[#21D4FD] p-8 gap-8">
        <button onClick={hideModal} className="absolute top-4 right-4">
          X
        </button>
        <div>
          <p className="font-bold text-2xl text-center mb-4 max-w-sm">
            {title}
          </p>
          <form className="flex flex-col gap-4">
            <Input label="Nombre" type="text" name="name" />
            <Input label="Teléfono" type="text" name="phone" />
            <Input label="Correo" type="email" name="email" />
            <button className="bg-[#a121fd] font-bold p-4 rounded-lg">
              ¡EMPIEZA YA!
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <Image src={fondo} alt="" />
          <p className="font-medium max-w-48 text-center">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Input({ label, type, name }) {
  return (
    <div className="flex gap-2 justify-between items-center">
      <label className="font-semibold shrink-0 basis-20" htmlFor={name}>
        {label}
      </label>
      <input
        className="p-2 rounded-md h-12 grow"
        id={name}
        name={name}
        type={type}
      />
    </div>
  );
}
