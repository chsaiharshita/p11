import React from "react";

function C121({ heading, subHeading, text, list = [], imgsrc, imgalt,link ,centered}) {
   const textAlignStyle = centered ? { textAlign: "center" } : {};
  return (
    <div className="paragraph-block">
      {/* Title */}
      {imgsrc && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <img
            src={imgsrc}
            alt={imgalt || "content image"}
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      )}
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
            fontSize: centered ? "36px" : "20px", 
            fontWeight: "bold",
            margin: "10px 0",
                ...textAlignStyle
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

       {link && (
        <p>
          <a
            href={link}
            
            style={{ color: "#ff0000ff",  fontSize: "22px",      // <-- increased font size
              fontWeight: "bold", textDecoration: "underline" }}
          >
            {subHeading || "Click here"}
          </a>
        </p>
      )}
      
    </div>
  );
}

export default C121;
