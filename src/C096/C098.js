import './Posts.css';
import { useDispatch,useSelector } from 'react-redux';
import { fetchtodos } from './reducers.js';
import { useEffect, useState } from 'react';
import { fetchdistricts } from './C096.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './C097.js';
import information from "../sitedata.json"

function Posts() {
  const dispatch=useDispatch();
  const state=useSelector((state)=>state);
  const data=useSelector((state)=>state.todo.data);
  const totals=useSelector((state)=>state.todo.totals);
  const [showTable, setShowTable] = useState(false);
  const [buttonPopup,setButtonPopup]=useState(false);
  var districtData=useSelector((state)=>state.district.data);
  useEffect(() => {
    // Dispatch the API call action when the component is loaded
    dispatch(fetchtodos());
  }, [dispatch]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [reportType, setReportType] = useState(null);
if(state.todo.isLoadin){
  return <h1>Loading....</h1>
}

const handleDistrictClick = (districtName, additionalParam) => {
  
  setSelectedDistrict(districtName);
  setReportType(additionalParam);
  districtData=([]);
  dispatch(fetchdistricts({ districtId: districtName, reportType: additionalParam }));
  setShowTable(true);
  setButtonPopup(true);
 
  // You can now make a REST API call here using the selected district name and other parameter.
  // For brevity, I'm omitting the API call code here.
};


  return (

    <section className="container">
      <div className="content">
        <h3 className="">e-Shram Data</h3>
     <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer">
        <thead className=''>

        {information.Redux5.map((i) => {
              return(
              <tr>
                <th style={{ width: "5%" }}>{i.s_no}</th>
                <th style={{ width: "10%" }}>{i.district}</th>
                <th style={{ width: "15%" }}>{i.eshram}</th>
                <th style={{ width: "15%" }}>{i.boc}  </th>
                <th style={{ width: "15%" }}>{i.eshram_boc} </th>
                <th>{i.boc_eshram}</th>
                
                <th>{i.register_eshram} </th>
              </tr>
              )})}

        </thead>
        <tbody>
          {data&&data.map((item,index) => (
            <tr key={index}>
            <td style={{ width: "5%" }}>{index + 1}</td>
              <td >{item.dist_name}</td>
              <td className="text-primary fw-bolder" onClick={(e) => handleDistrictClick(item.dist_code, 'eshram_data')}
              style={{ cursor: 'pointer' ,textAlign: "right", padding: "5px"}}>{item.eshram_count}</td>
               <td  className="text-primary fw-bolder" onClick={(e) => handleDistrictClick(item.dist_code, 'tot_bocCount')}
              style={{ cursor: 'pointer',textAlign: "right", padding: "5px" }}>{item.total_boccount}</td>
              <td className="text-primary fw-bolder"
               onClick={(e) => handleDistrictClick(item.dist_code, 'eshram_matched')}
              style={{ cursor: 'pointer',textAlign: "right", padding: "5px" }}>{item.eshram_matched}</td>
              <td className="text-primary fw-bolder" onClick={(e) => handleDistrictClick(item.dist_code, 'eshram_notmatched')}
              style={{ cursor: 'pointer' ,textAlign: "right", padding: "5px"}}>{item.eshram_notmatched}</td>
             
              <td className="text-primary fw-bolder" onClick={(e) => handleDistrictClick(item.dist_code, 'eshram_data')}
              style={{ cursor: 'pointer',textAlign: "right", padding: "5px" }}>{item.noteshram_data}</td>
            </tr>
            
          ))}
          
            <tr className="text-success fw-bolder">
            <td className="text-success" textAlign='right' colSpan='2' >Totals</td>
          
            <td className="text-success" >{totals.toteshram_count}</td>
            <td className="text-success"align='right'>{totals.tot_boccount}</td>
            <td className="text-success"textAlign='right'>{totals.toteshram_matched}</td>
            <td className="text-success"align='right'>{totals.toteshram_notmatched}</td>
            
            <td className="text-success"align='right'>{totals.tot_noteshram_data}</td>
            </tr>
             
        </tbody>
        
      </table>
      <br/>
      <Modal trigger={buttonPopup} setTrigger={setButtonPopup}>
      {showTable && (
      <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer">
      <thead className=''>
      {information.Redux8.map((i) => {
              return(
              <tr>
             <th style={{width:"3%"}}>{i.s_no}</th>
              <th style={{width:"15%"}}>{i.district}</th>
              <th style={{width:"12%"}}>{i.aadhaar_name}</th>
              <th style={{width:"10%"}}>{i.aadhaar_dob}</th>
              <th>{i.gender}</th>
              <th style={{width:"15%"}}>{i.father_husband_name}</th>
              <th>{i.mobile_number}</th>
              <th>{i.pincode}</th>
              <th style={{width:"15%"}}>{i.occupation_name}</th>
              <th>{i.uan_no}</th>
              <th>{i.registration_date}</th>
              </tr> 
              )})}  
        </thead>
        <tbody>
          {districtData&&districtData.map((item,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.dist_name}</td>
              <td>{item.aadhaar_name}</td>
              <td>{item.aadhaar_dob}</td>
              <td>{item.gender}</td>
              <td>{item.father_husband_name}</td>
              <td>{item.mobile_number}</td>  
              <td>{item.pincode}</td>
              <td>{item.occupation_name}</td>
              <td>{item.uan_no}</td>
              <td>{item.registration_date}</td>
            </tr>
          ))}
          </tbody>
      </table>
      )}
     </Modal>
    </div>
      </section>
  );
}

export default Posts;
