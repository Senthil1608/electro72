import React from 'react';
import PropTypes from 'prop-types';
import { IoIosInformationCircleOutline } from "react-icons/io";

const Block = ({ boxInfo }) => {
  
  const { text, image, onClick , info } = boxInfo;

  return (
    <div className="block-container">
      <p className="block-text">{text}</p>
      <img src={image} alt="Box content" className="block-image" />
      <div className='spacer'>
      <div className="tooltip-container">
          <IoIosInformationCircleOutline size="50px" />
          <span className="tooltip-text">{info}</span>
        </div>
     

        <button className="block-button" onClick={onClick}>
        
          Click Me
        </button>
      </div>
      


    </div>
    
  );
};

Block.propTypes = {
  boxInfo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default Block;
