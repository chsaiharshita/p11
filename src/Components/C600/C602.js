import React from "react";
import { useSelector } from "react-redux";
import C121 from "../Common/C121";


function C602() {
  const siteData = useSelector((state) => state.data.siteData);

  return (
    <div>
      {siteData?.PreventAbuse?.map((information, index) => (
       <section className="container" key={index}>
                 <div className="content">
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
                       
                     />
                   ))}
                 </div>
               </section>
      ))}
    </div>
  );
}

export default C602;
