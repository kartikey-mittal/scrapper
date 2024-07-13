import React, { useState } from "react";

const MainLoginR = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleGoScrapClick = () => {
    // Logic to handle GO button click
    console.log("Phone Number:", phoneNumber);
    // Add your logic here for further processing, e.g., API calls, validation, etc.
  };

  return (
    <div style={{ backgroundColor: '#fafafa', height: '90vh', marginRight: "2rem", borderRadius: 10,border:".05rem solid black" }}>
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: "2rem" }}>
        <h1 style={{ marginTop: "3rem", marginBottom: "-0.9rem",fontFamily:"DMSB"}}>Need quick scrap  selling</h1>
        <h1 style={{ marginBottom: "-0.8rem" ,color:"#385aeb",fontFamily:"DMB",fontSize:"2.5rem"}}>ScrapMate is here...</h1>
        <h1 style={{ marginBottom: "0.5rem",fontFamily:"DMSB" }}>Recycle | Reward | Repeat</h1>
        <p style={{marginTop:"3rem",fontSize:"1rem",color:"#7f7f7f"}}>Enter Phone Number</p>
        
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            style={{ height: 40, width: "40%", marginRight: 10, padding: 5, border: '.08rem solid gray', borderRadius: 10 ,backgroundColor:"#f4f4f4"}}
          />
         
        
        <p style={{marginTop:"2rem",fontSize:"1rem",color:"#7f7f7f"}}>Full Name</p>
        
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            style={{ height: 40, width: "40%", marginRight: 10, padding: 5, border: '.08rem solid gray', borderRadius: 10 ,backgroundColor:"#f4f4f4"}}
          />
          <button
            style={{
              backgroundColor: '#385aeb',
              color: '#ffffff',
              border: 'none',
              padding: '.9rem 1.8rem',
              borderRadius: '10px',
              fontSize: '1rem',
              fontFamily: 'DMB',
              cursor: 'pointer',
              width:"32%",
              marginTop:"2rem",
              fontSize: '1.4rem',
            }}
            onClick={handleGoScrapClick} 
          >
            GO
          </button>
       
        <p style={{ marginTop: '1rem', textDecoration: 'underline', cursor: 'pointer' ,color:"#7f7f7f",marginLeft:".8rem",fontFamily:"DMSB"}}>LOGIN</p>
      </div>
    </div>
  );
};

export default MainLoginR;
