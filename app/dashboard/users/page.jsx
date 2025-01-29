"use client"

import { useSearchParams } from 'next/navigation';
import Pagination from '../components/Pagination';
import Table from '../components/Table';
import { useEffect, useState } from 'react';

const headers = ['id', 'name', 'email', 'created_at'];

export default function Page() {

  const searchParams = useSearchParams()
  const currentPage = searchParams.get('page') || 1
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  async function setProducts(page) {

    await fetch(`http://127.0.0.1:8000/api/user?page=${page}`, {
      method: "GET"
    }).then(data => data.json()).then(data => {

      if (parseInt(data.status) == 200) {

        if (data.total > 0) {

          data.data.map(data => {
            
          })

          setData(data.data)
          setCount(data.total)
        }

      } else {
        setError(true);
        setLoading(false)
      }
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
  }, [currentPage]) // Re-ejecutar cuando cambia la query

  return (
    <main className="p-4 overflow-scroll flex flex-col w-full h-[100vh] flex-1">
      <h2 className="text-4xl font-bold mb-4">Usuarios</h2>
      <button className='bg-blue-600 text-white p-2 rounded-md mb-4 font-bold'> Crear </button>
      <Table headers={headers} data={data} />
      <Pagination count={count} />
    </main>
  );
}
