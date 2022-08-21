import React from 'react'
import styled from "styled-components";
import ProfInfo from '../components/ProfInfo'
import ProfPics from '../components/ProfPics';



const Profile = () => {
  return (
    <BodyCon>
    <ProfInfo></ProfInfo>
    <ProfPics></ProfPics>
    </BodyCon>
  )
}

export default Profile

const BodyCon = styled.div`
    font-family: "Open Sans", Arial, sans serif;
    min-height: 100vh;
    background-color: #fafafa;
    color: #262626;
    padding-bottom: 3rem;
`