import React, { useState } from "react";
import { useEffect } from 'react';

// component
import DeetsModal from "./DeetsModal";

// styled-component
import styled from "styled-components";

// Hook
import { useDispatch, useSelector } from 'react-redux';
import { getProfPicsThunk } from "../redux/modules/profileSlice";
import {getCmtThunk} from "../redux/modules/commentSlice";

const ProfPics = () => {
    
	// Hook for modal
	const [showModal, setShowModal] = useState(false);
	
	// Hook for selected post by user
	const [selectedProfPics, setSelectedProfPics] = useState({
		selectedImgSrc: '',
		selectedCardId: '',
	});

	// Getting nickname from sessionStorage
	const userNickname = sessionStorage.getItem("nickname")

	// Redux
	const dispatch = useDispatch()


	useEffect(() => {
	  dispatch(getProfPicsThunk(userNickname));
	}, []);
  
	const userProf = useSelector((state) => state.profile.profPics);
  
  	// console.log("Checking useSelector in ProfPics " + JSON.stringify(userProf))
    // console.log(userProf.map((e) => e))
	const imgClick = (imgSrc) => {
		// console.log("Checking imgSrc " + JSON.stringify(imgSrc))
		setSelectedProfPics({selectedCardId: imgSrc.id, selectedImgSrc: imgSrc.imgUrlList[0]});
		dispatch(getCmtThunk(imgSrc.id))
		setShowModal(true);
		// console.log("After checking " + JSON.stringify(selectedProfPics))
	}
	return (
        <main>
    {/* {console.log("After checking " + JSON.stringify(selectedProfPics))} */}
	<MainCon>

		<GallCon>
			{console.log("Checking")}
            { userProf.map((e) => {
                // console.log("Checking return "+ JSON.stringify(e))
                // console.log(e.imgUrlList[0])
                return(
                <GallItem key={e.id}>
				<ProfImg 
				  src={e.imgUrlList[0]}
				//   onClick={()=> {imgClick(e.target)}} 
				  onClick={()=> imgClick(e)} 	
				  alt="profilePic"
				/>
			    </GallItem>
                )
            })}

			<DeetsModal
			show={showModal}
			img={selectedProfPics.selectedImgSrc}
			id={selectedProfPics.selectedCardId}
			onClose={() => setShowModal(false)}
      		>
      		</DeetsModal>

		</GallCon>
	

		{/* <div class="loader"></div> */}

	</MainCon>
	

</main>
    );
};

export default ProfPics;

const MainCon = styled.div`
    max-width: 93.5rem;
    margin: 0 auto;
    padding: 0 2rem;
`

const GallCon = styled.div`
	display: flex;
    flex-wrap: wrap;
    margin: -1rem -1rem;
    padding-bottom: 3rem;
`

const GallItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  flex-wrap: wrap;

  padding: 30px 0 0 75px;
`
const ProfImg = styled.img`
	
	display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  gap:15px;

  width: 320px;
  height: 400px;
`