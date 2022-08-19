import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createMember, validateId } from "../redux/modules/memberSlice";
import axios from "axios";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Hook for users
  let [member, setMember] = useState({
    loginId: "",
    name: "",
    nickname: "",
    password: "",
  });

  const onSignUpHandler = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    console.log(event.target)
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };

  const submitUserInfo = (e) => {
    
    e.preventDefault();

    console.log("Hello This is Jungi Park")
    dispatch(
      createMember({
        loginId: member.loginId,
        name: member.name,
        nickname: member.nickname,
        password: member.password,
      })
    );
  };

  return (
    <MainCon>
      <PageCon>
        <HeaderCon>
          <HeaderLogo>Instagram</HeaderLogo>
          <HeaderP>Sign up to see photos and videos from your friends.</HeaderP>
          <HeaderBtn>
            <i className="fab fa-facebook-square"></i> Log in with Facebook
          </HeaderBtn>
          <MiddleCon>
            {/* <hr>
          <p>OR</p>
          <hr> */}
          </MiddleCon>
        </HeaderCon>
        <BottomCon>
          <form onSubmit={submitUserInfo}>
            <BottomInput
              type="text"
              name="loginId"
              value={member.loginId}
              placeholder="Mobile Number or Email"
              onChange={onSignUpHandler}
            />
            <BottomInput
              type="text"
              name="name"
              value={member.name}
              placeholder="Full Name"
              onChange={onSignUpHandler}
            />
            <BottomInput
              type="text"
              name="nickname"
              value={member.nickname}
              placeholder="Username"
              onChange={onSignUpHandler}
            />
            <BottomInput
              type="password"
              name="password"
              value={member.password}
              placeholder="Password"
              onChange={onSignUpHandler}
            />
            <BottonBtn type="submit">회원가입</BottonBtn>
          </form>

          <ul>
            <BottonLi>By signing up, you agree to our</BottonLi>
            <BottonLi>
              <BottonA href="">Terms</BottonA>
            </BottonLi>
            <BottonLi>
              <BottonA href="">Data Policy</BottonA>
            </BottonLi>
            <BottonLi>and</BottonLi>
            <BottonLi>
              <BottonA href="">Cookies Policy</BottonA> .
            </BottonLi>
          </ul>
        </BottomCon>
        </PageCon>
      <div className="option">
        <p>
          Have an account? <BottomA1 href="">Log in</BottomA1>
        </p>
      </div>
      <BottomOtherApp>
        <BottomOtherAppP>Get the app.</BottomOtherAppP>
        <BottomOtherBtn type="button">
          <i className="fab fa-apple"></i> App Store
        </BottomOtherBtn>
        <BottomOtherBtn type="button">
          <i className="fab fa-google-play"></i> Google Play
        </BottomOtherBtn>
      </BottomOtherApp>
      <Footer>
        <FooterUi>
          <FooterLi>
            <FooterA href="">ABOUT</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA href="">HELP</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA href="">PRESS</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA href="">API</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA href="">JOBS</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA href="">PRIVACY</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA href="">TEMS</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA href="">LOCATIONS</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA href="">TOP ACCOUNTS</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA href="">HASHTAGS</FooterA>
          </FooterLi>
          <FooterLi>
            <FooterA href="">LANGUAGE</FooterA>
          </FooterLi>
        </FooterUi>
        <FooterP>© 2020 PICTUREGRAM</FooterP>
      </Footer>
    </MainCon>
  );
};

export default SignUp;

const MainCon = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;
  padding: 0;
  box-sizing: border-box;

  background-color: #fafafa;
`

const PageCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

  /* margin: 40px 40px 10px 40px; */

  border: 1px solid #dbdbdb;
  width: 350px;
  background-color: white;
  margin: 40px 40px 10px 40px;
`

// Header
const HeaderCon = styled.div`
  text-align: center;
`

const HeaderLogo = styled.h1`
  margin-bottom: 15px;
`
const HeaderP = styled.div`
  margin-bottom: 15px;
  font-weight: bold;
  color: #8e8e8e;
  font-size: 18px;
`
const HeaderBtn = styled.button`
  margin-bottom: 15px;
  width: inherit;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #0095f6;
  color: #ffffff;
`

// Middle
const MiddleCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #8e8e8e;
`

// Bottom
const BottomCon = styled.div`
  display: flex;
  flex-direction: column;
`
const BottomInput = styled.input`
  width: inherit;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
  padding: 10px 5px;
  margin: 5px 0;
`
const BottonBtn = styled.button`
  width: inherit;
  margin-bottom: 20px;
  padding: 7px 20px;
  border-radius: 5px;
  border: none;
  background-color: #0095f6;
  color: #ffffff;
`
const BottonLi = styled.li`
  display: inline;
  color: #8e9096;
`
const BottonA = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #8e9096;
`
const BottomA1 = styled.a`
  text-decoration: none;
  color: #00a0f7;
`
const BottomOtherApp = styled.div`
  text-align: center;
`
const BottomOtherAppP = styled.p`
  margin-bottom: 15px;
`
const BottomOtherBtn = styled.button`
   cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 18px;
`

// Footer
const Footer = styled.div`
  bottom: 0;
  height: 2.5rem;
  margin-top: 50px;
`
const FooterUi = styled.ul`
  text-align: center;
`
const FooterLi = styled.li`
  display: inline;
  margin-right: 5px;
`
const FooterA = styled.a`
  text-decoration: none;
  font-size: 12px; 
  color: #00376b;
`
const FooterP = styled.p`
  margin: 10px 0;
  text-align: center;
  color: #8e9096;
  font-size: 14px;
`