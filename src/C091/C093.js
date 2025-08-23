import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData }  from './C091';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import information from "../sitedata.json"


function Reg() {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [districtId, setDistrictId] = useState('');
  const [reportType, setReportType] = useState('');

  const itemsPerPage = 20; // Number of items to display per page
  const [showTable, setShowTable] = useState(false); // State to control table visibility
  const [isLoading, setIsLoading] = useState(false);

  const rangeStart = (currentPage - 1) * itemsPerPage + 1;
  const rangeEnd = Math.min(currentPage * itemsPerPage, data?.data?.length || 0);

  const handleSubmit= async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await dispatch(fetchData(districtId,reportType));
    setIsLoading(false);
    setCurrentPage(1);
    setShowTable(true);
  };

 

  useEffect(() => {
    localStorage.setItem('data', data);
  }, []);


const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
 

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data && data.data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
       <div className="container text-center"> {/* Added 'text-center' class to center align */}
        <div className="content">  
    
       <h5 style={{color:'red'}}>Get data by District code and Report Type</h5>
        <form onSubmit={handleSubmit} >
          <label style={{padding:"3px",margin:"5px",borderRadius:"5px"}}>
           
           District Code:
            <input
              type="number"
              placeholder="Enter District Code"
              style={{ margin:"3px",borderRadius:"5px", height:"31px",}}
              value={districtId.districId}
              dateFormat="dd/mm/yyyy"
              onChange={(e) => setDistrictId(e.target.value)}
            />
            
          </label>
          <label>
              Report Type:
           
              <input
                type="text"
                value={reportType.eshram_data}
                placeholder="eshram_data"
                onChange={(e) => setReportType(e.target.value)}
                style={{ margin:"3px",borderRadius:"5px", height:"31px",
                
              }}
              />
            </label>
          <button
        type="submit" 
        style={{backgroundColor:"green", borderRadius:"5px",
        cursor: districtId && reportType ? 'pointer' : 'not-allowed',
        opacity: districtId && reportType ? 1 : 0.5,}}
        disabled={!districtId || !reportType}
       >
        Submit
        </button>
        </form>
        {isLoading ? ( // Show loading spinner while fetching data
         <div className="gif container" >
         <img 
         src="./images/please-wait.gif" 
         alt="Loading"
         style={{height:"350px", width:"350px"}}
    />
         
     </div> 
         
        ) : (
        showTable && (
            <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer">
            <thead>

           {/*   <tr>
                <th>S.No</th>
                <th>Dist Name</th>
                <th>Aadhaar Name</th>
                <th>Aadhaar DOB</th>
                <th>Gender</th>
                <th>Father/Husband Name</th>
                <th>Mobile Number</th>
                <th>Pincode</th>
                <th>Occupation Name</th>
                <th>UAN Number</th>
                <th>Registration Date</th>
              </tr> */}
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
            {currentItems &&
              currentItems.map((post, index) => (
                <tr key={index}>
                <td>{index + 1}</td>
                <td style={{width:"10%"}}>{post.dist_name}</td>
                <td >{post.aadhaar_name}</td>
                <td>{post.aadhaar_dob}</td>
                <td>{post.gender}</td>
                <td>{post.father_husband_name}</td>
                <td>{post.mobile_number}</td>
                <td>{post.pincode}</td>
                <td>{post.occupation_name}</td>
                <td>{post.uan_no}</td>
                <td>{post.registration_date}</td>
              </tr>
              ))}
          </tbody>
        </table>
        )
        )}

     <div className="page_nate" >
        {showTable && (
       <div>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Pre
          </button>
         
          <button
            onClick={handleNextPage}
            disabled={indexOfLastItem >= (data && data.data.length)}
          >
            Next 
          </button>  
          <div
            className="pagination-range"
            style={{
              fontSize: '14px',
              color: 'red',
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Showing {rangeStart} - {rangeEnd} of {data?.data?.length || 0} records
          </div>
        </div>
        )}
      </div>
      </div>
      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
      </div>
    </>
  );
}

export default Reg; 

