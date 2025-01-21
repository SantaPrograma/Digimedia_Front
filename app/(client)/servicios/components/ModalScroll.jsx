'use client';

import { useEffect, useRef } from 'react';

import Image from 'next/image';

import logo from '@/public/servicios/logo-modal.webp';

export default function ModalScroll({ text, fondo, title }) {
  const modalRef = useRef(null);

  const hideModal = () => {
    modalRef.current.classList.add('hidden');
  };

  let displayed = false;

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (!displayed) {
        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight
        ) {
          modalRef.current.classList.remove('hidden');
          displayed = true;
        }
      }
    });
  }, []);

  return (
    <div
      ref={modalRef}
      onClick={hideModal}
      className="bg-[rgb(0,0,0,0.5)] w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-50 hidden"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-black flex relative text-white rounded-2xl overflow-hidden"
      >
        <button onClick={hideModal} className="absolute top-4 right-4">
          X
        </button>
        <div className="relative w-64 overflow-hidden flex justify-center">
          <Image
            className="w-auto max-w-none max-h-[540px]"
            src={fondo}
            alt=""
          />
          <Image className="absolute top-4 left-4" src={logo} alt="" />
          <p className="absolute bottom-10 right-6 text-3xl font-semibold text-right">
            {text}
          </p>
        </div>
        <div className="p-8 flex flex-col justify-between w-96 gap-8 bg-gradient-to-b from-[#0095ff] to-[#ff037f]">
          <p className="text-3xl text-center font-bold">{title}</p>
          <form className="flex flex-col gap-4">
            <Input label="Nombre" type="text" name="name" />
            <Input label="Teléfono" type="text" name="phone" />
            <Input label="Correo" type="email" name="email" />
            <button className="bg-[#0095ff] p-2 text-2xl font-bold rounded-2xl mt-4">
              HAZLO YA
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Input({ label, type, name }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        className="p-2 rounded-md text-black"
        id={name}
        name={name}
        type={type}
      />
    </div>
  );
}
