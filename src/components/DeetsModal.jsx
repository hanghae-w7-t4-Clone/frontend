import React, { useEffect, useState } from 'react';

// styled-component
import styled from "styled-components";

import CloseButton from 'react-bootstrap/CloseButton';

// Redux
import { useSelector } from 'react-redux';
import {postCmtThunk} from "../redux/modules/commentSlice";

const DeetsModal = (props) => {

    // Hook 
    const [comment, setComment] = useState("")

    // Retrieving user profile
    const userProf = useSelector((state) => state.profile);
  
    console.log("Hello userProf Check " + JSON.stringify(userProf.profPics))
    
    const onChangeHandler = (e) => {
        setComment(e.target.value)
      };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Hello checking here !")
    };

    // If-statement for modal
    if(!props.show){
        return null
    }

    return (
 
        <ModalCon>
                {console.log("Checking " + comment)}
            <ModalContent>
                <ModalLeft>
                    <ModalImg src={props.img} alt="modalPic" />
                </ModalLeft>
                <ModalRight>
                    <ModalHeader>
                        <Img src={userProf.profInfo.profilePhoto} alt="modalUserPic" />
                        <ModalTitle>{userProf.profInfo.nickname}</ModalTitle>
                    </ModalHeader>
                    <ModalBody>           
                    </ModalBody>
                    <ModalFooter>
                    <form onClick={onSubmitHandler}>
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
    height: 12%;
    float: left;
    position: absolute;
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
    height: 10%;
    display: flex;
`;

const ModalFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 3%;
    right: 0;
    border-top: 0.5px solid grey;
`;

const ModalTitle = styled.h4`
    font-size: 1.2em;

    margin: 0;
    float: left;
    top: 4.5%;
    left: 19%;
    position: absolute;

`;

const ModalBody = styled.div`
    padding: 30px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
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

const ModalImg = styled.img`
     width:100%;
     height:100%;
     object-fit:cover;
`