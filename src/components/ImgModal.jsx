import React, {useState } from "react";
import styled from "styled-components";
import CloseButton from "react-bootstrap/CloseButton";

const ImgModal = ({ modal, modal2, setModal, setModal2, setSelectedPic}) => {

  // if(!modal){
  //   return null
  // }

  const initialState = {
    imgUrls : '' 
  };

  // Hook to save file
  const [attachment, setAttachment] = useState("");

  const saveFileImage = (e) => {
    setAttachment(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0])
  };

  const nextModal = () => {
    setModal2(!modal2)
    setSelectedPic(attachment)
  }

  // 저장함수
  const onPostingHandler = async (e) => {
    // if (
    //   upLoad.title === "" ||
    //   upLoad.descript === ""
    // ) {
    //   alert("빈칸을 다 채워주세요.");
    //   return;
    // }
    e.preventDefault();
    let frm = new FormData();
    let postimage = document.getElementById("img_file");
    // frm.append(
    //   "data",
    //   new Blob([JSON.stringify(upLoad)], { type: "application/json" })
    // );
    console.log(postimage)
    frm.append("image", postimage.files[0]);
    console.log(frm)
      // try {
      //   const response = await dispatch(postPostThunk(frm))
      //   if(response){
      //     alert("글작성 성공");
      //     navigate(`/`)
      //   }
      // }
      // catch (error){
      //   console.log(error)
      // }
  };


  return (
    <ModalCon>
      {/* { console.log("Checking postimage " + JSON.stringify(postimage))} */}
      {/* {console.log("Checking attachment " + attachment)} */}
      
      <ModalBox>
      <Img src={attachment} alt="hello this is img"/> 
        <h1>this is first modal</h1>      
        <form encType="multipart/form-data" onSubmit={onPostingHandler}>
        <h3>Modal</h3>
        <input type="file" id="img_file" accept="image/*" onChange={saveFileImage}/>
        <button type="submit" onClick={() => {nextModal(!modal2)}} >다음</button>
        </form>
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
  width: 60%;
  height: 60%;
`