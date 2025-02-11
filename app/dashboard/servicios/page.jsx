"use client"

import { useSearchParams } from 'next/navigation';
import Pagination from '../components/Pagination';
import Table from '../components/Table';
import FormModal from '../components/FormModal';
import EditFormModal from '../components/EditFormModal';
import { useEffect, useState } from 'react';
import { getCookie } from "cookies-next";
import user_service from '../users/services/user.service';
import { useRouter } from 'next/navigation';

const headers = ['id', 'nombre'];

export default function Page() {
  const searchParams = useSearchParams()
  const currentPage = searchParams.get('page') || 1
  // const API_URL = "https://back.digimediamkt.com/api/servicios";
  const API_URL = "http://127.0.0.1:8000/api/servicios"
  const router = useRouter()
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [currentService, setCurrentService] = useState(null)

  async function setProducts(page) {

    setLoading(true)
    await fetch(`${API_URL}?page=${page}`, {
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      }
    }).then((data) => {
      if (data.status == 500) {
        user_service.logoutClient(router);
      } else {
        return data.json()
      }
    }).then(data => {

      setData(data.data)
      setCount(data.total || data.data.length)
      setError(false)

    }).catch(err => {
      setError(true)

    }).finally(() => {
      setLoading(false)
    })

  }

  useEffect(() => {
    const fetchProducts = async () => {
      if (isNaN(currentPage)) {
        await setProducts(1)
        return
      }
      await setProducts(parseInt(currentPage))
    }
    fetchProducts()
  }, [currentPage])

  const handleCreate = async (formData) => {
    await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "authorization": `Bearer ${getCookie('token')}`
      },
      body: JSON.stringify(formData)
    }).then((data) => {
      if (data.status == 500) {
        user_service.logoutClient(router);
      } else {
        return data.json()
      }
    }).then(async data => {
      setShowModal(false)
      await setProducts(currentPage)
    }).catch(err => {
      console.error('Error:', error)
    })
  }

  const handleUpdate = async (id, formData) => {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "authorization": `Bearer ${getCookie('token')}`
      },
      body: JSON.stringify(formData)
    }).then((data) => {
      if (data.status == 500) {
        user_service.logoutClient(router);
      } else {
        return data.json()
      }
    }).then(async data => {
      setShowEditModal(false)
      await setProducts(currentPage)
    }).catch(err => {
      console.error('Error al actualizar el servicio:', error)
    })

  }

  const handleDelete = async (id) => {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este servicio?')
    if (!confirmDelete) return

    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      }
    }).then((data) => {
      if (data.status == 500) {
        user_service.logoutClient(router);
      } else {
        return data.json()
      }
    }).then(async data => {
      await setProducts(currentPage)
    }).catch(err => {
      console.error('Error al eliminar el servicio:', error)
    })

  }

  return (
    <main className="p-4 overflow-scroll flex flex-col w-full h-[100vh] flex-1">
      <h2 className="text-4xl font-bold mb-4">Servicios</h2>
      <button
        className='bg-blue-600 text-white p-2 rounded-md mb-4 font-bold'
        onClick={() => {
          setCurrentService(null)
          setShowModal(true)
        }}
      >
        Crear
      </button>

      {loading ? (
        <div className="text-center">Cargando...</div>
      ) : error ? (
        <div className="text-red-500">Error al cargar los datos</div>
      ) : (
        <>
          <Table
            headers={headers}
            data={data}
            onDelete={handleDelete}
            onUpdate={(id) => {
              const service = data.find(item => item.id === id)
              setCurrentService(service)
              setShowEditModal(true)
            }}
          />
          <Pagination count={count} />
        </>
      )}

      {showModal && (
        <FormModal
          onClose={() => setShowModal(false)}
          onSubmit={handleCreate}
        />
      )}

      {showEditModal && (
        <EditFormModal
          onClose={() => setShowEditModal(false)}
          onSubmit={(formData) => handleUpdate(currentService.id, formData)}
          initialData={currentService}
        />
      )}
    </main>
  );
}