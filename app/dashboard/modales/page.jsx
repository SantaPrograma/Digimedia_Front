"use client"

import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import Table from '../components/Table';
//import Pagination from './componentes-modales/Pagination-modales';
import { useSearchParams } from 'next/navigation';



const headers = ['id', 'nombre', 'telefono', 'email', 'servicio', 'acciones'];

export default function Page() {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') || 1;
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);

  // Función para obtener los datos paginados
  const fetchData = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(`http://127.0.0.1:8000/api/modal?page=${page}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      setData(result.data);
      setTotalItems(result.pagination.totalItems);
    } catch (error) {
      console.error('Error en fetchData:', error.message);
    } finally {
      setLoading(false);
    }


  };

  // Función para eliminar un registro por ID
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/modal/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchData(currentPage);
        console.log('Registro eliminado exitosamente');
      } else {
        const result = await response.json();
        console.error('Error al eliminar el registro:', result.message);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  // Efecto para cargar los datos cuando cambia la página
  useEffect(() => {
    const page = isNaN(currentPage) ? 1 : parseInt(currentPage);
    console.log('Fetching data for page:', page); // Depuración
    fetchData(page);
  }, [currentPage]);

  return (
    <main className="p-4 overflow-scroll flex flex-col w-full h-[100vh] flex-1">
      <h2 className="text-4xl font-bold mb-4">Modales</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <Table
            onDelete={handleDelete}
            onUpdate={false}
            headers={headers}
            data={data}
          />
          <Pagination
            count={totalItems} // 20 es el límite de elementos por página
          />
        </>
      )}
    </main>
  );
}