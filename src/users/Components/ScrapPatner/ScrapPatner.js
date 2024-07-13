import React, { useState } from 'react';
import "./ScrapPatner.css";
import recImage from './rec.png';

const ScrapPatner = ({ imageUrl, partnerInfo }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleImageClick = () => {
    setIsSelected(!isSelected);
    console.log(isSelected ? "Image deselected" : "Image selected");
    console.log(`Name: ${name}, Material: ${material}, Weight per Kg: ${weightPerKg}`);
  };

  const { name, material, weightPerKg } = partnerInfo;

  return (
    <div className='parent' onClick={handleImageClick} style={{ marginTop: "3rem", border: ".05rem solid black", backgroundColor: isSelected ? '#D9FFE8' : 'white' }}>
      <div className='div-left'>
        <img
          onClick={handleImageClick}
          style={{
            width: '70px',
            height: '60px',
            borderRadius: '10px',
            display: 'inline-block',
            marginRight: '2rem',
            cursor: 'pointer',
            border: isSelected ? '2px solid #65C047' : 'none',
          }}
          src={imageUrl}
          alt={`Scrap Material`}
        />
      </div>
      <div className='div-right'>
        <div>
          <p style={{ fontSize: 'x-large', marginBottom: '4px' }}>{name}</p>
          <div style={{ textAlign: 'right', marginLeft: '3rem', paddingLeft: '.5rem' }} className='patani ok'>{material} <span className="blank">₹{weightPerKg}/KG</span></div>
        </div>
        <div style={{ alignSelf: 'end', marginLeft: '3rem', paddingLeft: '.5rem', textAlign: 'end' }} className='patani '>{material} <span className="blank">₹{weightPerKg}/KG</span></div>
      </div>
      <div>
        <img onClick={handleImageClick} style={{ width: 'auto', height: '30px', borderRadius: '20px', display: 'flex', alignSelf: 'center', justifyContent: 'start', marginRight: '2rem', cursor: 'pointer', border: isSelected ? '2px solid #65C047' : 'none' }} src={recImage} alt="Recycled Material" />
      </div>
    </div>
  );
};

export default ScrapPatner;
