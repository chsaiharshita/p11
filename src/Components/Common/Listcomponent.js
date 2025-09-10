// src/Components/Common/ListComponent.js
import React from "react";
import "./style.css";

function ListComponent({ content }) {
  if (!content) return null;

  return (
    <div className="list-wrapper mb-4">
      {/* Heading */}
      {content.heading && <h3 className="main-heading">{content.heading}</h3>}

      {/* Subheading */}
      {content.p && content.p.trim() !== "" && (
        <h5 className="sub-heading">{content.p}</h5>
      )}

      {/* Small Header */}
      {content.header && content.header.trim() !== "" && (
        <h5 className="small-header">{content.header}</h5>
      )}

      {/* List Items */}
      {content.content?.map((item, index) => (
        <div key={index} className="list-item">
          <i className="fa fa-hand-o-right m-1 px-2"></i>
          <a
            href={item.link}
            className="font-weight-normal p-1"
            target="_blank"
            rel="noreferrer"
          >
            {item.description}
          </a>
        </div>
      ))}
    </div>
  );
}

export default ListComponent;
