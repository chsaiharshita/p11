import React from "react";

function C121({ heading, subHeading, text, list = [], imgsrc, imgalt }) {
  return (
    <div className="paragraph-block">
      {/* Title */}
      {heading && (
        <h3
          className="heading-black"
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            textTransform: "uppercase",
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
            fontWeight: "bold",
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

      {/* Image block */}
      {imgsrc && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={imgsrc}
            alt={imgalt || "content image"}
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
}

export default C121;
