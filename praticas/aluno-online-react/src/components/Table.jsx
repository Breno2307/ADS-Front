function Table({ columns, data, renderRow, className = "" }) {
  return (
    <table className={className}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>{renderRow(item)}</tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;