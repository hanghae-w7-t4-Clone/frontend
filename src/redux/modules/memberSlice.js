import { createSlice } from "@reduxjs/toolkit";
import instance from "../../shered/request";
import cookies from "react-cookies";

export const createMember = (data) => {
  return async function (dispatch) {
     console.log("Checking" + JSON.stringify(data));
    await instance
      .post("/users/signup", data, 
      {
        "Content-Type": "application/json",
        withCredentials: true,
      }
      )
      .then((response) => {
        // console.log("checking" + JSON.stringify(response))
        // console.log(response);

        // if (response.data.success === false) {
        //   return window.alert(response.data.err.msg);
        // } else {
        //   return window.alert(`${response.data.data.nickname}님 회원가입을 축하드립니다!`), window.location.replace("/login");
        // }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(error.response.data.message);
        }
      });
  };
};

export const loginMember = (data) => {
  console.log(data)
  return async function (dispatch) {
    await instance
      .post("/users/login", data, 
      {
        "Content-Type": "application/json",
        withCredentials: true,
      }
      )
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          return (
            console.log(response),
            sessionStorage.setItem("token", response.headers.authorization),
            sessionStorage.setItem("nickname", response.data.data)
            // cookies.save("refresh-token", response.headers["refresh-token"])
            // sessionStorage.setItem("nickname", response.data.data.nickname),
            // alert(`${sessionStorage.nickname}님 환영합니다.`),
            // window.location.replace("/")
          );
        } else {
          return window.alert(response.data.error.message);
        }
      })
      .catch((err) => {
        console.log(err);
        
      });
  };
};

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;