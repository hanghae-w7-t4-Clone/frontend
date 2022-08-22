import React, {useState } from "react";
import styled from "styled-components";
import CloseButton from "react-bootstrap/CloseButton";

const Modal = ({ modal, setModal}) => {

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
  };

  function readURL(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('preview').src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      document.getElementById('preview').src = "";
    }
  }

  console.log(modal)
  return (
    <ModalCon>
      <ModalBox>
        <h3>Modal</h3>
        <input type="file" id="ex_file" accept="image/*" onChange={readURL(this)}/>
        <img id="preview" alt="" />
        <button>다음</button>
      </ModalBox>
      
      {/* modal => true */}
      <CloseButton onClick={() => {setModal(!modal)}} style={{ position: "absolute", top: 0, right: 0, width: "50px", height: "50px", padding: 0}}/>
    </ModalCon>
  );
};

export default Modal;

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
`
