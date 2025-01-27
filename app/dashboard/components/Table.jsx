export default function Table({ headers, data }) {
  const headersList = headers.map((header) => {
    return <th>{header.toUpperCase()}</th>;
  });

  const dataList = data.map((dataRow) => {
    const row = [];

    for (let i = 0; i < headers.length; i++) {
      row.push(<td>{dataRow[headers[i]]}</td>);
    }
    row.push(
      <td>
        <button>Eliminar</button>
        <button>Editar</button>
      </td>
    );

    return <tr key={dataRow.id}>{row}</tr>;
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
