import React from "react";

function C132({ heading, columns, rows }) {
  return (
    <section className="container">
      <div className="content-text">
        <h2 align="center">
          <b>
            <u>{heading}</u>
          </b>
        </h2>

        <table align="center" border="1px solid black">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <td key={i} align="center">
                  {col}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) =>
              row.links.map((link, j) => (
                <tr key={`${i}-${j}`}>
                  {j === 0 && (
                    <>
                      <td rowSpan={row.links.length} align="right">
                        {row.sno}
                      </td>
                      <td rowSpan={row.links.length}>{row.title}</td>
                    </>
                  )}
                  <td>
                    {link.href ? (
                      <a href={link.href}>{link.name}</a>
                    ) : (
                      link.name
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default C132;
