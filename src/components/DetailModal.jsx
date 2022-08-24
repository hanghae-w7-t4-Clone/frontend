import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CloseButton from "react-bootstrap/CloseButton";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { postCmtThunk } from "../redux/modules/commentSlice";
import { __getDetailThuck } from "../redux/modules/postSlice";
import { TbDots } from "react-icons/tb";
import { BsHeartFill, BsHeart } from "react-icons/bs";

const DeetsModal = (props) => {
  const defaultProfileImg = "img/basicprofile.png";
  
  const [isLike, setIslike] = useState(false);
  const [comment, setComment] = useState("");

  const likeHander = () => {
    setIslike(!isLike);
  };
  
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Hello checking here !");
  };

  if (!props.show) {
    return '';
  }

  return (
    <ModalCon>
      {console.log("Checking " + comment)}
      <ModalBox>

        <ModalLeft>
          <ModalImg src={props.detail.imgUrlList[0]} alt="modalPic" />
        </ModalLeft>

        <ModalRight>
          <div>
          <ModalHeader>
            <NickProf>
              <ProfileImg src={!props.detail.profilePhoto ? defaultProfileImg : props.detail.profilePhoto} alt="modalUserPic" />
              <ModalNick>{props.detail.nickname}</ModalNick>
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
                    <ProfileImg src={el.profilePhoto}/>
                    <div>{el.nickname}</div>
                    <div>{el.content}</div>
                    <div onClick={likeHander}>{isLike === true ? <BsHeartFill size="24" color="#ff0000" /> : <BsHeart size="24" />}</div>
                    <div></div>
                  </CommentInfo>)
              })}
            </CommentsWrap>
          </ModalBody>
          </div>

          <ModalFooter>
            <form onClick={onSubmitHandler}>
              <input type="text" placeholder="코멘트를 작성해주세요" name="comment" value={comment} onChange={onChangeHandler} />
              <button type="submit">Post</button>
            </form>
          </ModalFooter>
        </ModalRight>
      </ModalBox>
      <CloseButton style={{ position: "absolute", top: 0, right: 0, width: "50px", height: "50px", padding: 0 }} onClick={props.onClose} />
    </ModalCon>
  );
};

export default DeetsModal;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
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
