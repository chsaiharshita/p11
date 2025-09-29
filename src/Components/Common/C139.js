function C139({ heading, columns, rows }) {
  let snoCounter = 1;
  let totalRowIndex = 0; // counts every actual row for alternation

  return (
    <section className="container">
      <div className="content-text">
        {heading && (
          <h2 align="center">
            <b><u>{heading}</u></b>
          </h2>
        )}

        <table className="table-wrapper">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i} align="center">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) =>
              row.links.map((link, j) => {
                const rowClass = totalRowIndex % 2 === 0 ? "group-odd" : "group-even";
                totalRowIndex++; // increment per row

                return (
                  <tr key={`${i}-${j}`} className={rowClass}>
                    {/* Serial number */}
                    <td align="center">{snoCounter++}</td>

                    {/* Rowspan for first link */}
                    {j === 0 && (
                      <td rowSpan={row.links.length} className={rowClass} align="center">
                        {row.title}
                      </td>
                    )}

                    {/* Remaining columns */}
                    {columns.slice(2).map((col, k) => {
                      const key = col.toLowerCase().replace(/\s+/g, "");
                      return <td key={k}>{link[key] || ""}</td>;
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default C139;