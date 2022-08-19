import { createSlice } from "@reduxjs/toolkit";
import instance from "../../shered/request";


export const createMember = (data) => {
  return async function (dispatch) {
    // console.log(data);
    await instance
      .post("/users/login", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        // console.log(response);
        // if (response.data.success === false) {
        //   return window.alert(response.data.err.msg);
        // } else {
        //   return window.alert(`${response.data.data.nickname}님 회원가입을 축하드립니다!`), window.location.replace("/login");
        // }
      })
      .catch((error) => {
        // if (error.response.status === 400) {
        //   alert(error.response.data.message);
        // }
      });
  };
};

export const loginMember = (data) => {
  return async function (dispatch) {
    await instance
      .post("members/login", data, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        // if (response.data.success === true) {
        //   return (
        //     sessionStorage.setItem("token", response.headers.authorization),
        //     // cookies.save("refresh-token", response.headers["refresh-token"]),
        //     sessionStorage.setItem("nickname", response.data.data.nickname),
        //     alert(`${sessionStorage.nickname}님 환영합니다.`),
        //     window.location.replace("/")
        //   );
        // } else {
        //   return window.alert(response.data.error.msg);
        // }
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