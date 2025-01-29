"use client"

import { useSearchParams } from 'next/navigation';
import Pagination from '../components/Pagination';
import Table from '../components/Table';
import { useEffect, useState } from 'react';

const headers = ['id', 'nombre', 'usuario', 'rol'];

const users = [
  {
    id: 1,
    nombre: 'Jorge Mandieta',
    usuario: 'Admin',
    rol: 'Administrador',
  },
  {
    id: 2,
    nombre: 'JUAN CARLOS',
    usuario: 'Admin',
    rol: 'Administrador',
  },
  {
    id: 3,
    nombre: 'María López',
    usuario: 'mlopez',
    rol: 'Usuario',
  },
  {
    id: 4,
    nombre: 'Pedro García',
    usuario: 'pgarcia',
    rol: 'Moderador',
  },
  {
    id: 5,
    nombre: 'Ana Fernández',
    usuario: 'afernandez',
    rol: 'Usuario',
  },
  {
    id: 6,
    nombre: 'Carlos Rodríguez',
    usuario: 'crodriguez',
    rol: 'Administrador',
  },
  {
    id: 7,
    nombre: 'Sofía Méndez',
    usuario: 'smendez',
    rol: 'Usuario',
  },
  {
    id: 8,
    nombre: 'Luis Castillo',
    usuario: 'lcastillo',
    rol: 'Usuario',
  },
  {
    id: 9,
    nombre: 'Elena Ríos',
    usuario: 'erios',
    rol: 'Moderador',
  },
  {
    id: 10,
    nombre: 'Martín Salazar',
    usuario: 'msalazar',
    rol: 'Usuario',
  },
  {
    id: 11,
    nombre: 'Paula Herrera',
    usuario: 'pherrera',
    rol: 'Usuario',
  },
  {
    id: 12,
    nombre: 'Fernando Gutiérrez',
    usuario: 'fgutierrez',
    rol: 'Administrador',
  },
  {
    id: 13,
    nombre: 'Valeria Vargas',
    usuario: 'vvargas',
    rol: 'Usuario',
  },
  {
    id: 14,
    nombre: 'Ricardo Morales',
    usuario: 'rmorales',
    rol: 'Moderador',
  },
  {
    id: 15,
    nombre: 'Gabriela Silva',
    usuario: 'gsilva',
    rol: 'Usuario',
  },
  {
    id: 16,
    nombre: 'Alejandro Paredes',
    usuario: 'aparedes',
    rol: 'Usuario',
  },
  {
    id: 17,
    nombre: 'Mónica Torres',
    usuario: 'mtorres',
    rol: 'Usuario',
  },
  {
    id: 18,
    nombre: 'Cristian Vera',
    usuario: 'cvera',
    rol: 'Moderador',
  },
  {
    id: 19,
    nombre: 'Beatriz Ramírez',
    usuario: 'bramirez',
    rol: 'Usuario',
  },
  {
    id: 20,
    nombre: 'Diego Navarro',
    usuario: 'dnavarro',
    rol: 'Administrador',
  },
  {
    id: 21,
    nombre: 'Lucía Soto',
    usuario: 'lsoto',
    rol: 'Usuario',
  },
  {
    id: 22,
    nombre: 'Esteban Arias',
    usuario: 'earias',
    rol: 'Moderador',
  }
];


export default function Page() {

  const searchParams = useSearchParams()
  const currentPage = searchParams.get('page') || 1
  const [data, setData] = useState(users)
  function setProducts(page) {
    setData(users.slice((page - 1)*20), (page) + 20)
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
      <h2 className="text-4xl font-bold mb-4">Usuarios</h2>
      <Table headers={headers} data={data} />
      <Pagination count={users.length} />
    </main>
  );
}
