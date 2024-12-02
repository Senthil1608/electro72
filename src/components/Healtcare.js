import React from 'react';
import Title from './Title';
import Block from './Block'
import tree from '../images/tree.jpeg'
import herb from '../images/herb.jpeg'
import root from '../images/root.jpeg'
import injection from '../images/injection.png'
import stethescope from '../images/stethescope.png'
import bpmachine from '../images/bpmachine.png'
import BackToDashBoard from './BackToDashBoard';
import MemoryGame from './MemoryGame';
const Healthcare = () => {
  const titleinfo1 = {
    text: 'Health Care',
  };
  const titleinfo2 = {
    text: 'Tools for Health Care',
  };
  const titleinfo3 = {
    text: 'Play now and excersise your brain',
  };
  const blockInfo1 = {
    text: 'Injection',
    image: injection,
    onClick: () => alert('Second block button clicked!'),
    info: "This is the tooltip text for the info icon",
  };
  const blockInfo2 = {
    text: 'Stethescope',
    image: stethescope,
    onClick: () => alert('Second block button clicked!'),
    info: "This is the tooltip text for the info icon",
  };
  const blockInfo3 ={
    text: 'Blood Pressure Monitor',
    image: bpmachine,
    onClick: () => alert('Third Button'),
    info: "This is the tooltip text for the info icon",

  }
  const memoryGame = () => {
    // Perform logout logic here, such as clearing tokens or user data
    console.log("Logged out");
    window.location.href = "/memorygame"; // Redirect to login page
  };

  return (
    <div>
      <Title titleInfo={titleinfo1} />
      <div  id="section1" className="header">
      <div className="align-btn">
        <BackToDashBoard />
      </div>
        <h3>What is Health Care?</h3>
        <p>
          Green farming, also known as sustainable or eco-friendly agriculture, is a practice
          that emphasizes environmental preservation, resource efficiency, and improved food
          production systems while minimizing adverse impacts on nature. By adopting practices
          that focus on conserving water, reducing chemical inputs, and enhancing soil health,
          green farming helps create a balanced ecosystem for current and future generations.
        </p>
        
      </div>

      <div  id="section2" className="header">
        <h3>Benifits of  Health Care?</h3>
            <ul>
                <li>Environment-friendly.</li>
                <li>Promotes sustainable development.</li>
                <li>Healthy and tasty food.</li>
                <li>Inexpensive process.</li>
                <li>It uses organic inputs.</li>
                <li>Generates income.</li>
                <li>Generates income through exports.</li>
                <li>Source of employment.</li>
            </ul>
      </div>
      <div className="header" id="section3">
        <h2>Tree Plantation</h2>
            <p>
                Tree plantations focus on long-term crops like <strong>coconut</strong> and <strong>banana</strong>. These trees provide essential resources like fruits, wood, and shade, playing a significant role in sustainable agriculture.
            </p>
            <ul>
                <li><strong>Coconut:</strong> Best grown in sandy soil and tropical climates.</li>
                <li><strong>Banana:</strong> Requires high water and humidity for optimal yield.</li>
            </ul>
            <div className="image-align">
                <img src={tree} alt="Box content" className="block-image" />
                <iframe width="672" height="378" src="https://www.youtube.com/embed/GtYCO0dHMfk" title="How Trees Grow | Eco Facts | One Tree Planted" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            
      </div>
    <div id="section4" class="header">
        <h2>Herb Plantation</h2>
        <p>
            Herb plantations involve cultivating plants with medicinal and culinary uses
             like <strong>tea</strong> and <strong>pudina</strong>. These plants are
              eco-friendly and offer significant health benefits.
        </p>
        <ul>
            <li><strong>Tea:</strong> Grows well in hilly regions with acidic soil.</li>
            <li><strong>Pudina:</strong> Requires regular watering and partial shade.</li>
        </ul>
        <div className="image-align">
                <img src={herb} alt="Box content" className="block-image" />
                <iframe width="672" height="378" src="https://www.youtube.com/embed/5mWH5ajGJF4" title="HERB GARDENS BEGINNERS GUIDE || HOW TO || GARDEN BASICS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div id="section5" class="header">
      <h2>Root Plantation</h2>
      <p>
        Root plantations focus on crops like <strong>potato</strong> and <strong>carrot</strong>. These nutrient-rich vegetables grow underground and serve as staple food sources worldwide.
      </p>
      <ul>
        <li><strong>Potato:</strong> Thrives in cool climates and well-drained soil.</li>
        <li><strong>Carrot:</strong> Prefers loose, sandy soil and full sunlight.</li>
      </ul>
        <div className="image-align">
                <img src={root} alt="Box content" className="block-image" />
                <iframe width="672" height="378" src="https://www.youtube.com/embed/z1BWxDEu0P0" title="Why do potatoes grow in bags of soil have so many tubers? Here is the answer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    <div id="tools">
      <Title titleInfo={titleinfo2} />
      <div className='dashboard'>
        <Block boxInfo={blockInfo1} />
        <Block boxInfo={blockInfo2} />
        <Block boxInfo={blockInfo3} />

      </div>
    </div>
    <Title titleInfo={titleinfo3}/>
    <button
      className="logout-btn"
      onClick={memoryGame}
    >
        Play Now
    </button>

    <div className="table-of-contents">
        <h4>Table of Contents</h4>
        <a href="#section1">What is Health Care?</a>
        <a href="#section2">Benefits of Health Care</a>
        <a href="#section3">Injection</a>
        <a href="#section4">CPR</a>
        <a href="#section5">Basic Wound Treatment</a>
        <a href="#tools">Tools for Healthcare</a>


      </div>
      
    </div>
  );
};

export default Healthcare;
