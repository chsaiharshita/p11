import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function C383() {
  const pages = Array.isArray(data?.Pages3) ? data.Pages3 : [];

  return (
    <div>
      {pages.map((information, i1) => (
        <section className="container" key={`pg-${i1}`}>
          <div className="content">
            <h3 className="m-3">{information?.heading}</h3>

            {(information?.detailservices ?? []).map((content, i2) => (
              <React.Fragment key={`ds-${i1}-${i2}`}>
                {content?.header && <h5>{content.header}</h5>}

                <section>
                  <ul className="m-2">
                    {(content?.paragraph ?? []).map((detail, i3) => {
                      const href =
                        typeof detail?.link === "string" && detail.link.trim()
                          ? detail.link
                          : "#";

                      return (
                        <li key={`p-${i1}-${i2}-${i3}`} className="my-2">
                          <a
                            id="p"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                              if (href === "#") e.preventDefault();
                            }}
                          >
                            <i className="fa fa-hand-o-right px-2" />
                            {detail?.p || "View"}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </section>

                <div className="col-lg-5 centered p-4 container">
                  <img
                    className="img-thumbnail d-lg"
                    style={{ width: "100%", height: "350px", objectFit: "cover" }}
                    alt={content?.imgalt || "image"}
                    src={content?.imgsrc || "/placeholder.png"}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default C383;
