import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CloseButton from "react-bootstrap/CloseButton";

// Redux
import { useSelector } from "react-redux";
import { postCmtThunk } from "../redux/modules/commentSlice";

const DeetsModal = (props) => {
  const defaultProfileImg = "img/basicprofile.png";
  // Hook
  const [comment, setComment] = useState("");

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Hello checking here !");
  };

  if (!props.show) {
    return null;
  }

  return (
    <ModalCon>
      {console.log("Checking " + comment)}
      <ModalBox>
        <ModalLeft>
          <ModalImg src={props.detail.imgUrlList} alt="modalPic" />
        </ModalLeft>
        <ModalRight>
          <ModalHeader>
            <ProfileImg src={!props.detail.profilePhoto ? defaultProfileImg : props.detail.profilePhoto} alt="modalUserPic" />
            <ModalNick>{props.detail.nickname}</ModalNick>
          </ModalHeader>

          <ModalBody>
            <ModalContent>
              <ProfileImg src={!props.detail.profilePhoto ? defaultProfileImg : props.detail.profilePhoto} alt="modalUserPic" />
              <div>{props.detail.content}</div>
            </ModalContent>
            <div>{props.detail.createdAt}</div>
            <div>{props.detail.place}</div>
            <div>{props.detail.commentResponseDto}</div>
          </ModalBody>

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
  display: flex;
  gap: 10px;
  
`

const ModalRight = styled.div`
  box-sizing: border-box;
  width: 40%;
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
  align-items: center;
  gap: 10px;
  padding: 0 16px;
`;

const ModalFooter = styled.div`
  /* position: absolute;
  bottom: 0;
  width: 100%;
  padding: 3%;
  right: 0;
  border-top: 0.5px solid grey; */
`;

const ModalNick = styled.div`

`;

const ModalBody = styled.div`

  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
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
