import React, { useState } from "react";
import { db } from "../../firebase"; // Adjust the path to your firebase configuration
import { doc, updateDoc, arrayUnion, setDoc } from "firebase/firestore"; // Import Firestore methods

const R3 = ({ setComponentID }) => {
  const [selectedButtons, setSelectedButtons] = useState([]); // State to track selected buttons

  // Array of button texts, their corresponding images, and rates
  const buttonsData = [
    { text: "Iron", imageUrl: "https://img3.exportersindia.com/product_images/bc-full/dir_122/3646887/iron-scrap-1974902.jpg", rate: "₹ 20" },
    { text: "Aluminium", imageUrl: "https://etimg.etb2bimg.com/photo/92956384.cms", rate: "₹ 15" },
    { text: "Newspaper", imageUrl: "https://5.imimg.com/data5/QX/TW/MY-36710290/vhgf-500x500.jpg", rate: "₹ 5" },
    { text: "Sole", imageUrl: "https://5.imimg.com/data5/RG/SK/AS/SELLER-13192772/white-pvc-scrap-500x500.jpg", rate: "₹ 10" },
  ];

  // Function to handle button click
  const handleButtonClick = (index) => {
    // Toggle the selected state of the button
    if (selectedButtons.includes(index)) {
      setSelectedButtons(selectedButtons.filter((item) => item !== index)); // Deselect if already selected
    } else {
      setSelectedButtons([...selectedButtons, index]); // Select if not selected
    }
  };

  // Function to generate random 4-digit number
  const generateRandomOrderID = () => {
    return "OD" + Math.floor(1000 + Math.random() * 9000).toString();
  };

  // Function to handle order submission
  const handleSubmitOrder = async () => {
    const orderID = generateRandomOrderID();
    const address = localStorage.getItem("userAddress");
    const name = localStorage.getItem("userName");
    const phone = localStorage.getItem("userPhone");

    // Prepare items array
    const selectedItems = selectedButtons.map(index => {
      const { text, rate } = buttonsData[index];
      return `${text}/${rate.split(' ')[1]}`;
    });

    try {
      // Update user's orders array
      const userDocRef = doc(db, 'users',phone); // Adjust user doc ID as needed
      await updateDoc(userDocRef, {
        Orders: arrayUnion(orderID)
      });

      // Create new order document
      const orderDocRef = doc(db, 'orders', orderID);
      await setDoc(orderDocRef, {
        Address: address,
        Items: selectedItems,
        Name: name,
        OrderID: orderID,
        Phone: phone,
        Status: 1,
        Scrapper:'8076940848'
      });

      console.log("Order submitted successfully");
      alert('Order submitted successfully')
      setComponentID(1); // Navigate to the next component
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          borderRadius: "1.2rem",
          marginLeft: "20px",
          marginRight: "20px",
          padding: "20px",
          flex: 1,
        }}
      >
        <div style={{ color: "#7F7F7F", marginBottom: 5, marginTop: "25px", fontSize: '1.2rem', fontFamily: 'DMSB' }}>
          Select Materials
        </div>

        <div style={{ width: "100%", backgroundColor: "transparent", display: 'flex', flexWrap: 'wrap' }}>
          {buttonsData.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              style={{
                backgroundColor: selectedButtons.includes(index) ? "#4CAF50" : "#f4f4f4",
                color: selectedButtons.includes(index) ? "#ffffff" : "#666666",
                border: selectedButtons.includes(index) ? "1px solid #FF5733" : "1px solid #CBC7C7",
                padding: "8px 20px",
                borderRadius: 5,
                fontFamily: "DMR",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                fontSize: '1.1rem',
                margin: '10px',
                width: 'calc(50% - 20px)', // Adjusted width to make sure two buttons fit in one row
                boxSizing: 'border-box', // To include padding in the width calculation
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flex: 1 }}>
                {button.text}
                <span
                  style={{
                    backgroundColor: 'yellow',
                    borderRadius: '5px',
                    padding: '2px 10px',
                    marginLeft: '10px',
                    color: '#212121',
                    fontSize: '0.9rem',fontFamily:'DMR'
                  }}
                >
                  {button.rate}/kg
                </span>
              </div>
              <div
                style={{
                  width: '40px',
                  height: '40px', // Adjusted height to fully wrap the image
                  borderRadius: '50%',
                  marginLeft: '10px'
                }}
              >
                <img
                  src={button.imageUrl}
                  alt={button.text}
                  style={{
                    width: '100%',
                    height: '100%', // Ensure the image fills the wrapper
                    borderRadius: '50%',
                    objectFit: 'cover', // Maintain aspect ratio and cover the div
                  }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Submit buttons */}
      <div style={{ textAlign: 'center', marginTop: 'auto', marginBottom: '0.7rem' }}>
        <button
          style={{
            padding: "15px 20px",
            borderRadius: "0.9rem",
            backgroundColor: "#385aeb",
            color: "white",
            border: "none",
            fontFamily: "DMSB",
            fontSize: "1.3rem",
            cursor: "pointer",
            width: "50%",
          }}
          onClick={handleSubmitOrder} // Submit the order on click
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default R3;
