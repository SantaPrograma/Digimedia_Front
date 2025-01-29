"use client"

import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import Table from '../components/Table';
import { useSearchParams } from 'next/navigation'

const headers = [
  'id',
  'nombre',
  'email',
  'servicio',
  'numero',
  'mensaje',
  'email mark',
  'new',
  'production',
  'fecha',
  'hora',
  'estado',
];

// Data temporal
const dataTest = [
  {
    id: 178,
    nombre: 'Juan',
    email: 'diegogabrielcentenofalcon7@gmail.com',
    servicio: 'Desing y desarrollo web',
    numero: '946595031',
    mensaje: '..........',
    'email mark': 'no',
    new: 'no',
    production: 'no',
    fecha: '2024-07-29 20:04:48',
    hora: '2025-01-17 14:48:51',
    estado: 'Atendido',
  },
  {
    id: 179,
    nombre: 'fawert',
    email: 'diegogabrielcentenofalcon7@gmail.com',
    servicio: 'Gestion de redes sociales',
    numero: '987654321',
    mensaje: 'sdfsdfsdf',
    'email mark': 'no',
    new: 'no',
    production: 'no',
    fecha: '2024-07-29 20:15:27',
    hora: '2024-07-29 20:15:27',
    estado: 'pendiente',
  },
  {
    id: 119,
    nombre: 'fawert',
    email: 'diegogabrielcentenofalcon7@gmail.com',
    servicio: 'Gestion de redes sociales',
    numero: '987654321',
    mensaje: 'sdfsdfsdf',
    'email mark': 'no',
    new: 'no',
    production: 'no',
    fecha: '2024-07-29 20:15:27',
    hora: '2024-07-29 20:15:27',
    estado: 'pendiente',
  },
  {
    id: 129,
    nombre: 'fawert',
    email: 'diegogabrielcentenofalcon7@gmail.com',
    servicio: 'Gestion de redes sociales',
    numero: '987654321',
    mensaje: 'sdfsdfsdf',
    'email mark': 'no',
    new: 'no',
    production: 'no',
    fecha: '2024-07-29 20:15:27',
    hora: '2024-07-29 20:15:27',
    estado: 'pendiente',
  },
  {
    id: 379,
    nombre: 'fawert',
    email: 'diegogabrielcentenofalcon7@gmail.com',
    servicio: 'Gestion de redes sociales',
    numero: '987654321',
    mensaje: 'sdfsdfsdf',
    'email mark': 'no',
    new: 'no',
    production: 'no',
    fecha: '2024-07-29 20:15:27',
    hora: '2024-07-29 20:15:27',
    estado: 'pendiente',
  },
  {
    id: 159,
    nombre: 'fawert',
    email: 'diegogabrielcentenofalcon7@gmail.com',
    servicio: 'Gestion de redes sociales',
    numero: '987654321',
    mensaje: 'sdfsdfsdf',
    'email mark': 'no',
    new: 'no',
    production: 'no',
    fecha: '2024-07-29 20:15:27',
    hora: '2024-07-29 20:15:27',
    estado: 'pendiente',
  },
  {
    id: 169,
    nombre: 'fawert',
    email: 'diegogabrielcentenofalcon7@gmail.com',
    servicio: 'Gestion de redes sociales',
    numero: '987654321',
    mensaje: 'sdfsdfsdf',
    'email mark': 'no',
    new: 'no',
    production: 'no',
    fecha: '2024-07-29 20:15:27',
    hora: '2024-07-29 20:15:27',
    estado: 'pendiente',
  },
  {
    id: 1779,
    nombre: 'fawert',
    email: 'diegogabrielcentenofalcon7@gmail.com',
    servicio: 'Gestion de redes sociales',
    numero: '987654321',
    mensaje: 'sdfsdfsdf',
    'email mark': 'no',
    new: 'no',
    production: 'no',
    fecha: '2024-07-29 20:15:27',
    hora: '2024-07-29 20:15:27',
    estado: 'pendiente',
  },
  {
    id: 1579,
    nombre: 'fawert',
    email: 'diegogabrielcentenofalcon7@gmail.com',
    servicio: 'Gestion de redes sociales',
    numero: '987654321',
    mensaje: 'sdfsdfsdf',
    'email mark': 'no',
    new: 'no',
    production: 'no',
    fecha: '2024-07-29 20:15:27',
    hora: '2024-07-29 20:15:27',
    estado: 'pendiente',
  },
  {
    id: 1769,
    nombre: 'fawert',
    email: 'diegogabrielcentenofalcon7@gmail.com',
    servicio: 'Gestion de redes sociales',
    numero: '987654321',
    mensaje: 'sdfsdfsdf',
    'email mark': 'no',
    new: 'no',
    production: 'no',
    fecha: '2024-07-29 20:15:27',
    hora: '2024-07-29 20:15:27',
    estado: 'pendiente',
  },
];

export default function Page() {
  
  const searchParams = useSearchParams()
  const currentPage = searchParams.get('page') || 1
  const [data, setData] = useState(dataTest)
  function setProducts(page) {
    //aqui va el fetch
  }

  useEffect(() => {
    
    const fetchProducts = async () => {
      if (isNaN(currentPage)) {
        setProducts(1)
        return
      }
      
      setProducts(parseInt(currentPage))
    }

    fetchProducts()
  }, [currentPage]) // Re-ejecutar cuando cambia la query

  return (
    <main className="p-4 overflow-scroll flex flex-col w-full h-[100vh] flex-1">
      <h2 className="text-4xl font-bold mb-4">Sección principal</h2>
      <Table headers={headers} data={data} />
      <Pagination count={data.length} />
    </main>
  );
}
