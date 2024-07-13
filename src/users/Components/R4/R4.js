import React, { useState } from 'react';
import './R4.css';
import ScrapPatner from '../ScrapPatner/ScrapPatner';

const R4 = ({ }) => {
 

  return (
    <div className='container'>
      <h4 style={{ color: 'black' ,paddingLeft:'8px',fontSize:'large',fontWeight:'bold' }}>Select Scrap Partner</h4>
    <ScrapPatner/>
    <ScrapPatner/>
    </div>
  );
};

export default R4;
