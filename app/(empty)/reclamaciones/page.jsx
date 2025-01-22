import './reclamaciones.css';
import Image from "next/image";
import logoLegales from "@/public/headerFooter/logoFooter.webp";
import React from 'react';

const ComplaintForm = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#6f4be8] flex justify-center items-center">
        <img src="/headerFooter/logoFooter.webp" alt="Digimedia" className="my-10 w-40 h-auto" />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">Libro de Reclamaciones</h1>
          <p className="text-sm text-gray-600 mb-2">
            Conforme está establecido en el Código de Protección y Defensa del Consumidor contamos con un Libro de Reclamaciones Virtual a tu disposición DigiMedia.com
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Debes de tener en cuenta que tus reclamos conforme a ley deben ser resueltos en un plazo no mayor a 30 días, pudiendo extenderse el plazo cuando la naturaleza del reclamo lo acredite. Art. 24.1 Ley 29571.
          </p>
          <p className="text-sm font-semibold mb-4">
            Razón Social: DIGIMEDIA MARKETING S.A.C. RUC: 20605116559
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-center mb-6">Cuestionario de quejas</h2>
          
          <form className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Datos Personales:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="w-full p-2 border rounded" />
                <input type="text" placeholder="Apellido" className="w-full p-2 border rounded" />
                <select className="w-full p-2 border rounded">
                  <option value="">Seleccionar una opcion</option>
                  <option value="">DNI</option>
                  <option value="">RUC</option>
                  <option value="">CE</option>
                  <option value="">PTP</option>
                  <option value="">OTROS...</option>
                </select>
                <input type="text" placeholder="Documento" className="w-full p-2 border rounded" />
                <input type="email" placeholder="Correo Electronico" className="w-full p-2 border rounded" />
                <input type="tel" placeholder="Celular" className="w-full p-2 border rounded" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" placeholder="Direccion" className="w-full p-2 border rounded" />
                <input type="text" placeholder="Distrito" className="w-full p-2 border rounded" />
                <input type="text" placeholder="Ciudad" className="w-full p-2 border rounded" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Datos de incidente:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full p-2 border rounded">
                  <option value="">Seleccionar tipo de reclamo</option>
                  <option value="">QUEJA</option>
                  <option value="">RECLAMO</option>
                </select>
                <select className="w-full p-2 border rounded">
                  <option value="">Seleccionar servicio contratado</option>
                  <option value="">TECHNOLOGY</option>
                  <option value="">OTROS</option>
                </select>
              </div>
              <textarea 
                placeholder="Indicar incidente" 
                className="w-full p-2 border rounded h-32"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <p className="text-sm">Soy consciente que la formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI. *El proveedor deberá dar respuesta al reclamo en un plazo no mayor a treinta (30) días calendario, pudiendo ampliar el plazo hasta por treinta (30) días más, previa comunicación al consumidor.</p>
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" />
                <p className="text-sm">Acepto las políticas de privacidad</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button type="button" className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                Borras Datos
              </button>
              <button type="submit" className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;