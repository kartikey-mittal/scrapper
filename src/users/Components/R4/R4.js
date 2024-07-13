import React from 'react';
import './R4.css'; 
import ScrapPatner from '../ScrapPatner/ScrapPatner';

const R4 = () => {
  const scrapPartnerData = [
   { imageUrl: 'https://imgs.search.brave.com/yw58VUtQWv3NxZ5x_gBv79ysbdvzGgfDIjl19dvm0wM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/MzgxNDI5L3Bob3Rv/L3NjcmFwLW1ldGFs/LWNvbG9yLWltYWdl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1XQzZWWFdYY2Yx/VkJ5LVhoMUlHbnk0/NlVYLUlXZ09TMGJz/S1JYcGRfck1rPQ',partnerInfo: { name: 'Avaril saxena', material: 'Aluminium',weightPerKg:'12' } },
   { imageUrl: 'https://imgs.search.brave.com/NPql5XtZvmAas8vwf4qtraxoKgOm96yzqCvtAUM52fo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxMi8x/Mi8yNC8wOC8zOC9j/b3BwZXItNzIwNjJf/NjQwLmpwZw',partnerInfo: { name: 'kartikey mittal', material: 'copper',weightPerKg:'10' } },
   
   { imageUrl: 'https://imgs.search.brave.com/jFMuep15lksqeqwOdIwXEvtjBTc_vewXH_v2ho_YtR0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/OTkzNjc4L3Bob3Rv/L2Nsb3NlLXVwLXBo/b3RvLW9mLXNpbHZl/ci1jb2xvci1zY3Jh/cC1tZXRhbC1hbmQt/bWV0YWwtdHJhc2gu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW9Wa05CdFZNNGdD/VGpOMldsOWw1M2x3/ZDJ1NnVyNDBBOWYy/TGFFSE54MGM9',partnerInfo: { name: 'lakshay jain', material: 'silver',weightPerKg:'100000' } },
   { imageUrl: 'https://imgs.search.brave.com/jFMuep15lksqeqwOdIwXEvtjBTc_vewXH_v2ho_YtR0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/OTkzNjc4L3Bob3Rv/L2Nsb3NlLXVwLXBo/b3RvLW9mLXNpbHZl/ci1jb2xvci1zY3Jh/cC1tZXRhbC1hbmQt/bWV0YWwtdHJhc2gu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW9Wa05CdFZNNGdD/VGpOMldsOWw1M2x3/ZDJ1NnVyNDBBOWYy/TGFFSE54MGM9',partnerInfo: { name: 'lakshay jain', material: 'silver',weightPerKg:'100000' } },
  ];
  return (
   <div style={ {display:'flex',flexDirection:'column', alignContent:'center' ,height:'100%',}}>
     <div className="scrollable-container">
      <h4 style={{ color: 'black', paddingLeft: '8px', fontSize: 'large', fontWeight: 'bold' }}>
        Select Scrap Partner
      </h4>
      
      {scrapPartnerData.map((data, index) => (
          <ScrapPatner key={index} imageUrl={data.imageUrl} partnerInfo={data.partnerInfo} />
        ))}
     
    </div>

<button 
style={{
  paddingTop: 17, // Padding moved here
  paddingBottom: 17, // Padding moved here
  backgroundColor: "#385aeb",
  border: "0.1rem solid #385aeb",
  width: "60%",
  borderRadius: 10,
  fontSize: "1.2rem",
  color: "#ffffff",
  fontFamily: "DMB", 
  margin:'3rem',
  marginLeft:'auto',
  marginRight:'auto'
}}

>
PROCEED
</button>

   </div>

  );
};

export default R4;
