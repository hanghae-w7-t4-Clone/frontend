import styled from "styled-components";
import React from 'react';

import CloseButton from "react-bootstrap/CloseButton";

const PostModal = () => {
    return (
        <ModalCon>
        {/* { console.log("Checking postimage " + JSON.stringify(postimage))} */}
        {/* {console.log("Checking attachment " + attachment)} */}
        
        <ModalBox>
        <Img alt="hello this is img"/> 
          <h1>Hello this is modal2</h1>      
          <form encType="multipart/form-data">
          <h3>Modal</h3>
          <input type="file" id="img_file" accept="image/*"/>
          <button type="submit">다음</button>
          </form>
        </ModalBox>
  
        {/* modal => true */}
        <CloseButton style={{ position: "absolute", top: 0, right: 0, width: "50px", height: "50px", padding: 0}}/>
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
`
