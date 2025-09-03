import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './C075';
import "./Posts.css";
import data from "../../sitedata.json"

function Posts() {
  const { posts, loading, error } = useSelector(state => state);
  const dispatch = useDispatch();
  const postsPerPage = 15; // Number of posts per page
  const [currentPage, setCurrentPage] = useState(1); 

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost); 
  
  return (
    <section className="container" id="">
        <div className="content">
          <h3 className="" >
            Course Master
             </h3>
          <table className="col-lg-12 col-xs-10 col-md-8 d-sm-10" id="customer" >
		    	<thead>
          <tr>
        <th style={{width:"5%"}}> S.No</th>
		  	<th style={{width:"30%"}} >ITI Trade</th>
		  	<th style={{ width: "20%" }} >ITI Code</th>
			 <th  style={{ width: "15%" }} >ITI Type</th>
		 	 <th  style={{ width: "20%" }}>Course Duration</th>
			 </tr>
      </thead> 
			<tbody>
      {currentPosts.map((post,index) =>  {
            return post.cproperties.map((e, innerindex) => (
            
                <tr key={innerindex}>
                  <td style={{width:"5%"}}>{indexOfFirstPost + index + 1}</td>
                   <td style={{ textAlign:"left", paddingLeft:"5px", fontSize:"14px"}} > {post.cname }</td>
				           <td style={{width:"20%"}} > {post.ccode }</td>
                   <td style={{width:"15%"}}> {e.ctype }</td>
				           <td style={{width:"20%"}}> {e.cduration }</td>
                  </tr>
                ))})}
              </tbody>
		         </table>
            {/* previous and next button */}
          </div>


      <div className="pagination">
      <div className="Pagination" >
      <button
        className="prev"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
        </button>
      {Array.from({ length: Math.ceil(posts.length / postsPerPage) }).map(
        (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        )
      )}
      <button
        className="prev"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={indexOfLastPost >= posts.length}
      >
        Next
      </button>
      </div>
    </div>

    
   
    </section>
  );
}

export default Posts;