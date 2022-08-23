import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Layout from "../components/Layout";
import LoginErr from "../components/LoginErr";

const Posts = () => {
  const location = useLocation();

  if (sessionStorage.getItem("token") !== null) {
    return (
      <div>
        <Header />
        <Layout />
      </div>
    );
  } else {
    return (
      <div>
        <LoginErr />
      </div>
    )
  }
};

export default Posts;
