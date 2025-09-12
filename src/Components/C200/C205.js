// src/Components/C200/C205.js
import React from "react";
import { useSelector } from "react-redux";
import C125 from "../Common/C125";
import "./stylesheet.css";

function C205() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.Pagetype16?.map((page, pageIndex) => (
        <section className="container" key={pageIndex}>
          <div className="content">
            {/* ✅ Heading also inside reusable ListComponent style */}
            <C125
              content={{
                header: page.heading, // heading ni header laga pass chestunnam
                p: page.p || "",
                content: [], // links unnecessary ikkada
              }}
            />

            {/* ✅ Detail Services list → ListComponent call */}
            {page.content?.length > 0 && (
              <C125
                content={{
                  header: page.header || "",
                  p: page.p || "",
                  content: page.content,
                }}
              />
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default C205;
