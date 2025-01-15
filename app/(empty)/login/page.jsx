'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === 'admin' && formData.password === '1234') {
      router.push('/dashboard');
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sección izquierda con fondo degradado */}
      <div className="w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <Image src="/login/sesion.png" alt="Inicio de sesión" width={300} height={300} />
      </div>

      {/* Sección derecha con el formulario */}
      <div className="w-1/2 bg-gray-100 flex flex-col items-center justify-center relative">
        {/* Botón regresar */}
        <a href="/" className="absolute top-4 right-4">
          <button className="flex items-center gap-2 bg-gray-200 p-2 rounded hover:bg-gray-300 shadow">
            <img src="/login/salida.png" alt="icono" className="w-6 h-6" />
            Regresar
          </button>
        </a>

        {/* Formulario */}
        <div className="bg-white p-10 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>
          {error && <p className="text-red-500 mb-4 text-center">Usuario o contraseña incorrectos.</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Usuario:
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition"
              >
                INICIAR SESIÓN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
