import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { getProfThunk } from "../redux/modules/profileSlice";

function UserProfile() {

  // Getting user nickname from sessionStorage
  const userNickname = sessionStorage.getItem("nickname")

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfThunk(userNickname));
  }, []);

  const userProf = useSelector((state) => state.profile);

// console.log("Checking useSelector " + JSON.stringify(userProf))
//   console.log("Checking useSelector length " + userProf.profile)

  return (
    <header>
      <HeadCon>
        {/* {console.log("Checking return " + JSON.stringify(userProf.profiles.length))} */}
        {userProf.profInfo.length !==0 &&
        <ProfileCon>
          <ProfileImg>
            <Img
              src={userProf.profInfo.profilePhoto}
              alt="userPic"
            />
          </ProfileImg>

          <InfoCon>
            <InfoH1>{userProf.profInfo.nickname}</InfoH1> 

             <span>{userProf.profInfo.name}</span>

            <InfoBtn>
              <i className="fas fa-cog" aria-hidden="true"></i>
            </InfoBtn>
          </InfoCon>
          <StatsCon>
            <ul>
              <StatsLi>
                <StatsCount>{userProf.profInfo.cardCount}</StatsCount> posts
              </StatsLi>
              {/* <StatsLi>
                <StatsCount>188</StatsCount> followers
              </StatsLi>
              <StatsLi>
                <StatsCount>206</StatsCount> following
              </StatsLi> */}
            </ul>
          </StatsCon>
          <BioCon>
            {/* <p>
              <BioName>Jane Doe</BioName> Lorem ipsum dolor
              sit, amet consectetur adipisicing elit 📷✈️🏕️
            </p> */}
          </BioCon>
        </ProfileCon>
          } 
      </HeadCon>
    </header>
  );
}

export default UserProfile;

const Img = styled.img`
    display: block;
    border-radius: 50%;
    width: 200px;
    height: 200px;

`
const HeadCon = styled.div`
    max-width: 93.5rem;
    margin: 0 auto;
    padding: 0 2rem;
`
const ProfileCon = styled.div`
  padding: 5rem 0;
  content: "";
  display: block;
  clear: both;

`
const ProfileImg = styled.div`
  float: left;
  width: calc(33.333% - 1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
`
const InfoCon = styled.div`
  float: left;
  width: calc(66.666% - 2rem);
`
const InfoH1 = styled.h1`
  margin-top: 1.1rem;
`
const EditBtn = styled.button`
    display: inline-block;
    font: inherit;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;

    font-size: 1.4rem;
    line-height: 1.8;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.3rem;
    padding: 0 2.4rem;
    margin-left: 2rem;
`

const InfoBtn = styled.button`
  display: inline-block;
  font: inherit;
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  cursor: pointer;

  font-size: 2rem;
  margin-left: 1rem;
`

const StatsCon = styled.div`
  margin-top: 2.3rem;
`
const StatsLi = styled.li`
  display: inline-block;
  font-size: 1.6rem;
  line-height: 1.5;
  margin-right: 4rem;
  cursor: pointer;
`
const StatsCount = styled.span`
  font-weight: 600;
`
const BioCon = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 2.3rem;
`
const BioName = styled.span`
  font-weight: 600;
`











           





