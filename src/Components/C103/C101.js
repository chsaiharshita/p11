import React from 'react';
import './C101.css';
import data from '../../sitedata.json';
import Fontsize from './C018';

function C101() {
  const socialData = data.socialicons[0]; // ✅ Use only the first item
  return (
    <div className="top-wrapper">
      <div className="topBar">
        <div className="container-lg d-flex justify-content-between align-items-center">
          
          {/* LEFT SIDE: Skip Links */}
          <div className="left-links d-flex">
            {socialData.link1 && (
              <a href={socialData.link1} className="skipContent" aria-label="Skip to main content">
                {socialData.title1}
              </a>
            )}
            {socialData.link2 && (
              <a href={socialData.link2} className="skipContent" aria-label="Skip to main content">
                {socialData.title2}
              </a>
            )}
          </div>

          {/* RIGHT SIDE: A+/A-, Sitemap, Social Icons */}
          <div className="right-icons d-flex align-items-center gap-3">
            <Fontsize />

            <a href="/nicapsc-kkdpolice/sitemap" className="sitemap-link" title="Sitemap">
              <i className="fa fa-sitemap" style={{ fontSize: '14px' }}></i>
            </a>

            <ul className="socials d-flex align-items-center m-0 p-0">
              {socialData.iconslink.map((icon, idx) => (
                <li key={idx} className="social-item">
                  <a href={icon.link} target="_blank" rel="noreferrer">
                    <i className={icon.iconname} style={{ fontSize: '14px' }}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default C101;
