import Table from '../components/Table';

const headers = ['id', 'nombre', 'telefono', 'email', 'servicio'];

const data = [];

export default function Page() {
  return (
    <main className="p-4 overflow-scroll flex-1">
      <h2 className="text-4xl font-bold mb-4">Modales</h2>
      <Table headers={headers} data={data} />
    </main>
  );
}
