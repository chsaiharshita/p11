import React from "react";
import "./Style.css";

function C131({ content }) {
  if (!content) return null;

  // Extract dynamic table headers (except header, p, paragraph)
  const headers = Object.keys(content).filter(
    (key) => !["header", "p", "paragraph"].includes(key)
  );

  return (
    <div className="table-wrapper mb-4">
      {/* Heading (red, bold) */}
      {content.header && (
        <h3>
          {content.header}
        </h3>
      )}

      {/* Paragraph / description (normal) */}
      {content.p && <p >{content.p}</p>}

      {/* Table render only if paragraph exists */}
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
            {content.paragraph?.map((row, rowIndex) => (
              <tr id="text_align" key={rowIndex}>
                {headers.map((head, colIndex) => (
                  <td key={colIndex} style={{ paddingLeft: "10px" }}>
                    {head.toLowerCase() === "contact" ||
                    head.toLowerCase() === "file" ? (
                      <a href={row["link"]} target="_blank" rel="noreferrer">
                        View{" "}
                        <i
                          className="fa fa-download pdf-download"
                          aria-hidden="true"
                        ></i>
                      </a>
                    ) : (
                      row[head]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default C131;
