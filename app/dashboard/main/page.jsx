import Table from '../components/Table';

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
const data = [
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
];

export default function Page() {
  return (
    <main className="p-4 overflow-scroll flex-1">
      <h2 className="text-4xl font-bold mb-4">Sección principal</h2>
      <Table headers={headers} data={data} />
    </main>
  );
}
