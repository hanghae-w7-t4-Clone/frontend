import React, { useEffect, useState } from 'react';

// styled-component
import styled from "styled-components";

import CloseButton from 'react-bootstrap/CloseButton';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {postCmtThunk, getCmtThunk} from "../redux/modules/commentSlice";


const DeetsModal = (props) => {

    // Getting user's Img & Nickname
    const myProfileImg = sessionStorage.getItem("profileImg");
    const myNickname = sessionStorage.getItem("nickname");

    // Using dispatch
    const dispatch = useDispatch();

    // Hook 
    const [comment, setComment] = useState("")

    // Retrieving user profile
    const userProf = useSelector((state) => state.profile);
    const cmtList = useSelector((state) => state.comment)

    useEffect(() => {
        getCmtThunk(props.cardId)
        // console.log("this is useEffect");
      }, [dispatch]);
    
    // console.log("Checking props ", props)
    console.log("Checking getCmt ", cmtList)
    
    // OnChange for Comment  
    const onChangeHandler = (e) => {
        setComment(e.target.value)
      };

    // console.log("Checking ", props)

    // Submittion handler for Comment
    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(postCmtThunk({"cardId": props.cardId, "content": comment}))
        console.log("Hello checking here !")
        setComment("")
    };

    // If-statement for modal
    if(!props.show){
        return null
    }

    return (
        <ModalCon>
            {/* {console.log("Check getCmt ", cmtList.commentInfo)} */}
            <ModalContent>
                <ModalLeft>
                    <ModalImg src={props.img} alt="modalPic" />
                </ModalLeft>
                <ModalRight>
                    <ModalHeader>
                        <ImgProf src={userProf.profInfo.profilePhoto} alt="modalUserPic" />
                        <ModalTitle>{userProf.profInfo.nickname}</ModalTitle>
                    </ModalHeader>
                    <ModalBody>  
                        { cmtList.commentInfo.length !==0 && cmtList.commentInfo.map((cmt) => {
                            // console.log("Checking cmt ", cmt)
                            return(
                                <ImgCon>
                                <Img src={cmt.profilePhoto} alt="modalUserPic" />
                                <BodyNic>{cmt.nickname}</BodyNic> 
                                <BodyCmt>{cmt.content}</BodyCmt>         
                                </ImgCon>
                            )
                        })}       
 
                    </ModalBody>
                    <ModalFooter>
                    <form onSubmit={onSubmitHandler}>
                        <input 
                            type="text"
                            placeholder="코멘트를 작성해주세요"
                            name="comment"
                            value={comment}
                            onChange={onChangeHandler}
                        /> 
                        <button type="submit">Post</button>
                    </form>
                    </ModalFooter>
                </ModalRight>
            </ModalContent>
            <CloseButton 
                style={{position:"absolute", top:0, right:0, width: "50px", height: "50px", padding: 0}}
                onClick={props.onClose}
            />
        </ModalCon>
    );
};

export default DeetsModal;

const Img = styled.img`
    display: block;
    border-radius: 50%;
    width: 12%;
    height: 95%;
`

const ImgProf = styled.img`
    display: block;
    border-radius: 50%;
    width: 12%;
    height: 100%;
`

const ImgCon = styled.div`
    padding: 1%;
    display: flex;             
    flex-direction: row;
    gap: 2%
`

const ModalCon = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;   
`;

const ModalContent = styled.div`
    width: 70%;
    height: 70%;
    background-color: #fff;
    display: flex;
`;

const ModalHeader = styled.div`
    width: 100%;
    height: 14%;
    display: flex;
    gap: 3%;
`;

const ModalFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 3%;
    right: 0;
    border-top: 0.5px solid grey;
`;

const ModalTitle = styled.div`
    font-size: 0.8em;

    margin: 0;
    /* float: left; */
    top: 10%;
    position: relative;
    font-weight: bold;

`;

const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1%;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    font-size: 0.8rem;
    overflow: scroll;
`;

const BodyNic = styled.div`

`
const BodyCmt = styled.div`
    
`

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

const ModalImg = styled.img`
     width:100%;
     height:100%;
     object-fit:cover;
`