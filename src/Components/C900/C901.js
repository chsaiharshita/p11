import React from "react";
import { useSelector } from "react-redux";
import C121 from "../Common/C121"; // import C121

function C901() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div className="C901-container">
      {siteData?.Emergency?.map((page, pageIndex) => (
        <div className="content" key={pageIndex}>
          {/* Use C121 for heading */}
          {page.heading && <C121 heading={page.heading} />}

          {/* Use C121 for each contact */}
          {page.contacts?.map((contact, idx) => (
            <C121
              key={idx}
              subHeading={contact.label}
              text={contact.value}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default C901;
