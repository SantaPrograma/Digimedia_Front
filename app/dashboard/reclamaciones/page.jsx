import Table from '../components/Table';

const headers = [
  'id',
  'nombre',
  'apellido',
  'documento',
  'numero de documento',
  'email',
  'celular',
  'direccion',
  'distrito',
  'ciudad',
  'tipo de reclamacion',
  'servicio contratado',
  'reclamo persona',
  'aceptar terminos 1',
  'aceptar terminos 2',
];

const data = [];

export default function Page() {
  return (
    <main className="p-4 overflow-scroll flex-1">
      <h2 className="text-4xl font-bold mb-4">Usuarios</h2>
      <Table headers={headers} data={data} />
    </main>
  );
}
