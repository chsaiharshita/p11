// src/Components/Common/TableComponent.js
import React from "react";

function TableComponent({ content }) {
  return (
    <div>
      <h5>{content.header}</h5>
      {content.p && <p>{content.p}</p>}

      <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer">
        <thead>
          <tr>
            <th style={{ width: "5%" }}>{content.Serial}</th>
            <th style={{ width: "65%" }}>{content.Trainingwing}</th>
            <th style={{ width: "30%" }}>{content.Contact}</th>
          </tr>
        </thead>
        <tbody id="customer">
          {content.paragraph?.map((details, index) => (
            <tr id="text_align" key={index}>
              <td>{details.Serial}</td>
              <td style={{ textAlign: "left", paddingLeft: "10px" }}>
                {details.Trainingwing}
              </td>
              <td>
                <a href={details.link} target="_blank" rel="noreferrer">
                  View
                  <i className="fa fa-download pdf-download" aria-hidden="true"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
