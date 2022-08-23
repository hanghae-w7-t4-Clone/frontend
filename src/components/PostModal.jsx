import styled from "styled-components";
import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { __sendPostsThuck } from "../redux/modules/postSlice";

import CloseButton from "react-bootstrap/CloseButton";

const PostModal = ({ modal2, setModal2, selectedPic }) => {
  
  // Dispatch
  const dispatch = useDispatch();

  const [post, setPost] = useState({
    content: "",
    place: ""
  });

  const postInfo = useSelector((state) => state.posts);

  console.log("Checking postInfo " + JSON.stringify(postInfo.postImgUrl[0]));
  console.log(typeof postInfo.postImgUrl[0])

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
        place: post.place
      })
    )
  };

  return (
    <ModalCon>
      <ModalBox>
        <Img src={selectedPic} alt="hello this is img" />
        <h1>Hello this is modal2</h1>
        <form onSubmit={submitPostInfo}>
          <h3>Modal</h3>
          <input
            placeholder="content"
            name="content"
            onChange={onSignUpHandler}
          />
          <input placeholder="place" name="place" onChange={onSignUpHandler} />
          <button type="submit">Post</button>
        </form>
      </ModalBox>

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

const ModalBox = styled.div`
  width: 70%;
  height: 70%;
  background-color: #fff;
  display: flex;
`;

const Img = styled.img`
  width: 60%;
  height: 60%;
`;
