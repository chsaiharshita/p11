import React, {useState} from "react";
import data from "../../sitedata.json";
import "./stylesheet.css";

function Pagetype51() {
 const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex -recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    
  return (
    <div>
          <section className="container" id="">
            <div className="content">
                  <div className="" id="q">
                  <h3 className=""></h3>

                     <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer" >
                    <thread  > 
                    <tr >
                  <th style={{width:"5%"}} >S.No</th>
                 <th style={{width:"65%"}}>Description</th>
                 <th style={{width:"30%"}}>View</th>
                  </tr>
                  <tbody id="customer">
                 {records.Pagetype3.map((details) => {
                     return (
                        <tr id="text_align" >
                        <td > {details.Serial}</td>
                      <td style={{textAlign:"left", paddingLeft:"10px"}}> {details.Trainingwing} </td> 
                      <td> 
                      <a  href={details.link}  target="_blank">
                       View
                       <i className="fa fa-download pdf-download" aria-hidden="true"></i>
                         </a>  </td>  
                       </tr>
                     );
                   })}
                    </tbody>
                  </thread>
                </table>
                </div>
                <nav>
            <div>
       <ul className= "Pagination">
      <li className="page-item">
     <a href ="#" className ="page-link"
       onClick={prePage}>Prev</a>
   </li>

 {
 numbers.map((n, i) => (
   <li className= "page-item" key={i} >
     <a href ="#" className ="page-link"
       onClick={() => changeCPage(n)} > {n}</a>
   </li>
       ))
     }

   <li className="page-item">
     <a href ="#" className ="page-link"
       onClick={nextPage}>Next</a>
   </li>
         
         
        </ul>
        </div>
              </nav> 
           </div>
           
          </section>
     
    </div>
  )
 function prePage(){
    if (currentPage !== firstIndex){
        setCurrentPage(currentPage -1)
    }
 }
 function changeCPage(id){
   
        setCurrentPage(id)
    
}
function nextPage(){
    if (currentPage !== lastIndex){
        setCurrentPage(currentPage +1)
    }  
}
}


export default Pagetype51;