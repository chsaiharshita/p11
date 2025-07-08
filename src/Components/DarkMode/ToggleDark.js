import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState}from 'react';
import "./Toggledark.css";
import ReactSwitch from "react-switch";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript


export default function ToggleDark(props) {
 
  return (
 <section>
      <div className="wrapper">
    
       <label className="darkmode-toggle">
       <button
            type="button"
            id="gg-sun"
              onClick={() => {
               props.ToggleDark('white-content');
            }}
          />  
   
        </label> 

  {/*        
 <ReactSwitch   onChange={() => {
               props.ToggleDark('white-content');
            }} />
   

<ul>
<li class="highContrast dark tog-con mFocus">
<small className="tcon">
    
  <button title="High Contrast"
   aria-label="High Contrast"
   aria-hidden="true"
   onClick={() => {
    props.ToggleDark('white-content');
 }}
   >
    
    <span aria-hidden="false" style={{color:"white", backgroundColor:"black"}}>A</span> 
  
    
    </button>
    <button title="Normal Contrast"
   aria-label="Normal Contrast"
   aria-hidden="fasle"
   onClick={() => {
    props.ToggleDark('dark');
 }}
   >
    
    <span aria-hidden="false">A</span> 
  
    
         </button>
       </small> 
       </li>
     </ul>

*/} 


   
  



  

     
      
    </div>
    </section>
  );
}