'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir que se recargue la página
    setLoading(true);
    setError(false);

    const form = new FormData()
    form.append("email", formData.email)
    form.append("password", formData.password)

    await fetch("http://127.0.0.1:8000/api/user/login", {
      method: "POST",
      body: form
    }).then(data => data.json()).then(data => {
      console.log(data);
      if (parseInt(data.status) == 200) {

        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.data))
        router.push("/dashboard")

      } else{
        setError(true);
        setLoading(false)
      }
    })

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
                Email:
              </label>
              <input
                type="text"
                id="email"
                className="w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500"
                value={formData.email}
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
                disabled={loading}
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
