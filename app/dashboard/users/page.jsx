import Table from '../components/Table';

const headers = ['id', 'nombre', 'usuario', 'rol'];

const data = [
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
];

export default function Page() {
  return (
    <main className="p-4 overflow-scroll flex-1">
      <h2 className="text-4xl font-bold mb-4">Usuarios</h2>
      <Table headers={headers} data={data} />
    </main>
  );
}
