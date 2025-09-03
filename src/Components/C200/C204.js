import React from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function C204() {
  return (
    <div>
      {(data.Pagetype8 || []).map((information, idx1) => (
        <section key={idx1} className="container">
          <div className="content">
            <h3 className="m-3">{information.heading}</h3>

            {(information.detailservices || []).map((content, idx2) => (
              <React.Fragment key={idx2}>
                <h5 className="m-3">{content.header}</h5>
                <section>
                  {(content.paragraph || []).map((detail, idx3) => (
                    <div key={idx3}>
                      <p className="m-1 p-1" id="p">
                        <i className="fa fa-hand-o-right px-2"></i>
                        {detail.p}
                      </p>
                    </div>
                  ))}
                </section>
              </React.Fragment>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default C204;
