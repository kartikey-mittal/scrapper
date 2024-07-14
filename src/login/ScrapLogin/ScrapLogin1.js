import React, { useState } from "react";
import Modal from 'react-modal';

const items = [
  { name: "Aluminium", imageUrl: "https://via.placeholder.com/50?text=Aluminium" },
  { name: "Iron", imageUrl: "https://via.placeholder.com/50?text=Iron" },
  { name: "Plastic", imageUrl: "https://via.placeholder.com/50?text=Plastic" },
  { name: "Sole", imageUrl: "https://via.placeholder.com/50?text=Sole" },
  { name: "Newspaper", imageUrl: "https://via.placeholder.com/50?text=Newspaper" }
];

const ScrapLogin1 = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [componentId, setComponentId] = useState(1);


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [rate, setRate] = useState("");
  const [unit, setUnit] = useState("per kg");
  const [rates, setRates] = useState({});


  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleSubmit = () => {
    setRates((prevRates) => ({
      ...prevRates,
      [selectedItem.name]: { rate, unit }
    }));
    closeModal();
  };


  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const toggleComponent = () => {
    setComponentId((prevComponentId) => (prevComponentId === 1 ? 2 : 1));
  };

  const images = [
    "https://s12.gifyu.com/images/St67y.png",
    "https://s12.gifyu.com/images/St6IT.png",
    "p",
    "https://s10.gifyu.com/images/St6lm.png",
  ];

  const boxStyle = (isSelected, imageUrl) => ({
    backgroundColor: "#fafafa",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "8.5rem",
    height: "8rem",
    borderRadius: "15px",
    borderWidth: isSelected ? "3px" : "2px",
    borderStyle: 'solid',
    borderColor: isSelected ? "#4ab526" : "#a0a0a0",
    overflow: "hidden",
    marginRight: "10px",
    marginBottom: "10px",
    cursor: "pointer",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        margin: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "60%",
          backgroundColor: "white",
          borderRadius: "1.2rem",
          border: "1px solid #000000",
          gap: 5,
          margin: "20px",
          padding: "20px",
        }}
      >
        <button
          onClick={toggleComponent}
          style={{
            padding: "15px 20px",
            borderRadius: "0.9rem",
            backgroundColor: "#385aeb",
            color: "white",
            border: "none",
            fontFamily: "DMSB",
            fontSize: "1.3rem",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Toggle Component
        </button>
      </div>
      <div
        style={{
          position: "relative",
          width: "40%",
          backgroundColor: "white",
          borderRadius: "1.2rem",
          border: "1px solid #000000",
          margin: "20px",
          padding: "0px",
        }}
      >
        <div
          style={{
            backgroundColor: "black",
            borderRadius: "1.2rem",
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            color: "white",
            padding: "20px",
            fontSize: "1.9rem",
            fontFamily: "DMSB",
          }}
        >
          Partner with ScrapMate
        </div>

        {componentId === 1 ? (
          <div style={{ backgroundColor: "transparent", padding: 20 }}>
            <div style={{ color: "#7F7F7F", marginBottom: 5, marginTop: "50px", fontSize: '1.2rem', fontFamily: 'DMSB' }}>
              Select Vehicles
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: "1.2rem",
                justifyContent: "flex-start",
              }}
            >
              {images.map((imageUrl, index) => (
                <div
                  key={index}
                  style={boxStyle(selectedIndex === index, imageUrl)}
                  onClick={() => handleClick(index)}
                >
                  {/* Background image is applied via inline styling */}
                </div>
              ))}
            </div>

            <div
          style={{
            position: "absolute",
            bottom: "15px",
            width: "100%",
           
          }}
        >
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
              width: "90%",
            }}
          >
            Submit
          </button>
        </div>
          </div>
        ) : (
          <div style={{ backgroundColor: "transparent", padding: 20 }}>
          <div style={{ color: "#7F7F7F", marginBottom: 5, marginTop: "20px", fontSize: '1.2rem', fontFamily: 'DMSB' }}>
            Manage Materials
          </div>
    
          {items.map((item) => (
            <div key={item.name} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem',
              borderRadius: '0.9rem',
              border: '2px solid #cbc7c7',
              marginBottom: '10px'
            }}>
              <span style={{
                fontSize: "1.2rem",
                fontFamily: 'DMR',
                color: "#7F7F7F"
              }}>{item.name}</span>
    
              <span style={{
                fontSize: "1.2rem",
                fontFamily: 'DMB',
                color: "#000",
                backgroundColor: "#ffed00",
                borderRadius: '0.5rem',
                padding: "0.3rem",
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
                marginLeft: '1rem'
              }}>{rates[item.name] ? `₹ ${rates[item.name].rate} / ${rates[item.name].unit}` : ""}</span>
    
              <button onClick={() => openModal(item)} style={{
                backgroundColor: "#f4f4f4",
                padding: "0.4em",
                paddingLeft: "0.9rem",
                paddingRight: '0.9rem',
                color: 'black',
                fontFamily: 'DMR',
                borderRadius: '0.5rem',
                borderWidth: '0.2px',
                marginLeft: 'auto'
              }}>SELECT</button>
            </div>
          ))}
    
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '1.2rem',
                padding: '2rem',
                width: '40%',
                border: '1px solid #000000'
              }
            }}
          >
            <h2 style={{
              color: "#000",
              fontSize: '1.5rem',
              fontFamily: 'DMSB',
              marginBottom: '20px'
            }}>Enter Rates</h2>
    
            {selectedItem && (
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{
                  fontSize: "1.2rem",
                  fontFamily: 'DMR',
                  color: "#000"
                }}>{selectedItem.name}</span>
                <div style={{
                  marginLeft: 'auto',
                  width: '50px',
                  height: '50px',
                  backgroundImage: `url(${selectedItem.imageUrl})`,
                  backgroundSize: 'cover',
                  borderRadius: '0.5rem'
                }}></div>
              </div>
            )}
    
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <input
                type="number"
                placeholder="Enter rate"
                value={rate}
                onChange={handleRateChange}
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
              <div>
                <label>
                  <input type="radio" value="per kg" checked={unit === "per kg"} onChange={handleUnitChange} />
                  per kg
                </label>
                <label>
                  <input type="radio" value="ton" checked={unit === "ton"} onChange={handleUnitChange} />
                  ton
                </label>
                <label>
                  <input type="radio" value="pc" checked={unit === "pc"} onChange={handleUnitChange} />
                  pc
                </label>
              </div>
            </div>
    
            <button onClick={handleSubmit} style={{
              padding: "15px 20px",
              borderRadius: "0.9rem",
              backgroundColor: "#385aeb",
              color: "white",
              border: "none",
              fontFamily: 'DMSB',
              fontSize: "1.3rem",
              cursor: "pointer",
              width: "100%"
            }}>
              Submit
            </button>
          </Modal>
        </div>
        )}
      </div>
    </div>
  );
};

export default ScrapLogin1;
