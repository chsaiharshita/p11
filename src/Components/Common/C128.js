import React from "react";
import "./C128.css";

function CommonOrgChart({ title, paragraph }) {
  if (!paragraph || paragraph.length === 0) return null;

  return (
    <section>
      <div className="container" id="images">
        <div className="row">
          {/* Title */}
          {title && (
            <h3 className="font-weight-bold center m-3" id="organisation">
              {title}
            </h3>
          )}

          {/* Paragraph → Images */}
          {paragraph.map((img, index) => (
            <div key={index} className="org-img-wrapper" id="org">
              <img
                src={img.imgsrc}
                alt={img.imgalt || "Organisation Chart"}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommonOrgChart;
