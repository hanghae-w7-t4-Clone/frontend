import React from 'react'
import {useNavigate } from "react-router-dom";
import styled from 'styled-components';

const LoginErr = () => {
  const navigate = useNavigate();

  return (
  <LoginErrWrap>
    <LoginErrBox>
      <p>로그인이 필요합니다.</p>
      <BlueBtn onClick={() => {navigate('/')}}>메인으로 돌아가기</BlueBtn>
    </LoginErrBox>
  </LoginErrWrap>
  )
}

export default LoginErr


const LoginErrWrap = styled.div`
  height: 100vh;
  margin: 90px auto 50px;
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;

`

const LoginErrBox = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #FFF;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const BlueBtn = styled.div`
  border: none;
  background-color: #fff;
  font-weight: bold;
  color: #3baef8;
  cursor: pointer;
`;