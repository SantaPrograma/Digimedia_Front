import { useState } from 'react'

export default function FormModal({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    servicio_id: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl font-bold mb-4">Nuevo Servicio</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full mb-2 p-2 border rounded"
            value={formData.nombre}
            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full mb-2 p-2 border rounded"
            value={formData.telefono}
            onChange={(e) => setFormData({...formData, telefono: e.target.value})}
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-full mb-2 p-2 border rounded"
            value={formData.correo}
            onChange={(e) => setFormData({...formData, correo: e.target.value})}
          />
          <input
            type="number"
            placeholder="ID Servicio"
            className="w-full mb-4 p-2 border rounded"
            value={formData.servicio_id}
            onChange={(e) => setFormData({...formData, servicio_id: e.target.value})}
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}