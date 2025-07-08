import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './actions';
import "./Posts.css";
import information from "../sitedata.json"

function Posts() {
  const { posts, loading, error } = useSelector(state => state);
  const dispatch = useDispatch();
  const {data, totals} = posts;
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
    localStorage.setItem('data', JSON.stringify(data));

  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  
const handleCountClick = (posts) => {

  setSelectedPost(posts);
};



  return (
    <section className="container">
      <div className="content">
        <h3 className="">e-Shram Data</h3>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer">
            <thead>
            {information.Redux5.map((i) => {
              return(
              <tr>
                <th style={{ width: "5%" }}>{i.s_no}</th>
                <th style={{ width: "10%" }}>{i.district}</th>
                <th style={{ width: "15%" }}>{i.eshram}</th>
                <th style={{ width: "15%" }}>{i.eshram_boc} </th>
                <th>{i.boc_eshram}</th>
                <th style={{ width: "15%" }}>{i.boc}  </th>
                <th>{i.register_eshram} </th>
              </tr>
              )})}

            </thead>
            <tbody>
              {data?.map((post, index) => (
                <tr key={index}>
                  <td style={{ width: "5%" }}>{index + 1}</td>
                  <td style={{ textAlign: "left", width: "15%", padding: "5px" }}>{post.dist_name}</td>
                  <td style={{ textAlign: "right", padding: "5px" }}>
                 <a href="eshramdata1" onClick={() => handleCountClick(posts)} >{post.eshram_count}</a>
                  </td>
                  <td style={{ textAlign: "right", padding: "5px" }}>{post.eshram_matched}</td>
                  <td style={{ textAlign: "right", padding: "5px" }}>{post.eshram_notmatched}</td>
                  <td style={{ textAlign: "right", padding: "5px" }}>{post.total_boccount}</td>
                  <td style={{ textAlign: "right", padding: "5px" }}>{post.noteshram_data}</td>
                  </tr>
                ))}  

          {data && (
           <tr>
           <td style={{ fontWeight: 'bold', color: 'red' }}>Total</td>
            <td></td>
            <td style={{ textAlign: "right", padding: "5px", color: 'red'}}>{totals.toteshram_count}</td>
            <td style={{ textAlign: "right", padding: "5px", color: 'red' }}>{totals.toteshram_matched}</td>
            <td style={{ textAlign: "right", padding: "5px", color: 'red'}}>{totals.toteshram_notmatched}</td>
            <td style={{ textAlign: "right", padding: "5px", color: 'red' }}>{totals.tot_boccount}</td>
            <td style={{ textAlign: "right", padding: "5px", color: 'red'}}>{totals.tot_noteshram_data}</td>
             </tr>  
             )} 
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Posts;
