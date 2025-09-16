import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../source/redux/reducers/dataSlice";
import CommonTable from "../Common/CommonTable";
import siteData from "../../sitedata.json";
import "./Posts.css";

function Posts() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Flatten nested cproperties so ITI Type and Course Duration are accessible
  const flatPosts = posts.map(post => ({
    ...post,
    ctype: post.cproperties?.[0]?.ctype || "",
    cduration: post.cproperties?.[0]?.cduration || ""
  }));

  // Columns from sitedata.json
  const columns = siteData.columns.map(col => ({
    ...col,
    style: { textAlign: col.align || "left" }
  }));

  return (
    <CommonTable
      title="Course Master"
      data={flatPosts}
      columns={columns}
      postsPerPage={15}
    />
  );
}

export default Posts;
