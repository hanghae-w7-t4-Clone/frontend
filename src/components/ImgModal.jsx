import React, {useState, useRef} from "react";
import styled from "styled-components";
import CloseButton from "react-bootstrap/CloseButton";
import { useDispatch} from "react-redux";
import {__imgPostsThuck} from "../redux/modules/postSlice.js";

const ImgModal = ({ modal, modal2, setModal, setModal2, setSelectedPic}) => {

  // Redux
  const dispatch = useDispatch();

  // useRef
  const fileInputRef=useRef();


  // Hook to save file
  const [attachment, setAttachment] = useState("");

  const saveFileImage = (e) => {
    setAttachment(URL.createObjectURL(e.target.files[0]));
  
  };

  // enabling 1st modal to 2nd modal
  const nextModal = () => {
    setModal2(!modal2)
    setModal(!modal)
    setSelectedPic(attachment)
  }

  // Send a img to server

  const onPostingHandler = async (e) => {
 
    e.preventDefault();
    let frm = new FormData();
    let postimage = document.getElementById("img_file");
 
    frm.append("photoList", postimage.files[0]);

    dispatch(__imgPostsThuck(frm))

    nextModal(!modal2)
  };


  return (
    <ModalCon>
      {/* { console.log("Checking postimage " + JSON.stringify(postimage))} */}
      {/* {console.log("Checking attachment " + attachment)} */}
      
      <ModalBox>
      {/* <Img src={attachment} alt="hello this is img"/>  */}
        {/* <h1>this is first modal</h1> */}
        <ImgForm onSubmit={onPostingHandler}>
        <FormCon>
        <Img src={attachment} alt=""></Img>
        {/* <Img src="img/upload.PNG" alt="" />   */}
        <ImgBtn type="button" onClick={()=>fileInputRef.current.click()}>Upload a file</ImgBtn>
        <input onChange={saveFileImage} ref={fileInputRef} type="file" id="img_file" accept="image/*" hidden/>    
        <NextBtn type="submit">다음</NextBtn>
        </FormCon>
        {/* <button type="button" onClick={() => {nextModal(!modal2)}}>다음으로</button> */}
        </ImgForm>
      </ModalBox>

      {/* modal => true */}
      <CloseButton onClick={() => {setModal(!modal)}} style={{ position: "absolute", top: 0, right: 0, width: "50px", height: "50px", padding: 0}}/>
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
  margin: auto;
  display: flex;
  width: 20%;
  height: 20%;
  position: absolute;
  text-align:center;
  justify-content: center;
  top: 50%;
  left: 50%;

`
const ImgForm = styled.form`
  width: 100%;
  /* display: flex;
  justify-content: center;
  position: relative; */
  /* display: inline-block; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const FormCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImgBtn = styled.button`
  width: 135px;
  height: 30px;
  top: 0;
  left: 0;
  position: relative;
  `

  const NextBtn = styled.button`
   top:0;
   right:0;
   position: absolute;
  `


