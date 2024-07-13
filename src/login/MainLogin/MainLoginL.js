import React, { useState } from "react";

const MainLoginL = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleGoUserClick = () => {
    // Logic to handle GO button click
    console.log("Phone Number:", phoneNumber);
    // Add your logic here for further processing, e.g., API calls, validation, etc.
  };

  return (
    <div style={{ backgroundColor: '#fffefe', height: '90vh', marginLeft: "2rem", borderRadius: 10,border:".05rem solid black" }}>
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: "2rem" }}>
        <h1 style={{ marginTop: "3rem", marginBottom: "-.9rem" ,fontFamily:"DMSB"}}>Register yourself on</h1>
        <h1 style={{ marginBottom: "-.9rem",color:"#318216" ,fontFamily:"DMB",fontSize:"2.5rem"}}>ScrapMate Partner</h1>
        <h1 style={{ marginBottom: "0.5rem",fontFamily:"DMSB" }}>& collect scrap online!</h1>
        <p style={{marginTop:"5rem",fontSize:"1rem",color:"#7f7f7f"}}>Enter Phone Number</p>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            style={{ height: 40, width: 200, marginRight: 10, padding: 5, border: '1px solid gray', borderRadius: 5 ,backgroundColor:"#f4f4f4"}}
          />
          <button
            style={{
              backgroundColor: '#318216',
              color: '#ffffff',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '10px',
              fontSize: '1rem',
              fontFamily: 'DMB',
              cursor: 'pointer',
              fontSize: '1.2rem',
            }}
            onClick={handleGoUserClick} 
          >
            GO
          </button>
        </div>
        <p style={{ marginTop: '2rem', textDecoration: 'underline', cursor: 'pointer' ,color:"#7f7f7f",fontFamily:"DMSB"}}>LOGIN</p>
      </div>
    </div>
  );
};

export default MainLoginL;
