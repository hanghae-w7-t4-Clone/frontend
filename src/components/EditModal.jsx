import React, { useState } from "react";
import styled from "styled-components";
import CloseButton from "react-bootstrap/esm/CloseButton";
import { TbDots } from "react-icons/tb";

const EditModal = ({ editModal, setEditModal, content }) => {
  const [uModal, setUModal] = useState(false);
  const [text, setText] = useState(content);

  console.log(content.content);
  console.log(content.id);

  const myProfileImg = sessionStorage.getItem("profileImg");
  const myNickname = sessionStorage.getItem("nickname");

  const onChangehandler = () => {};

  if (!editModal) {
    return "";
  }
  // {modal ? <ImgModal modal={modal} setModal={setModal} modal2={modal2} setModal2={setModal2} setSelectedPic={setSelectedPic} /> : ""}
  return (
    <ModalCon>
      {!uModal ? (
        <ModalBox>
          <MenuBtn onClick={() => setUModal(!uModal)}>수정</MenuBtn>
          <MenuBtn style={{ color: "red" }}>삭제</MenuBtn>
        </ModalBox>
      ) : (
        <ModalFormBox>
          <ModalTop>
            <div>취소</div>
            <div>정보 수정</div>
            <Bluebtn type="submit">완료</Bluebtn>
          </ModalTop>

          <ModalBottom>
            <ModalLeft>
              <ModalImg alt="modalPic" />
            </ModalLeft>

            <ModalRight>
              <div>
                <ModalHeader>
                  <NickProf>
                    <ProfileImg src={myProfileImg} alt="modalUserPic" />
                    <ModalNick>{myNickname}</ModalNick>
                  </NickProf>
                </ModalHeader>

                <ModalBody>
                  <div>
                    <TextArea value={content.content} type="text" placeholder="코멘트를 작성해주세요" />
                    <button type="submit">Post</button>
                  </div>
                </ModalBody>
              </div>

              <ModalFooter></ModalFooter>
            </ModalRight>
          </ModalBottom>
        </ModalFormBox>
      )}
      <CloseButton
        style={{ position: "absolute", top: 0, right: 0, width: "50px", height: "50px", padding: 0 }}
        onClick={() => {
          setEditModal(!editModal);
          setUModal(!uModal);
        }}
      />
    </ModalCon>
  );
};

export default EditModal;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  border: none;
  margin-top: 15px;
`;

const Bluebtn = styled.button`
  border: none;
  background-color: #FFF;
  color: #3baef8;
  font-weight: bold;

`

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
`;

const ModalBox = styled.div`
  width: 300px;
  /* height: 200px; */
  background-color: #fff;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  gap: 20px;
`;

const ModalFormBox = styled.div`
  width: 70%;
  height: 70%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const ModalBottom = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const MenuBtn = styled.button`
  border: none;
  width: 100%;
  background-color: #fff;
`;

const ModalRight = styled.div`
  box-sizing: border-box;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;

const ModalFooter = styled.div`
  border-top: 0.5px solid grey;
`;

const ModalNick = styled.div``;

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
