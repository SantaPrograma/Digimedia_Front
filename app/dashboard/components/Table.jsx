export default function Table({ headers, data }) {
  const headersList = headers.map((header) => {
    return <th className="p-2">{header.toUpperCase()}</th>;
  });

  const dataList = data.map((dataRow) => {
    const row = [];

    for (let i = 0; i < headers.length; i++) {
      row.push(<td className="p-2">{dataRow[headers[i]]}</td>);
    }
    row.push(
      <td>
        <button className="bg-[#dc3545] text-white rounded-md px-3 py-2 m-2">
          Eliminar
        </button>
        <button className="bg-[#ffc107] rounded-md px-3 py-2 m-2">
          Editar
        </button>
      </td>
    );

    return (
      <tr key={dataRow.id} className="odd:bg-[#f2f2f2]">
        {row}
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          {headersList}
          <th>OPCIONES</th>
        </tr>
      </thead>
      <tbody>{dataList}</tbody>
    </table>
  );
}
