'use client';

import { useState } from 'react';
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
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sección izquierda con fondo degradado */}
      <div className="lg:w-1/2 w-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center p-6 lg:p-0">
        <img
          src="/login/sesion.png"
          alt="Inicio de sesión"
          width={300}
          height={300}
          className="w-full max-w-[200px] lg:max-w-[300px] h-auto"
        />
      </div>

      {/* Sección derecha con el formulario */}
      <div className="lg:w-1/2 w-full bg-gray-100 flex flex-col items-center justify-center relative p-6">
        {/* Botón regresar */}
        <a href="/" className="absolute top-4 right-4">
          <button className="flex items-center gap-2 bg-gray-200 p-2 rounded hover:bg-gray-300 shadow text-sm">
            <img src="/login/salida.png" alt="icono" className="w-4 h-4 lg:w-6 lg:h-6" />
            Regresar
          </button>
        </a>

        {/* Formulario */}
        <div className="bg-white p-6 lg:p-10 rounded-lg shadow-lg w-full max-w-md">
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
