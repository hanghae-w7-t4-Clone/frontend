import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CloseButton from "react-bootstrap/CloseButton";
import { FaRegSmile } from "react-icons/fa";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { postCmtThunk } from "../redux/modules/commentSlice";
import { __getDetailThuck } from "../redux/modules/postSlice";
import { TbDots } from "react-icons/tb";
import { BsHeartFill, BsHeart } from "react-icons/bs";

const DetailModal = (props) => {
  const defaultProfileImg = "img/basicprofile.png";
  
  const [isLike, setIslike] = useState(false);
  const [comment, setComment] = useState("");
  const [udModal , setUdModal] = useState(false)

  const likeHander = () => {
    setIslike(!isLike);
  };
  
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();


  };

  if (!props.show) {
    return '';
  }

  return (
    <ModalCon>
      
      <ModalBox>

        <ModalLeft>
          <ModalImg src={props.detail.imgUrlList[0]} alt="modalPic" />
        </ModalLeft>

        <ModalRight>
          <div>
          <ModalHeader>
            <NickProf>
              <ProfileImg src={!props.detail.profilePhoto ? defaultProfileImg : props.detail.profilePhoto} alt="modalUserPic" />
              <ModalNick><b>{props.detail.nickname}</b></ModalNick>
            </NickProf>
            <TbDots/>
          </ModalHeader>

          <ModalBody>
            <ModalContent>
              <ProfileImg src={!props.detail.profilePhoto ? defaultProfileImg : props.detail.profilePhoto} alt="modalUserPic" />
              <div>{props.detail.content}</div>
            </ModalContent>
            <CreatedDate>{props.detail.createdAt.split('T')[0].split('-').join(".")}</CreatedDate>
            {/* <div>{props.detail.place}</div> */}
            <CommentsWrap>
              {props.detail.commentResponseDto.map((el)=>{
                return (
                  
                  <CommentInfo key={el.id}>
                    <CommentDiv>
                      <ProfileImg src={el.profilePhoto}/>
                      <div><b>{el.nickname}</b></div>
                      <div>{el.content}</div>
                    </CommentDiv>
                    <div onClick={likeHander}>{isLike === true ? <BsHeartFill size="18" color="#ff0000" /> : <BsHeart size="18" />}</div>
                  </CommentInfo>)
              })}
            </CommentsWrap>
          </ModalBody>
          </div>

          <ModalFooter>
            <CommentForm onClick={onSubmitHandler}>
              <BottomDiv>
                <FaRegSmile size='24'/>
                <input type="text" placeholder="코멘트를 작성해주세요" name="comment" value={comment} onChange={onChangeHandler} />
              </BottomDiv>
              <button type="submit">게시</button>
            </CommentForm>
          </ModalFooter>
        </ModalRight>
      </ModalBox>
      <CloseButton style={{ position: "absolute", top: 0, right: 0, width: "50px", height: "50px", padding: 0 }} onClick={props.onClose} />
    </ModalCon>
  );
};

export default DetailModal;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;

const CommentDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
const ModalCon = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  padding-top: 15px;
  padding-bottom: 20px;
  display: flex;
  gap: 10px;
  
`
const CreatedDate = styled.div`
  color: gray;
  margin-bottom: 15px;
  font-size: 13px;
`
const CommentsWrap = styled.div`
`

const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  justify-content: space-between;
`

const ModalRight = styled.div`
  box-sizing: border-box;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalBox = styled.div`
  width: 70%;
  height: 70%;
  background-color: #fff;
  display: flex;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
  
`;

const NickProf = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

`

const ModalFooter = styled.div`
  border-top: 0.5px solid grey;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomDiv = styled.div`
  width: 80%;
  display: flex;
  gap: 10px;

  input {
    width: 100%;
    border: none;
  }
`

const CommentForm = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background-color: #fff;
    color: #3baef8;
    font-weight: bold;
  }
`;

const ModalNick = styled.div`

`;

const ModalBody = styled.div`
  border-top: 1px solid #eee;
  padding: 0 16px;
`;

const ModalLeft = styled.div`
  flex: 45%;
  padding: 2% 0 2% 0;
  background-color: black;
`;


const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
