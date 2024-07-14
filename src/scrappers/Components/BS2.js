import React, { useState } from 'react';
import { IoIosCall } from "react-icons/io";
import { IoNavigateCircle } from "react-icons/io5";
import { doc, updateDoc } from "firebase/firestore";
import { db } from './../../firebase'; // Make sure to import your Firestore config

const BS2 = ({ isOpen2, toggleSheet, order }) => {
  const { OrderID, Scrapper, TotalBill, Items, Status, Name, Address, Phone } = order;

  // Process items to separate the name and rate
  const processedItems = Items.map(item => {
    const [name, rate] = item.split('/');
    return { name, rate };
  });

  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weightDetails, setWeightDetails] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('Kg');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItemIndex(null);
  };

  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
  };

  const handleSubmit = async () => {
    if (selectedItemIndex !== null && !selectedItems.includes(selectedItemIndex)) {
      setSelectedItems([...selectedItems, selectedItemIndex]);
    }
  
    const updatedItems = processedItems.map((item, index) => {
      if (index === selectedItemIndex) {
        const updatedItem = { ...item, merged: `${item.name}/${item.rate}/${weightDetails}` };
        return updatedItem;
      } else if (item.merged) {
        // Preserve previously merged items
        return item;
      } else {
        // Handle items that were not previously merged
        return { ...item, merged: `${item.name}/${item.rate}` };
      }
    });
  
    // Output the updated items to console
    console.log('Updated Items:', updatedItems);
  
    // Combine the updated items into a single array
    const combinedItems = updatedItems.map(item => item.merged);
  
    // Update Firestore document
    try {
      const orderDocRef = doc(db, "orders", OrderID);
      await updateDoc(orderDocRef, {
        Items: combinedItems,
        Status:2
      });
      console.log('Firestore document successfully updated!');
    } catch (error) {
      console.error('Error updating Firestore document: ', error);
    }
  
    closeModal();
  };
  
  

  return (
    <div
      className={`bottom-sheet1 ${isOpen2 ? "open" : ""}`}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: isOpen2 ? "77%" : "0",
        backgroundColor: "white",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "height 0.3s ease",
      }}
    >
      <div
        className="bottom-sheet-content1"
        style={{
          padding: "0.8rem",
          opacity: isOpen2 ? 1 : 0,
          transition: "opacity 0.3s ease",
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 15,
            paddingBottom: 10,
          }}
        >
          <span
            style={{ fontFamily: "DMSB", fontSize: "1.5rem", color: "#33333B" }}
          >
           {Name}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "DMSB",
              fontSize: "1.2rem",
              color: "#47474f",
              marginRight: 5,
            }}
          >
            +91 {Phone}
            <IoIosCall style={{ marginRight: 5, color: '#fff', fontSize: '1.5rem', backgroundColor: "#2c2c2c", padding: 5, borderRadius: 50, marginLeft: 10 }} />
          </div>
        </div>

        <div
          style={{
            height: 2,
            width: "40%",
            backgroundColor: "#B1B1B1",
            marginBottom: 10,
          }}
        ></div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "70%",
              justifyContent: "flex-end",
            }}
          >
            <span
              style={{
                fontFamily: "DMSB",
                fontSize: "1.2rem",
                marginBottom: 0,
                color: "#33333B",
              }}
            >
              Pickup Address
            </span>
          </div>
          <div
            style={{
              alignSelf: "flex-start",
              height: "5rem",
              width: "10rem",
              backgroundColor: "#e7ebfd",
              borderRadius: 10,
              border: "0.1rem solid #cccccc",
              backgroundImage: "url('https://www.grihshobha.in/wp-content/uploads/2021/12/raddi.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div
          style={{
            backgroundColor: "#D8FFCB",
            border: "0.01rem solid #cccccc",
            borderRadius: 10,
            margin: 0,
            width: "95%",
            padding: 10,
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: "DMR",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  marginBottom: 0,
                  color: "#9f9f9f",
                }}
              >
               {Address}
              </p>
            </div>
            <div
              style={{
                flexShrink: 0,
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoNavigateCircle size={50} color="#385aeb" />
            </div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <span
            style={{
              fontFamily: "DMSB",
              fontSize: "1.2rem",
              marginBottom: 0,
              color: "#33333B",
              marginTop: 10,
            }}
          >
            Material List
          </span>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 10, marginBottom: 40 }}>
            {processedItems.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <button
                  onClick={() => handleItemClick(index)}
                  style={{
                    backgroundColor: selectedItems.includes(index) ? "#318216" : "#fafafa",
                    color: selectedItems.includes(index) ? "#ffffff" : "#7F7F7F",
                    border: "1px solid #CBC7C7",
                    padding: "5px 8px",
                    borderRadius: 5,
                    fontFamily: "DMR",
                    width: "fit-content",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    fontSize: '1.1rem'
                  }}
                >
                  {item.name}
                </button>
                {selectedItems.includes(index) ? (
                  <div
                    style={{
                      backgroundColor: "#c1ff72",
                      color: "#000000",
                      padding: "5px 20px",
                      borderRadius: 15,
                      marginLeft: 10,
                      fontSize: '0.9rem',
                      fontFamily: "DMR"
                    }}
                  >
                    PICKED
                  </div>
                ) : (
                  <div
                    style={{
                      backgroundColor: "#d4d4d4",
                      color: "#000000",
                      padding: "5px 20px",
                      borderRadius: 15,
                      marginLeft: 10,
                      fontSize: '0.9rem',
                      fontFamily: "DMR",
                      opacity: 0.5
                    }}
                  >
                    NOT PICKED
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", padding: 0,gap:20 }}>
            <button
              style={{
                backgroundColor: "#D9D9D9",
                color: "#3B3B3B",
                padding: "5px 8px",
                borderRadius: 5,
                border: "1px solid #CBC7C7",
                fontFamily: "DMR",
                width: "50%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={toggleSheet}
            >
              CLOSE
            </button>
            <button
              style={{
                backgroundColor: "#318216",
                color: "#ffffff",
                padding: "10px px",
                borderRadius: 5,
                border: "1px solid #CBC7C7",
                fontFamily: "DMR",
                width: "50%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',height:50,
              }}
              onClick={handleSubmit} // Make sure the submit button triggers the handleSubmit function
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              maxWidth: '80%',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <h2>Select Weight Details</h2>
            <div style={{ marginBottom: 10 }}>
              <input
                type="text"
                value={weightDetails}
                onChange={(e) => setWeightDetails(e.target.value)}
                placeholder="Enter weight details"
                style={{
                  padding: '10px',
                  width: '80%',
                  marginBottom: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ marginRight: 10 }}>
                <input
                  type="radio"
                  value="Kg"
                  checked={selectedUnit === 'Kg'}
                  onChange={() => handleUnitChange('Kg')}
                /> Kg
              </label>
              <label style={{ marginRight: 10 }}>
                <input
                  type="radio"
                  value="Ton"
                  checked={selectedUnit === 'Ton'}
                  onChange={() => handleUnitChange('Ton')}
                /> Ton
              </label>
              <label>
                <input
                  type="radio"
                  value="Pc"
                  checked={selectedUnit === 'Pc'}
                  onChange={() => handleUnitChange('Pc')}
                /> Pc
              </label>
            </div>
            <button
              onClick={handleSubmit}
              style={{
                backgroundColor: "#318216",
                color: "#ffffff",
                padding: "10px 20px",
                borderRadius: 5,
                border: "none",
                fontFamily: "DMR",
                fontSize: '1rem'
              }}
            >
              SAVE
            </button>
            <button
              onClick={closeModal}
              style={{
                marginLeft: 10,
                backgroundColor: "#D9D9D9",
                color: "#3B3B3B",
                padding: "10px 20px",
                borderRadius: 5,
                border: "none",
                fontFamily: "DMR",
                fontSize: '1rem'
              }}
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BS2;
