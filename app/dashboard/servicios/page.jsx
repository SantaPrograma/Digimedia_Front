import Table from '../components/Table';

const headers = ['id', 'nombre'];

const data = [];

export default function Page() {
  return (
    <main className="p-4 overflow-scroll flex-1">
      <h2 className="text-4xl font-bold mb-4">Servicios</h2>
      <Table headers={headers} data={data} />
    </main>
  );
}
