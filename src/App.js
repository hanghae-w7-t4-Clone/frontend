import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const App = () => {
  return (
    // <Provider store={store}> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
};

export default App;
