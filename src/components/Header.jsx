import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import ImgModal from "./ImgModal";
import PostModal from "./PostModal";


const Header = () => {
  const navigate = useNavigate()

  const [modal, setModal] = useState(false)

  const [modal2, setModal2] = useState(false)
  const [selectedPic, setSelectedPic] = useState(false)
  const [getImgUrl, setGetImgUrl] = useState("")


  const logOut = () => {
    sessionStorage.clear();
    // cookies.remove("refresh-token");
    alert("로그아웃 되었습니다.")
    window.location.replace("/");
  }

  return (
    <HeaderWrap>
      <div className="nav-wrapper">
        <img src="img/logo.PNG" className="brand-img" alt="" />
        <input type="text" className="search-box" placeholder="검색" />
        <div className="nav-items">
          <img src="img/home.PNG" className="icon" alt="" />
          <img src="img/messenger.PNG" className="icon" alt="" />
          <img src="img/add.PNG" className="icon" alt="" onClick={() => {setModal(!modal)}}/>
          <img src="img/explore.PNG" className="icon" alt="" />
          <img src="img/like.PNG" className="icon" alt="" />
          
          <ProfileImg onClick={()=>{navigate('/profile')}} src="https://i.pinimg.com/236x/9d/4c/8a/9d4c8a19d4931f6619afa0f6681d81ba.jpg" alt="" />
        
          <div className="icon user-profile"></div>
        </div>
        <button onClick={logOut}>로그아웃</button>
      </div>

      {/* Displaying double-Modal for file-upload and posting */}
      {modal? <ImgModal modal={modal} setModal={setModal} modal2={modal2} setModal2={setModal2} setSelectedPic={setSelectedPic}/> : ''}
      {modal2? <PostModal modal2={modal2} setModal2={setModal2} selectedPic={selectedPic}/> : ''}

    </HeaderWrap>


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

  .nav-wrapper{
    width: 70%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand-img{
    height: 100%;
    margin-top: 5px;
}

.search-box{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 25px;
    background: #fafafa;
    border: 1px solid #dfdfdf;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    text-transform: capitalize;
}

.search-box::placeholder{
    color: rgba(0, 0, 0, 0.5);
}

.nav-items{
    height: 24px;
    position: relative;
}

.icon{
    height: 100%;
    cursor: pointer;
    margin: 0 10px;
    display: inline-block;
}

.user-profile{
    width: 22px;
    border-radius: 50%;
    /* background-image: url(img/profile-pic.png); */
    background-size: cover;
}

`;


const ProfileImg = styled.img`
  margin-left: 15px;
  border: 1px solid #dfdfdf;
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;