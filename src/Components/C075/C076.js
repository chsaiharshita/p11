import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../source/redux/reducers/dataSlice";
import C134 from "../Common/C134";
import "./Posts.css";

function Posts() {
  const dispatch = useDispatch();
  const { posts, siteData, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!posts.length) return <p>No data found</p>;

  // Flatten nested cproperties so ITI Type + Course Duration are accessible
  const flatPosts = posts.map((post, index) => ({
  ...post,
  sno: index + 1,
  ctype: post?.cproperties?.[0]?.ctype || "",
  cduration: post?.cproperties?.[0]?.cduration || ""
}));


  // Columns from siteData
  const columns = siteData.columns.map(col => ({
    ...col,
    style: { textAlign: col.align || "center" }
  }));

  return (
    <C134
      title="Course Master"
      data={flatPosts}
      columns={columns}
      postsPerPage={15}
    />
  );
}

export default Posts;
