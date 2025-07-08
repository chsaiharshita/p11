import React from 'react';


function Modal(props) {
  return (props.trigger)?(

    <div className="modal">
      <div className="modal-content">
        <button className='close' onClick={()=>props.setTrigger(false)}>
       
         <img
         className=" d-none d-sm-block  close_button "
         src="./images/images.png"
         style={{ width:"20px", height: "20px", margin:"left" }}
         
        /> 
      
  </button>
        {props.children}
      </div>
    </div>
  ):""
}

export default Modal;