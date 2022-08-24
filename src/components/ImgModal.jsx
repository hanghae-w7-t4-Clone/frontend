import React, { useState, useRef } from "react";
import styled from "styled-components";
import CloseButton from "react-bootstrap/CloseButton";
import { useDispatch } from "react-redux";
import { __imgPostsThuck } from "../redux/modules/postSlice.js";

const ImgModal = ({ modal, modal2, setModal, setModal2, setSelectedPic }) => {
  
  // Redux
  const dispatch = useDispatch();

  // useRef
  const fileInputRef = useRef();

  // Hook to save file
  const [upload, setUpload] = useState(false)
  const [attachment, setAttachment] = useState("");
  const [sendImg, setSendImg] = useState("")

  // Initializing FormData to upload a file
  // let frm = new FormData();
  // let postimage 

  const saveFileImage = (e) => {
    setAttachment(URL.createObjectURL(e.target.files[0]));
    // setSendImg(e.target.files[0])
    // postimage = document.getElementById("img_file");
    // frm.append("photoList", postimage.files[0]);
    setUpload(true)
  };

  // enabling 1st modal to 2nd modal
  const nextModal = () => {
    setModal2(!modal2);
    setModal(!modal);
    setSelectedPic(attachment);
  };

  // Sending a img to server
  const onPostingHandler = async (e) => {
    e.preventDefault();
    let frm = new FormData();
    let postimage = document.getElementById("img_file");

    frm.append("photoList", postimage.files[0]);
    // let frm = new FormData();
    // frm.append("photoList", [sendImg]);

    dispatch(__imgPostsThuck(frm));

    nextModal(!modal2);
  };

  return (
    <ModalCon>
      {/* { console.log("Checking postimage " + JSON.stringify(postimage))} */}
      {/* {console.log("Checking attachment " + attachment)} */}

      <ModalBox>
        {/* <Img src={attachment} alt="hello this is img"/>  */}
        {/* <h1>this is first modal</h1> */}

        {/* {!upload ?  */}
         <ImgForm encType="multipart/form-data" onSubmit={onPostingHandler}>
        
          {!upload?
          <> 
            <Img src="img/uploadpic.PNG" alt="default picture" />
            <ImgBtn type="button" onClick={() => fileInputRef.current.click()}>
              Upload a file
            </ImgBtn>
            </>
            :
            <><Img src={attachment} alt="default picture" /></>
            }
          <input
            onChange={saveFileImage}
            ref={fileInputRef}
            type="file"
            id="img_file"
            accept="image/*"
            hidden
          />
          <NextBtn type="submit">다음</NextBtn>
          </ImgForm>
          {/* : 
         <ImgForm encType="multipart/form-data" onSubmit={onPostingHandler}>
         <Img src={attachment} alt="preview picture"/>
         <NextBtn type="submit">작성하기</NextBtn>
       </ImgForm> */}
       {/* } */}
        
      </ModalBox>

      {/* modal => true */}
      <CloseButton
        onClick={() => {
          setModal(!modal);
          setUpload(false);
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

export default ImgModal;

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
  /* margin: auto;
  display: flex; */
  width: 40%;
  height: 40%;

  /* text-align:center;
  justify-content: center; */
  /* top: 50%;
  left: 50%;
  position: absolute; */
`;

const ImgCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  flex-direction: column;
`

const ImgForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  flex-direction: column;
  position: relative;
`;

const UploadCon = styled.div`
  /* display: flex;
   justify-content: center;
   align-items: center; */
  /* top: 50%;
   left: 50%;
   position: absolute; */
`;

const ImgBtn = styled.button`
  width: 135px;
  height: 30px;
  /* top: 50%;
  left: 40%;;
  position: absolute; */
`;
const NextBtn = styled.button`
  top: 0;
  right: 0;
  position: absolute;
  margin: auto;
  width: 15%;
  height: 9%;
  font-size: 1rem;
`;
