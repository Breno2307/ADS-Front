function Table({ columns, data, renderRow, className = '' }) {
  return (
    <table className={className}>
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {renderRow(item)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
