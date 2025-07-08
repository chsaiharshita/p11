import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './action';
import './Reg.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import information from '../sitedata.json';
import { ServerStyleSheet } from 'styled-components';

function Reg() {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.data);
  const [registrationDate, setRegistrationDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Number of items to display per page
  const[showTable, setshowTable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const rangeStart = (currentPage - 1) * itemsPerPage + 1;
  const rangeEnd = Math.min(currentPage * itemsPerPage, data?.data?.length || 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await dispatch(fetchData(registrationDate));
    setIsLoading(false);
    setCurrentPage(1);
    setshowTable(true);
    setRegistrationDate('');
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

  // Check for failure response
  if (data && data.status === 0) {
    return (
      <div className="container text-center">
        <div className="content">
          <h2>Error</h2>
          <p>{data.message}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container text-center">
        <div className="content">
          <h5 style={{ color: 'red' }}>Get Data by Registration Date and District</h5>
          <form onSubmit={handleSubmit}>
            <label style={{ padding: '3px', margin: '5px', borderRadius: '5px' }}>
              Registration Date:
              <input
                type="text"
                style={{ margin: '3px', borderRadius: '5px', height: '31px' }}
                value={registrationDate}
                dateFormat="dd/mm/yyyy"
                placeholder="dd-mm-yyyy"
                onChange={(e) => setRegistrationDate(e.target.value)}
              />
            </label>
            <button
              type="submit"
              style={{
                backgroundColor: 'green',
                borderRadius: '5px',
                cursor: registrationDate ? 'pointer' : 'not-allowed',
                opacity: registrationDate ? 1 : 0.5,
              }}
              disabled={!registrationDate}
            
            >
              Submit
            </button>
          </form>
          {isLoading ? (
            <div className="gif container">
              <img src="./images/please-wait.gif" alt="Loading" style={{ height: '350px', width: '350px' }} />
            </div>
          ) : (
            
            data && data.status === 1 && (
              <div>
                <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer">
                  <thead>
                    {information.Redux7.map((i) => {
                      return (
                        <tr>
                          <th style={{ width: '3%' }}>{i.s_no}</th>
                          <th style={{ width: '15%' }}>{i.district}</th>
                          <th style={{ width: '12%' }}>{i.aadhaar_name}</th>
                          <th style={{ width: '10%' }}>{i.aadhaar_dob}</th>
                          <th>{i.gender}</th>
                          <th style={{ width: '15%' }}>{i.father_husband_name}</th>
                          <th>{i.mobile_number}</th>
                          <th>{i.pincode}</th>
                          <th style={{ width: '15%' }}>{i.occupation_name}</th>
                          <th>{i.uan_no}</th>
                          <th>{i.registration_date}</th>
                        </tr>
                      );
                    })}
                  </thead>
                  <tbody>
                    {currentItems &&
                      currentItems.map((item, index) => (
                        <tr key={index}>
                          <td style={{ width: '3%' }}>{indexOfFirstItem + index + 1}</td>
                          <td style={{ width: '15%' }}>{item.dist_name}</td>
                          <td style={{ width: '12%' }}>{item.aadhaar_name}</td>
                          <td style={{ width: '10%' }}>{item.aadhaar_dob}</td>
                          <td>{item.gender}</td>
                          <td style={{ width: '15%' }}>{item.father_husband_name}</td>
                          <td>{item.mobile_number}</td>
                          <td>{item.pincode}</td>
                          <td style={{ width: '15%' }}>{item.occupation_name}</td>
                          <td>{item.uan_no}</td>
                          <td>{item.registration_date}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="page_nate">
                  {showTable && (
                    <div>
                      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Pre
                      </button>
                      <button onClick={handleNextPage} disabled={indexOfLastItem >= (data && data.data.length)}>
                        Next
                      </button>
                      <div
                        className="pagination-range"
                        style={{
                          fontSize: '14px',
                          color: 'red',
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}
                      >
                        Showing {rangeStart} - {rangeEnd} of {data?.data?.length || 0} records
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Reg;