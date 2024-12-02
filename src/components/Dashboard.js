import React from 'react';
import Block from './Block';
import Logout from './Logout'
import Title from './Title'
import img3 from '../images/assesment.png';
import img2 from '../images/lab.png';
import img1 from '../images/learning.png'

const Dashboard = () => {
  const titleinfo1 ={
    text : "Welcome Learner"
  }
  const blockInfo1 = {
    text: 'Online Learing',
    image: img1,
    onClick: () => {
    console.log("Logged out");
    window.location.href = "/learning"
    },
    info: "Kick start your learning with basics and transfor the knowled to skills",
  };
  const blockInfo2 = {
    text: 'Virtual Lab',
    image: img2,
    onClick: () => alert('Second block button clicked!'),
    info: "This is the tooltip text for the info icon",
  };
  const blockInfo3 ={
    text: 'Ceritifed Assessment',
    image: img3,
    onClick: () => alert('Third Button'),
    info: "This is the tooltip text for the info icon",

  }
  

  return (
    <div>

    <Title titleInfo={titleinfo1}/>
    <div className='dashboard'>
      <Block boxInfo={blockInfo1} />
      <Block boxInfo={blockInfo2} />
      <Block boxInfo={blockInfo3} />

    </div>
    <Logout/>
    </div>
    
  );
};

export default Dashboard;
