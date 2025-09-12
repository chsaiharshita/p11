// src/Components/Common/TableComponent.js
import React from "react";
import "./styles.css";

function TableComponent1({ content }) {
  if (!content) return null;

  // Dynamic table headers (ignore these keys)
  const headers = Object.keys(content).filter(
    (key) => !["heading", "header", "p", "paragraph"].includes(key)
  );

  return (
    <div className="table-wrapper mb-4">
      {/* Big main heading */}
      {content.heading && (
        <h3 className="main-heading m-2">{content.heading}</h3>
      )}

      {/* Sub heading */}
      {content.header && (
        <h5 className="sub-heading mb-2">{content.header}</h5>
      )}

      {/* Paragraph / description */}
      {content.p && <p className="mb-3">{content.p}</p>}

      {/* Table */}
      {content.paragraph?.length > 0 && (
        <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer">
          <thead>
            <tr>
              {headers.map((head, index) => (
                <th key={index}>{content[head]}</th>
              ))}
            </tr>
          </thead>
          <tbody id="customer">
            {content.paragraph.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((head, colIndex) => (
                  <td key={colIndex}>{row[head]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableComponent1;
