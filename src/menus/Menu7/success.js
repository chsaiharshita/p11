import React from "react";
import { useSelector } from "react-redux";
import InstituteTable from "./instituteTable";

const Welcome = () => {
  const auth = useSelector((state) => state.auth);
  const username = auth?.user?.username || "Guest"; // safely check

  return (
    <div className="text-center my-5">
      <h2>Welcome, {username}!</h2>
      <InstituteTable/>
    </div>
  );
};

export default Welcome;