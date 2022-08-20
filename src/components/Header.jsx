import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <div class="nav-wrapper">
        <img src="img/logo.PNG" class="brand-img" alt="" />
        <input type="text" class="search-box" placeholder="검색" />
        <div class="nav-items">
          <img src="img/home.PNG" class="icon" alt="" />
          <img src="img/messenger.PNG" class="icon" alt="" />
          <img src="img/add.PNG" class="icon" alt="" />
          <img src="img/explore.PNG" class="icon" alt="" />
          <img src="img/like.PNG" class="icon" alt="" />
          <div class="icon user-profile"></div>
        </div>
      </div>
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
    height: 22px;
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
