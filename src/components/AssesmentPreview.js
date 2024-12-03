import React from 'react';
import Title from './Title'
import Block from './Block'

import BackToDashBoard from './BackToDashBoard';
import carpentry from '../images/carpentry.png'
import garden from "../images/garden.png"
import welding from "../images/welding.png"
import healthcare from "../images/healthcare.png"


const AssesmentPreview = () => {
  const titleinfo1 ={
    text: "Get certified with your first course here"
  }
  const blockInfo1 = {
    text: 'Green Farming',
    image: garden,
    onClick: () =>{
      console.log("Logged out");
      window.location.href = "/assesment_garden"
      },
      info: "This is the tooltip text for the info icon",
  };
  const blockInfo2 = {
    text: 'Carpentry',
    image: carpentry,
    onClick: () =>{
      console.log("Logged out");
      window.location.href = "/assesment_carpentry"
      },
    info: "This is the tooltip text for the info icon",
  };
  const blockInfo3 = {
    text: 'Welding',
    image: welding,
    onClick: () => alert('Second block button clicked!'),
    info: "This is the tooltip text for the info icon",
  };
  const blockInfo4 = {
    text: 'Health Care',
    image: healthcare,
    onClick: () =>{
      console.log("Logged out");
 window.location.href = "/assesment_health"
},
    info: "This is the tooltip text for the info icon",
  };
  return (
    <div className="parent-container">
      <Title titleInfo={titleinfo1}/>
      <div className="align-btn">
        <BackToDashBoard />
      </div>
      <div className='dashboard'>
      <Block boxInfo={blockInfo1}/>
      <Block boxInfo={blockInfo2}/>
      <Block boxInfo={blockInfo3}/>
      
      </div>
      <div className='dashboard'>
      <Block boxInfo={blockInfo4}/>
  
      
      </div>
     

    </div>
  );
};

export default AssesmentPreview;
