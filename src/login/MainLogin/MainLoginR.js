import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, collection } from "./../../firebase"; // Adjust the path as necessary
import { getDocs, doc, setDoc } from "firebase/firestore";

const MainLoginR = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGoScrapClick = async () => {
    if (phoneNumber.trim() === "" || name.trim() === "") {
      setModalMessage("Please enter phone number and name.");
      setIsModalVisible(true);
      return;
    }

    try {
      // Check if the phone number already exists in Firestore
      const querySnapshot = await getDocs(collection(db, "users"));
      const phoneNumbers = querySnapshot.docs.map((doc) => doc.id);

      if (phoneNumbers.includes(phoneNumber)) {
        setModalMessage("Phone number already exists. Please use another number.");
        setIsModalVisible(true);
      } else {
        // Add new document with phone number as doc id and name as field
        await setDoc(doc(db, "users", phoneNumber), {
          Name: name
        });

        // Navigate to UserLogin1 with state
        navigate("/login/user", { state: { phoneNumber, name } });
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
    <div style={{ backgroundColor: "#fafafa", height: "90vh", marginRight: "2rem", borderRadius: 20, border: ".05rem solid black" }}>
      <div style={{ display: "flex", flexDirection: "column", paddingLeft: "2rem" }}>
        <h1 style={{ marginTop: "3rem", marginBottom: "-0.9rem", fontFamily: "DMSB" }}>Need quick scrap selling</h1>
        <h1 style={{ marginBottom: "-0.8rem", color: "#385aeb", fontFamily: "DMB", fontSize: "2.5rem" }}>ScrapMate is here...</h1>
        <h1 style={{ marginBottom: "0.5rem", fontFamily: "DMSB" }}>Recycle | Reward | Repeat</h1>
        <p style={{ marginTop: "3rem", fontSize: "1rem", color: "#7f7f7f" }}>Enter Phone Number</p>
        <input
          type="number"
          placeholder="+91"
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
        <p style={{ marginTop: "2rem", fontSize: "1rem", color: "#7f7f7f" }}>Full Name</p>
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
            width: "32%",
            marginTop: "2rem",
            fontSize: '1.4rem',
          }}
          onClick={handleGoScrapClick}
        >
          GO
        </button>
        <p style={{ marginTop: '1rem', textDecoration: 'underline', cursor: 'pointer', color: "#7f7f7f", marginLeft: ".8rem", fontFamily: "DMSB" }}>LOGIN</p>
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
            <h2 style={{ fontFamily: 'DMSB' }}>{modalMessage}</h2>
            <button
              style={{
                backgroundColor: '#385aeb',
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

export default MainLoginR;
