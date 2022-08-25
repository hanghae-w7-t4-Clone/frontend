import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import LoginErr from "../components/LoginErr";

const Posts = () => {

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
