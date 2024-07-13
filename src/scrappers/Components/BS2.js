import React, { useState } from 'react';
import { IoIosNavigate } from "react-icons/io";
import { FaPhone } from 'react-icons/fa';
import { IoIosCall } from "react-icons/io";
import { IoNavigateCircle } from "react-icons/io5";

const BS2 = ({ isOpen2, toggleSheet }) => {
  // State to store the list of items
  const items = ["Aluminium", "Steel"];

  // State to track selected item indices
  const [selectedItems, setSelectedItems] = useState([]); 

  // State to track modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false); 

  // State to store weight details
  const [weightDetails, setWeightDetails] = useState(''); 

  // State to track selected unit (Kg, gm, pcs)
  const [selectedUnit, setSelectedUnit] = useState('Kg'); 

  // State to track the currently selected item for the modal (index)
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  // Function to handle item clicks
  const handleItemClick = (index) => {
    setSelectedItemIndex(index); 
    openModal(); 
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItemIndex(null); 
  };

  // Function to handle unit changes (Kg, gm, pcs)
  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
  };

  // Function to handle form submission in the modal
  const handleSubmit = () => {
    if (selectedItemIndex !== null && !selectedItems.includes(selectedItemIndex)) {
      setSelectedItems([...selectedItems, selectedItemIndex]);
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
      {/* Content container for the bottom sheet */}
      <div
        className="bottom-sheet-content1"
        style={{
          padding: "0.8rem",
          opacity: isOpen2 ? 1 : 0, 
          transition: "opacity 0.3s ease",
          overflowY: 'auto', // Make the content scrollable
          display: 'flex',  // Apply flexbox
          flexDirection: 'column', // Align content vertically
          flex: 1 // Allow content to grow and shrink 
        }}
      >
        {/* User details section */}
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
       Mr. Aviral Saxena
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "DMSB",
          fontSize: "1.2rem",
          color: "#47474f",
          // textDecorationLine: "underline",
          marginRight: 5,
        }}
      >
          +91 7678416005  
        <IoIosCall style={{ marginRight: 5,color:'#fff',fontSize:'1.5rem' ,backgroundColor:"#2c2c2c",padding:5,borderRadius:50,marginLeft:10}} />
      
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
              House No-25, Block B , Singh Colony ,Near Uddham Singh Nagar, Rudrapur City, 201305, Uttrakhand
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

          <div style={{ display: "flex", flexDirection: "column", marginTop: 10,marginBottom:40 }}>
            {items.map((item, index) => (
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
                  {item} 
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
            ) : ( // If not picked, show "Select Material" with same styling
              <div
                style={{
                  backgroundColor: "#d4d4d4",
                  color: "#000000",
                  padding: "5px 20px",
                  borderRadius: 15,
                  marginLeft: 10,
                  fontSize: '0.9rem',
                  fontFamily: "DMR",
                  opacity: 0.5 // You can adjust opacity if you want it lighter
                }}
              >
                Select Material
              </div>
            )}
              </div>
            ))}
          </div>
        </div>

        {/* PROCEED Button Container - Sticky Positioning */}
        <div
  style={{
    position: 'sticky',
    bottom: 0,        
    width: '100%',     
    backgroundColor: 'white', 
    zIndex: 1,       
  }}
>
  <div 
    style={{
      display: "flex",
      flexDirection: "row",
      padding: 2,
      marginTop: 20,
      gap: 5, 
    }}
  >
    <button 
      style={{
        paddingTop: 17, // Padding moved here
        paddingBottom: 17, // Padding moved here
        backgroundColor: "#385aeb",
        border: "0.1rem solid #385aeb",
        width: "100%",
        borderRadius: 10,
        fontSize: "1.2rem",
        color: "#ffffff",
        fontFamily: "DMB", 
      }}
      onClick={toggleSheet} 
    >
      PROCEED
    </button>
  </div>
</div> 

        {/* Modal for weight details (conditionally rendered) */}
        {isModalOpen && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              zIndex: 1000, 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '20px',
                borderRadius: '10px',
                width: '80%',
                maxWidth: '400px',
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <span style={{ fontSize: '1.5rem', fontFamily: 'DMB', color: '#33333B', marginBottom: '30px' }}>
                Enter Weight Details
              </span>

              {selectedItemIndex !== null && ( 
                 <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                 <div style={{ marginTop: '10px', textAlign: 'left', flexGrow: 1 }}>
                   <div
                     style={{
                       backgroundColor: "#fafafa",
                       color: "#7F7F7F",
                       border: "1px solid #CBC7C7",
                       padding: "4px 10px",
                       borderRadius: 5,
                       fontFamily: "DMR",
                       width: "fit-content",
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       position: 'relative',
                       fontSize: '1.1rem',
                       marginTop: '0px',
                       marginBottom: '2rem',
                     }}
                   >
                     {items[selectedItemIndex]}
                   </div>
                 </div>
                 <div
                   style={{
                     width: '6rem',
                     height: '3rem',
                     backgroundColor: '#e7ebfd',
                     borderRadius: 10,
                     marginLeft: '2rem',
                     backgroundImage: "url('https://etimg.etb2bimg.com/photo/92956384.cms')",
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     flexShrink: 0
                   }}
                 ></div>
               </div>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <input 
                  type="text"
                  style={{
                    width: '50%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: 'DMR',
                  }}
                  placeholder="Enter Weight"
                  value={weightDetails} 
                  onChange={(e) => setWeightDetails(e.target.value)} 
                />
                <div style={{ width: '50%', display: 'flex', alignItems: 'center' }}>
                  <input
                    type="radio"
                    id="kg"
                    name="unit"
                    value="Kg"
                    checked={selectedUnit === 'Kg'} 
                    onChange={() => handleUnitChange('Kg')} 
                  />
                  <label htmlFor="kg" style={{ marginLeft: '5px', fontFamily: 'DMR' }}>Kg</label>

                  <input
                    type="radio"
                    id="gm"
                    name="unit"
                    value="gm"
                    checked={selectedUnit === 'gm'} 
                    onChange={() => handleUnitChange('gm')} 
                    style={{ marginLeft: '10px' }}
                  />
                  <label htmlFor="gm" style={{ marginLeft: '5px', fontFamily: 'DMR' }}>gm</label>

                  <input
                    type="radio"
                    id="pcs"
                    name="unit"
                    value="pcs"
                    checked={selectedUnit === 'pcs'} 
                    onChange={() => handleUnitChange('pcs')} 
                    style={{ marginLeft: '10px' }}
                  />
                  <label htmlFor="pcs" style={{ marginLeft: '5px', fontFamily: 'DMR' }}>pcs</label>
                </div>
              </div>

              <button
                style={{
                  backgroundColor: '#000',
                  color: '#ffffff',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontFamily: 'DMB',
                  cursor: 'pointer', marginTop:'1.2REM'
                }}
                onClick={handleSubmit} 
              >
                Submit
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BS2; 