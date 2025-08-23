import React from "react";
import "./index.css";
import C101 from "../C103/C101.js";
import C104 from "../C103/C104.js";
import data from "../../sitedata.json";
import { MdLaunch } from "react-icons/md";

function C105() {
  return (
    <>
      <C101 />
      <C104 />

      <section className="font-weight-bold sticky-top navdetails">
        <div className="col-md-auto">
          <div className="container-lg">
            <nav className="navbar navbar-expand-lg col-sm-12 navbar-light" id="expand1">
              
              {/* Home icon for small screen */}
              <a className="nav-link d-sm-none" href="#">
                <i className="fa fa-home" aria-hidden="true" style={{ fontSize: "28px", color: "#fff" }} />
                <span className="sr-only">(current)</span>
              </a>

              {/* Hamburger icon */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Main Nav section */}
              <section className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav me-auto navlinkdetails links">

                  {/* Static nav links */}
                  {data.Navlink?.map((j, idx) => (
                    <li className="nav-item active" key={idx}>
                      <a className="nav-link" href={j.link}>
                        {j.title}
                      </a>
                    </li>
                  ))}

                  {/* Drop or Simple Nav */}
                  {data.drop
                    ?.filter((j) => j.show === "yes" || j.show === undefined)
                    .map((j, index) => {
                      if (j.link) {
                        return (
                          <li className="nav-item" key={index}>
                            <a className="nav-link" href={j.link}>
                              {j.name}
                            </a>
                          </li>
                        );
                      } else if (j.children?.length > 0) {
                        return (
                          <li className="nav-item dropdown" key={index}>
                            <a
                              className="nav-link dropdown-toggle"
                              id={`navbarDropdown-${index}`}
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              {j.name}
                            </a>
                            <div className="dropdown-menu" aria-labelledby={`navbarDropdown-${index}`}>
                              {j.children.map((item, idx) => (
                                <a className="dropdown-item" href={item.link} key={idx}>
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </li>
                        );
                      } else {
                        return null;
                      }
                    })}
                </ul>

                {/* External links with launch icon (optional section) */}
                {/* 
                <ul className="navbar-nav ms-auto links">
                  {data.Navlinkleft?.map((j, idx) => (
                    <li className="nav-item" key={idx}>
                      <a className="nav-link" href={j.link} target="_blank" rel="noreferrer">
                        {j.title} <MdLaunch size="1.5em" color="red" />
                      </a>
                    </li>
                  ))}
                </ul>
                */}
              </section>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default C105;