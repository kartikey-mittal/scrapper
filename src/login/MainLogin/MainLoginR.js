import React, { useState } from "react";

const MainLoginR = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
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
            
                value={name}
                onChange={handleNameChange}
                style={{
                  width: '70%',
                  borderRadius: '0.5rem',
                  border: '1px solid #a2a2a3',
                  padding: '10px',
                  fontFamily: 'DMSB',
                  backgroundColor: "#f4f4f4",
                  fontSize: "1.3rem",
                  marginRight: '10px'
                }}
              />
         
        
        <p style={{marginTop:"2rem",fontSize:"1rem",color:"#7f7f7f"}}>Full Name</p>
        
        <input
                type="number"
             
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                style={{
                  width: '70%',
                  borderRadius: '0.5rem',
                  border: '1px solid #a2a2a3',
                  padding: '10px',
                  fontFamily: 'DMSB',
                  backgroundColor: "#f4f4f4",
                  fontSize: "1.3rem",
                  marginRight: '10px'
                }}
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
