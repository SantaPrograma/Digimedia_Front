'use client';

import { useState, useEffect, useRef } from 'react';

export default function ModalClick({ text, fondo, title, serviceName }) {
  const modalRef = useRef(null);

  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setEmail] = useState('');

  const hideModal = () => {
    modalRef.current.classList.add('hidden');
  };

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target.id === 'modal-button') {
        modalRef.current.classList.remove('hidden');
      }
    });
  }, []);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto con los datos a enviar
    const data = {
      nombre,
      telefono,
      correo,
      servicio_id: serviceName,
    };

    // Enviar los datos al backend usando fetch
    fetch('https://back.digimediamkt.com/api/modal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Formulario enviado exitosamente:', data);
        hideModal();
      })
      .catch((error) => {
        console.error('Error al enviar el formulario:', error);
      });
  };

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
        className="bg-black flex relative text-white rounded-2xl overflow-hidden bg-gradient-to-bl from-[#B721FF] to-[#21D4FD] p-8 gap-8"
      >
        <button onClick={hideModal} className="absolute top-4 right-4">
          X
        </button>
        <div>
          <p className="font-bold text-2xl text-center mb-4 max-w-sm">
            {title}
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              label="Nombre"
              type="text"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <Input
              label="Teléfono"
              type="text"
              name="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <Input
              label="Correo"
              type="email"
              name="correo"
              value={correo}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-[#a121fd] font-bold p-4 rounded-lg" type="submit">
              ¡EMPIEZA YA!
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <img className="max-w-60 max-h-52 w-auto" src={fondo} alt="" />
          <p className="font-medium max-w-48 text-center">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Input({ label, type, name, value, onChange }) {
  return (
    <div className="flex gap-2 justify-between items-center">
      <label className="font-semibold shrink-0 basis-20" htmlFor={name}>
        {label}
      </label>
      <input
        className="p-2 rounded-md h-12 grow text-black"
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
