// src/Components/Common/ListComponent.js
import React from "react";
import { Link } from "react-router-dom";  // ✅ Import Link
import "./C125.css";

function C125({ content }) {
  if (!content) return null;

  return (
    <div className="list-wrapper mb-4">
      {/* Heading */}
      {content.header && <h3 className="main-heading">{content.header}</h3>}

      {/* Subheading / description */}
      {content.p && <h5 className="sub-heading">{content.p}</h5>}

      {/* Links */}
      {content.content?.map((item, index) => (
        <div key={index} className="list-item">
          <i className="fa fa-hand-o-right m-1 px-2"></i>
          <Link
            to={item.link}   // ✅ SPA navigation (no reload)
            className="font-weight-normal p-1"
          >
            {item.description}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default C125;
