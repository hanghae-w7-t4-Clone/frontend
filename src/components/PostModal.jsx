import styled from "styled-components";
import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { __sendPostsThuck } from "../redux/modules/postSlice";

import CloseButton from "react-bootstrap/CloseButton";

const PostModal = ({modal2, setModal2, selectedPic }) => {
  
  const userNickname = sessionStorage.getItem("nickname")
  const userImgUrl = sessionStorage.getItem("imgUrl")

  // Dispatch
  const dispatch = useDispatch();

  const [post, setPost] = useState({
    content: "",
    place: "",
  });

  const postInfo = useSelector((state) => state.posts);

  // console.log("Checking postInfo " + JSON.stringify(postInfo.postImgUrl[0]));
  // console.log(typeof postInfo.postImgUrl[0])

  const onSignUpHandler = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
    // console.log("This is content " + post.content)
    // console.log("This is place" + post.place)
  };

  const submitPostInfo = (e) => {
    e.preventDefault();
    dispatch(
      __sendPostsThuck({
        imgUrlList: [postInfo.postImgUrl[0]],
        content: post.content,
        place: post.place,
      })
    )
    setModal2(!modal2);

  };

  return (
    <ModalCon>
      <ModalContent>
      <ModalLeft>
      <Img src={selectedPic} alt="hello this is img" />
      </ModalLeft>
      <ModalRight>
      {/* <ModalBox> */}
        <PostForm onSubmit={submitPostInfo}>
          <ModalHeader>
            <PostImg src={userImgUrl} alt="" />
            <div>{userNickname}</div>
          </ModalHeader>
          <ModalBody>
          <ModalInContent
            size="30"
            placeholder="content"
            name="content"
            onChange={onSignUpHandler}
          >
          </ModalInContent>
          <input placeholder="place" name="place" onChange={onSignUpHandler} />
          </ModalBody>
          <ShareBtn type="submit">공유하기</ShareBtn>
        </PostForm>
      {/* </ModalBox> */}
      </ModalRight>
      {/* modal => true */}
      <CloseButton
        onClick={() => {
          setModal2(!modal2);
        }}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50px",
          height: "50px",
          padding: 0,
        }}
      />
      </ModalContent>
    </ModalCon>
  );
};

export default PostModal;

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

const ModalHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 16px;
`;

const ModalBody = styled.div`
  
`

const ModalInContent = styled.textarea`
  
`

const ModalContent = styled.div`
    width: 70%;
    height: 70%;
    background-color: #fff;
    display: flex;
`;

const ModalLeft = styled.div`
    flex: 45%;
    padding: 2% 0 2% 0;
    background-color: black;
`;

const ModalRight = styled.div`
    flex: 55%;
    padding: 1% 1% 1% 2%;
    position: relative;
`;

const ShareBtn = styled.button`
  top: 0;
  right: 0;
  position: absolute;
  margin: auto;
  width: 20%;
  height: 9%;
  font-size: 1rem;
`

// const ModalBox = styled.div`
//   width: 70%;
//   height: 70%;
//   background-color: #fff;
//   display: flex;
// `;

const PostForm = styled.form`
  width: 100%;
  height: 100%;
`

const Img = styled.img`
    /* width:100%;
    height:100%;
    object-fit:cover; */
    max-width: 100%;
    max-height: 100%;
    display: block; 
`;

const PostImg = styled.img`
  border: 1px solid #dfdfdf;
  border-radius: 50%;
  width: 32px;
  height: 32px;
`


