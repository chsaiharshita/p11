import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';
import "./modaldailog.css";
import data from "../sitedata.json";

function ModalDialog() {
  const [isShow, setIsShow] = useState(data.Popvalue);
  const [message, setMessage] = useState(" This pop-up will automatically close in 8 seconds.Thank you!");
  
  // const [isShow, invokeModal] = useState(data.Popvalue)

  // const initModal = () => {
  //   return invokeModal(!data.Popvalue)
  // }

  const initModal = () => {
    setIsShow(!data.Popvalue);
  };

  useEffect(() => {
    // Set a timer to close the modal after 8 seconds
    const timer = setTimeout(() => {
      setIsShow(false);
    }, 8000);

    // Clear the timer when the component unmounts or when isShow changes
    return () => clearTimeout(timer);
  }, [isShow]);




  return (
    <>
     <section className="container-fluid" >
      <Modal id="modal_show" show={isShow}>
        <div  id= "modal-content" >
         <Modal.Header id= "modal-header" onClick={initModal}>
         <img
         className=" d-none d-sm-block  close_button "
         src="./images/images.png"
         style={{ width:"20px", height: "20px" }}
         
        /> 
          <img
         className="d-lg-none  close_button1 "
         src="./images/images.png"
         style={{ width:"30px", height: "30px" }}
         
        /> 
          </Modal.Header>
            <Modal.Body>
              {/* Display your custom message here */}
              <div className="model_head" style={{ textAlign: 'center', padding: '0px' }}>
              <p style={{ color: 'red', fontWeight: 'bold' }}>{message}</p>
              </div>
            <div className="row" id="row_model" >
            <div className="column">
            
               {/* <a href="https://www.g20.org/en/" target="_blank"> */}
			     	<img
                src="./images/HomePage.jpeg"
                style={{ width:"210%", height: "250%" }}
                 />
                 {/* </a> */}
                 </div>
                 {/* <div className="column">
                 <a  href="https://www.advantageap.in/"  target="_blank">
                 <img
                src="./images/Global.jpg"
                style={{ width:"100%", height: "250px", border:"2px solid red" }}
                />
                </a>
               </div> */}
               </div>
         </Modal.Body>
       </div>
      </Modal>
      </section>
    </>
  )
}
export default ModalDialog;
// import React, { useState, useEffect } from 'react';
// import { Modal } from 'react-bootstrap';
// import "./modaldailog.css";
// import data from "../sitedata.json";

// function ModalDialog() {
//   const [isShow, setIsShow] = useState(data.Popvalue);
//   const [message, setMessage] = useState("This pop-up will be closed after a few seconds. Thank you for visiting!");

//   const initModal = () => {
//     setIsShow(!data.Popvalue);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsShow(false);
//     }, 8000);

//     return () => clearTimeout(timer);
//   }, [isShow]);

//   return (
//     <>
//       <section className="container">
//         <Modal id="modal_show" show={isShow} dialogClassName="custom-modal">
//           <div id="modal-content">
//             <Modal.Header id="modal-header" onClick={initModal}>
//               <img
//                 className="d-none d-sm-block close_button"
//                 src="./images/images.png"
//                 style={{ width: "20px", height: "20px" }}
//                 alt="Close button"
//               />
//               <img
//                 className="d-lg-none close_button1"
//                 src="./images/images.png"
//                 style={{ width: "30px", height: "30px" }}
//                 alt="Close button"
//               />
//             </Modal.Header>
//             <Modal.Body>
//               <div style={{ textAlign: 'center', padding: '30px' }}>
//                 <p style={{ color: 'red', fontWeight: 'bold' }}>{message}</p>
//               </div>
//               <div className="row">
//                 <div className="column">
//                   <img
//                     src="./images/images1.jpeg"
//                     style={{ width:"200%", height: "270px" }}
//                     alt="First Image"
//                   />
//                 </div>
//                 {/* Add more columns for additional images */}
//               </div>
//             </Modal.Body>
//           </div>
//         </Modal>
//       </section>
//     </>
//   );
// }

// export default ModalDialog;
