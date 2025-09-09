import React from "react";

function Paragraph({ heading, subHeading, text, list = [] }) {
  return (
    <div className="paragraph-block">
      {/* Title */}
      {heading && (
        <h3
          className="heading-black"
          style={{
            fontSize: "28px",   // 🔹 heading ni pedda ga
            fontWeight: "bold", // 🔹 bolder ga
            textTransform: "uppercase", // 🔹 capital letters lo
            margin: "15px 0"
          }}
        >
          {heading}
        </h3>
      )}

      {/* Sub-heading */}
      {subHeading && (
        <h5
          style={{
            fontSize: "20px",
            fontWeight: "600",
            margin: "10px 0"
          }}
        >
          {subHeading}
        </h5>
      )}

      {/* Normal paragraph text */}
      {text && <p style={{ fontSize: "16px", lineHeight: "1.6" }}>{text}</p>}

      {/* Paragraph array */}
      {list.length > 0 && (
        <section>
          {list.map((detail, index) =>
            detail.p ? (
              <p key={index} style={{ fontSize: "16px", lineHeight: "1.6" }}>
                {detail.p}
              </p>
            ) : null
          )}
        </section>
      )}
    </div>
  );
}

export default Paragraph;
