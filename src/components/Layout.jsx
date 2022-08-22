import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsChat, BsHeartFill, BsHeart } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { TbDots } from "react-icons/tb";
import { FaRegSmile } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { __getPostsThuck } from "../redux/modules/postSlice.js";

const Layout = () => {
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLike, setIslike] = useState(false);
  const defalutImg = 'https://i.pinimg.com/236x/9d/4c/8a/9d4c8a19d4931f6619afa0f6681d81ba.jpg'

  const likeHander = () => {
    setIslike(!isLike);
  };

  useEffect(() => {
    dispatch(__getPostsThuck());
  }, [dispatch]);

  return (
    <LayoutWrap>
      <CardsWrap>
        {posts.map((el) => {
          return (
            <Card>
              <TopWrap>
                <ProfileImgNickname>
                  <ProfileImg src="https://i.pinimg.com/236x/9d/4c/8a/9d4c8a19d4931f6619afa0f6681d81ba.jpg" alt="" />
                  <Nickname>{el.nickname}</Nickname>
                </ProfileImgNickname>
                <IconBox>
                  <TbDots />
                </IconBox>
              </TopWrap>

              <ImgWrap>
                <ContentImg src={el.imgUrlList[0]} alt="" />
              </ImgWrap>
              <IconWrap>
                <div onClick={likeHander}>{isLike === true ? <BsHeartFill size="24" color="#ff0000" /> : <BsHeart size="24" />}</div>
                <BsChat size="24" />
                <FiSend size="24" />
              </IconWrap>
              <div>
                <LikeNameWrap>
                  <ProfileImgSmall src="https://i.pinimg.com/236x/9d/4c/8a/9d4c8a19d4931f6619afa0f6681d81ba.jpg" alt="" />
                  <span>
                    <b>여기에 닉네임</b>님
                  </span>{" "}
                  외 7명이 좋아합니다.
                </LikeNameWrap>
                <NickConstentWrap>
                  <span>
                    <b>닉네임</b>
                  </span>
                  <p style={{ width: "85%", margin: "0" }}>여기에 콘텐츠 내용 만약에 컨텐츠 내용이 길다면...</p>
                </NickConstentWrap>
                <RipleCnt>댓글 3개 모두보기</RipleCnt>
                <RiplePost>
                  <span>
                    <b>닉네임</b>
                  </span>
                  <span>여기에 댓글 내용</span>
                </RiplePost>
                <PostDate>게시된 날짜 표시</PostDate>
                <RipleInputForm>
                  <FaRegSmile size="24" />
                  <input type="text" />
                  <button>게시</button>
                </RipleInputForm>
              </div>
            </Card>
          );
        })}
      </CardsWrap>

      <RightBarWrap>
        <RightBarTop>
          <RiplePost>
            <ProfileImgBig src="https://i.pinimg.com/236x/9d/4c/8a/9d4c8a19d4931f6619afa0f6681d81ba.jpg" alt="" />
            <span>
              <b>닉네임</b>
            </span>
          </RiplePost>
          <BlueBtn>전환</BlueBtn>
        </RightBarTop>
        <RightBarMid>
          <div style={{ color: "gray" }}>회원님을 위한 추천</div>
          <div>
            <b>모두 보기</b>
          </div>
        </RightBarMid>

        <div>
          <Recommended>
            <RiplePost>
              <ProfileImg src="https://i.pinimg.com/236x/9d/4c/8a/9d4c8a19d4931f6619afa0f6681d81ba.jpg" alt="" />
              <span>
                <b>닉네임</b>
              </span>
            </RiplePost>
            <BlueBtn>팔로우</BlueBtn>
          </Recommended>
          <Recommended>
            <RiplePost>
              <ProfileImg src="https://i.pinimg.com/236x/9d/4c/8a/9d4c8a19d4931f6619afa0f6681d81ba.jpg" alt="" />
              <span>
                <b>닉네임</b>
              </span>
            </RiplePost>
            <BlueBtn>팔로우</BlueBtn>
          </Recommended>
          <Recommended>
            <RiplePost>
              <ProfileImg src="https://i.pinimg.com/236x/9d/4c/8a/9d4c8a19d4931f6619afa0f6681d81ba.jpg" alt="" />
              <span>
                <b>닉네임</b>
              </span>
            </RiplePost>
            <BlueBtn>팔로우</BlueBtn>
          </Recommended>
          <Recommended>
            <RiplePost>
              <ProfileImg src="https://i.pinimg.com/236x/9d/4c/8a/9d4c8a19d4931f6619afa0f6681d81ba.jpg" alt="" />
              <span>
                <b>닉네임</b>
              </span>
            </RiplePost>
            <BlueBtn>팔로우</BlueBtn>
          </Recommended>
        </div>

        <RightBarBottom>
          <div>소개. 도움말. 홍보 센터. API. 채용정보.</div>
          <div>개인정보처리방침. 약관. 위치. 언어</div>
          <div style={{ margin: "17px 0 0 0" }}>ⓒ2022 INSTAGRAM FROM META</div>
        </RightBarBottom>
      </RightBarWrap>
    </LayoutWrap>
  );
};

export default Layout;

const LayoutWrap = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  box-sizing: border-box;
  gap: 20px;

  height: 100vh;
  margin: 90px auto 50px;
  width: 100%;
  max-width: 1920px;
`;

const ProfileImgNickname = styled.div`
  display: flex;
  gap: 10px;
`;
const CardsWrap = styled.div`
  width: 470px;
  border: #dfdfdf solid 1px;
  border-radius: 5px;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
`;

const ProfileImg = styled.img`
  border: 1px solid #dfdfdf;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
const Nickname = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
`;
const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: #dfdfdf solid 1px;
  box-sizing: border-box;
  padding: 8px 4px 8px 12px;
`;
const ImgWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
`;

const ContentImg = styled.img`
  width: 100%;
  box-sizing: border-box;
  height: auto;
`;

const IconWrap = styled.div`
  height: 22px;
  display: flex;
  gap: 10px;
  margin-top: 4px;
  padding: 0 12px 6px 12px;
`;

const LikeNameWrap = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  gap: 10px;
  padding: 0 12px 6px 12px;
`;

const ProfileImgSmall = styled.img`
  border: 1px solid #dfdfdf;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
const ProfileImgBig = styled.img`
  border-radius: 50%;
  border: 1px solid #dfdfdf;
  width: 38px;
  height: 38px;
`;

const NickConstentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px 0 12px;
`;

const RipleCnt = styled.div`
  color: gray;
  height: 18px;
  font-size: 13px;
  padding: 6px 12px 6px 12px;
`;
const RiplePost = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px 6px 12px;
`;
const PostDate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px 6px 12px;
  font-size: 11px;
  color: gray;
`;

const RipleInputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 40px;
  border-top: 1px solid #dfdfdf;
  padding: 4px 12px 4px 12px;

  input {
    width: 360px;
    height: 18px;
    border: none;
    background-color: #fafafa;
  }

  button {
    border: none;
    background-color: #fafafa;
    font-weight: bold;
    color: #3baef8;
  }
`;

const BlueBtn = styled.div`
  border: none;
  background-color: #fafafa;
  font-weight: bold;
  color: #3baef8;
`;

const RightBarWrap = styled.div`
  width: 320px;
`;
const RightBarTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RightBarMid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0px 15px 12px;
`;
const RightBarList = styled.div``;
const Recommended = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RightBarBottom = styled.div`
  color: gray;
  font-size: 13px;
  margin: 30px 0px 15px 12px;
`;
