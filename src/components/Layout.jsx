import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsChat, BsHeartFill, BsHeart } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { TbDots } from "react-icons/tb";
import { FaRegSmile } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { __getDetailThuck, __getPostsThuck, __getRecommendThuck } from "../redux/modules/postSlice.js";
import DetailModal from "./DetailModal.jsx";
import UpdateModal from "./UpdateModal.jsx";
import EditModal from "./EditModal.jsx";

const Layout = () => {
  const posts = useSelector((state) => state.posts.posts);
  const detail = useSelector((state) => state.posts.detail);
  const recommend = useSelector((state) => state.posts.newUsers);

  console.log("Checking post ",posts);
  // console.log(detail);
  // console.log(recommend);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLike, setIslike] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState({
    content: "",
    id : ""
  })

  // const defalutImg = "https://i.pinimg.com/236x/9d/4c/8a/9d4c8a19d4931f6619afa0f6681d81ba.jpg";
  const myProfileImg = sessionStorage.getItem("profileImg");
  const myNickname = sessionStorage.getItem("nickname");

  const likeHander = () => {
    setIslike(!isLike);
  };

  useEffect(() => {
    dispatch(__getPostsThuck());
    dispatch(__getRecommendThuck());
    console.log("hello checking")
  }, [dispatch]);

  const getDetail = async (id) => {
    await dispatch(__getDetailThuck(id));
    setDetailModal(!detailModal);
  };


  const selectedHandler = (el) =>{
    console.log("Checking post content", el)
    setEditModal(!editModal)
    setSelectedContent({
      content: el.content,
      id: el.id
    })
  }

  

  return (
    <LayoutWrap>
      {console.log("This is return ", posts)}
      <CardsWrap>
        {posts.map((el) => {
          return (
            <>
            <Card key={el.id}>
              <TopWrap>
                <ProfileImgNickname>
                  <ProfileImg src={el.profilePhoto} alt="" />
                  <Nickname>{el.nickname}</Nickname>
                </ProfileImgNickname>
                <IconBox>
                  <TbDots onClick={()=>{selectedHandler(el)}}/>
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
                  <ProfileImgSmall src={myProfileImg} alt="" />

                  {el.likeCount !== 0 ? (
                    <span>
                      <b>{el.nickname}</b>님 외 {el.likeCount} 명이 좋아합니다.
                    </span>
                  ) : (
                    `제일 먼저 좋아요를 눌러보세요`
                  )}
                </LikeNameWrap>
                <NickConstentWrap>
                  <span>
                    <b>{el.nickname}</b>
                  </span>
                  <p style={{ width: "85%", margin: "0" }}>{el.content}</p>
                </NickConstentWrap>
                <RipleCnt
                  onClick={()=>getDetail(el.id)}
                >
                  {el.commentCount === 0 ? "댓글을 남겨보세요" : `댓글 ${el.commentCount}개 모두보기`}
                </RipleCnt>
                <RiplePost>
                  <span>
                    <b>{el.nickname}</b>
                  </span>
                  <span>{el.content}</span>
                </RiplePost>
                <PostDate>{el.createdAt.split("T").at(0) + " " + el.createdAt.split("T").at(1).split(".").at(0)}</PostDate>
                <RipleInputForm>
                  <FaRegSmile size="24" />
                  <input type="text" />
                  <button>게시</button>
                </RipleInputForm>
              </div>
            </Card>
             </>
          );
        })}
      {/* {console.log("this is render ", selectedContent)} */}
      <EditModal editModal={editModal} setEditModal={setEditModal} content={selectedContent} ></EditModal>
      <DetailModal detail={detail} show={detailModal} onClose={() => setDetailModal(false)}/>
      
      </CardsWrap>
      

      <RightBarWrap>
        <RightBarTop>
          <RiplePost>
            <ProfileImgBig src={myProfileImg} alt="" />
            <span>
              <b>{myNickname}</b>
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
          {recommend.map((el) => {
            return (
              <Recommended key={el.id}>
                <RiplePost>
                  <ProfileImg src={el.profilePhoto} alt="" />
                  <span>
                    <b>{el.nickname}</b>
                  </span>
                </RiplePost>
                <BlueBtn>팔로우</BlueBtn>
              </Recommended>
            );
          })}
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
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: #dfdfdf solid 1px;
  border-radius: 5px;
  margin-bottom: 20px;
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
  cursor: pointer;
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

const LoginErrWrap = styled.div`
  height: 100vh;
  margin: 90px auto 50px;
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;
`;

const LoginErr = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #fff;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
