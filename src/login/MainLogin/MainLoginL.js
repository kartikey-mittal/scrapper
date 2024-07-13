import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, collection } from  "./../../firebase"; // Adjust the path as necessary
import { getDocs } from "firebase/firestore";

const MainLoginL = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleGoUserClick = async () => {
    if (phoneNumber.trim() === "") {
      alert("Phone number cannot be empty. Please enter a valid phone number.");
      return;
    }

    try {
      const querySnapshot = await getDocs(collection(db, "scrappers"));
      const phoneNumbers = querySnapshot.docs.map(doc => doc.id);
      if (phoneNumbers.includes(phoneNumber)) {
        setIsModalVisible(true);
      } else {
        navigate(`/login/scrap`, { state: { phoneNumber } });
      }
    } catch (error) {
      console.error("Error checking phone number: ", error);
      alert("Error checking phone number. Please try again later.");
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ backgroundColor: '#fffefe', height: '90vh', marginLeft: "2rem", borderRadius: 20, border: ".05rem solid black" }}>
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: "2rem" }}>
        <h1 style={{ marginTop: "3rem", marginBottom: "-.9rem", fontFamily: "DMSB" }}>Register yourself on</h1>
        <h1 style={{ marginBottom: "-.9rem", color: "#318216", fontFamily: "DMB", fontSize: "2.5rem" }}>ScrapMate Partner</h1>
        <h1 style={{ marginBottom: "0.5rem", fontFamily: "DMSB" }}>& collect scrap online!</h1>
        <p style={{ marginTop: "5rem", fontSize: "1rem", color: "#7f7f7f" }}>Enter Phone Number</p>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <input
            type="number"
            placeholder="+91"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            style={{
              width: '50%',
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
        <p style={{ marginTop: '2rem', textDecoration: 'underline', cursor: 'pointer', color: "#7f7f7f", fontFamily: "DMSB" }}>LOGIN</p>
      </div>

      {isModalVisible && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)'
          }}>
            <h2 style={{ fontFamily: 'DMSB' }}>Already Registered</h2>
            <p style={{ fontFamily: 'DMSB' }}>This phone number is already registered. Please use another number.</p>
            <button
              style={{
                backgroundColor: '#318216',
                color: '#ffffff',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '10px',
                fontSize: '1rem',
                fontFamily: 'DMB',
                cursor: 'pointer'
              }}
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLoginL;
