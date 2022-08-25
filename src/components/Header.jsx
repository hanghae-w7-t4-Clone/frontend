import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ImgModal from "./ImgModal";
import PostModal from "./PostModal";

import { BsPersonCircle, BsBookmark } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GrPowerCycle } from "react-icons/gr";


const Header = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [selectedPic, setSelectedPic] = useState(false);

  const [toggle, setToggle] = useState(false);

  const clickToggle = () => {
    setToggle(!toggle);
  };

  const myProfileImg = sessionStorage.getItem("profileImg");

  const logOut = () => {
    sessionStorage.clear();
    // cookies.remove("refresh-token");
    alert("로그아웃 되었습니다.");
    window.location.replace("/");
  };

  return (
    <>
      <HeaderWrap>
        <NavWrapper>
          <Logo onClick={() => navigate("/posts")} src="img/logo.PNG" alt="" />
          <SearchBox type="text" placeholder="검색" />
          <RightBar>
            <IconWrap>
              <Icon onClick={() => navigate("/posts")} src="img/home.PNG" alt="" />
              <Icon src="img/messenger.PNG" alt="" />
              <Icon
                src="img/add.PNG"
                alt=""
                onClick={() => {
                  setModal(!modal);
                }}
              />
              <Icon src="img/explore.PNG" alt="" />
              <Icon src="img/like.PNG" alt="" />
            </IconWrap>

            <div>
              <ProfileImg onClick={clickToggle} src={myProfileImg} alt="" />
            </div>
          </RightBar>
        {toggle ? (
          <ToggleList>
            <li
              onClick={() => {
                navigate("/profile");
              }}
            >
              <BsPersonCircle/>프로필
            </li>
            <li onClick={()=> alert("서비스 준비 중")}><BsBookmark/>저장됨</li>
            <li onClick={()=> alert("서비스 준비 중")}><FiSettings/>설정</li>
            <li onClick={()=> alert("서비스 준비 중")}><GrPowerCycle/>계정전환</li>
            <li style={{borderTop:'1px solid gray', padding:'16px 10px 0 10px'}} onClick={logOut}>로그아웃</li>
          </ToggleList>
        ) : null}
        </NavWrapper>

        {/* Displaying double-Modal for file-upload and posting */}
        {modal ? <ImgModal modal={modal} setModal={setModal} modal2={modal2} setModal2={setModal2} setSelectedPic={setSelectedPic} /> : ""}
        {modal2 ? <PostModal modal2={modal2} setModal2={setModal2} selectedPic={selectedPic} /> : ""}
      </HeaderWrap>
    </>
  );
};

export default Header;

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

const Logo = styled.img`
  height: 100%;
  margin-top: 5px;
  cursor: pointer;
`;

const NavWrapper = styled.div`
  width: 70%;
  max-width: 1000px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const SearchBox = styled.input`
  width: 200px;
  height: 25px;
  background: #fafafa;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const RightBar = styled.div`
  display: flex;
`;

const IconWrap = styled.div`
  height: 24px;
`;

const Icon = styled.img`
  cursor: pointer;
  margin: 0 10px;
  height: 100%;
`;

const ProfileImg = styled.img`
  margin-left: 15px;
  border: 1px solid #dfdfdf;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

const ToggleList = styled.ul`
  list-style-type: none;
  position: absolute;
  right: 0px;
  top: 55px;
  width: 230px;
  background-color: #FFFFFF;
  border-radius: 5px;

  li {
    cursor: pointer;
    margin: 16px 0;
    padding: 0 10px;
    display: flex;
    gap: 10px;
    align-items: center;

  }
`;
