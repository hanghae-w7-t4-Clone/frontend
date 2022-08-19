import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginMember } from "../redux/modules/memberSlice";

const Main = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    loginId: "",
    password: "",
  };
  const [member, setMember] = useState(initialState);

  const handChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };

  const handSubmit = (event) => {
    console.log(event)
    event.preventdefault();
    dispatch(loginMember({
      loginId: member.loginId,
      password: member.password,
    }))
    
  }

  return (
    <div>
      <div>
        <Container>
          <Box>
            <Heading></Heading>
            <form onSubmit={handSubmit}>
              <Field>
                <input value={member.loginId} 
                name="loginId" 
                type="name" 
                placeholder="전화번호, 사용자 이름 또는 이메일" 
                onChange={handChange}
                />
              </Field>
              <Field>
                <input value={member.password} 
                name="password" 
                type="password" 
                placeholder="비밀번호" 
                onChange={handChange}
                />
              </Field>
              <LoginBtn>
                Log In
              </LoginBtn>
              <Separator>
                <div></div>
                <p>OR</p>
                <div></div>
              </Separator>
              <Other>
                <FaceBookBtn className="fb-login-btn" type="button">
                  <i className="fa fa-facebook-official fb-icon"></i>
                  <span className="">Facebook으로 로그인</span>
                </FaceBookBtn>
                <a className="forgot-password" href="#">
                  비밀번호를 잊으셨나요?
                </a>
              </Other>
            </form>
          </Box>
          <Box className="box">
            <p>
              계정이 없으신가요?{" "}
              <SignUp href="#">
                가입하기
              </SignUp>
            </p>
          </Box>
          <div>
            <p>앱을 다운로드하세요.</p>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  font-size: 14px;

`

const Box = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffff;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
  flex-grow: 1;
`

const Heading = styled.div`
  margin: 22px auto 12px;
  background-image: url("https://www.instagram.com/static/bundles/es6/sprite_core_b20f2a3cd7e4.png/b20f2a3cd7e4.png");
  background-position: -98px 0;
  height: 51px;
  width: 177px;
  overflow: hidden;
`

const Field = styled.div`
  margin: 10px 0;
  position: relative;
  font-size: 14px;
  width: 100%;
  text-overflow: ellipsis;

  input {
    width: 100%;
  }
`

const LoginBtn = styled.div`
  text-align: center;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid transparent;
  background-color: #3897f0;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`

const FaceBookBtn = styled.button`
  margin: 1rem;
  border: 0;
  cursor: pointer;
  font-size: 14px;
  color: #385185;
  font-weight: 600;
  background: transparent  
`

const Other = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`

const Separator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  margin-top: 6px;

  div {
    height: 1px;
    width: 40%;
    background-color: #dbdbdb;
  }
`

const SignUp = styled.a`
  color: #3897f0;
  font-weight: 600;
`