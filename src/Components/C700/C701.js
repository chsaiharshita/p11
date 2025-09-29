import React from "react";
import { useSelector } from "react-redux";
import C121 from "../Common/C121";


function C701() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.CrimeLaws.map((information, index) => (
       <section className="container" key={index}>
                 <div className="content" style={{ textAlign: "center" }}>
                   <C121
                   heading={information.heading}
                   />
       
                   {information?.detailservices?.map((content, subIndex) => (
                     <C121
                       key={subIndex}
                       imgsrc={content.imgsrc}   
                        imgalt={content.imgalt} 
                       subHeading={content.heading}
                        
                       text={content.p}
                       list={content.paragraph}
                        link={content.link} 
                       centered={true}
                     />
                   ))}
                 </div>
               </section>
      ))}
    </div>
  );
}

export default C701;
