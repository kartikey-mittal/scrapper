import React, { useState } from 'react';
import { motion } from 'framer-motion';

function RightVehicle() {
  const [hovered, setHovered] = useState(false);

  const iconStyle = {
    width: "10rem",  // Adjust width and height according to your design
    height: "8rem",
    marginLeft: hovered ? "12rem" : "0rem",
    transition: "margin-left 0.4s ease-in-out",
   
  };

  const containerStyle = {
    width: "20vw",
    height: "25vh",
    marginTop: "2rem",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    border: ".5px solid grey",
    cursor: "pointer",
    paddingLeft: "1.3rem",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    background: "linear-gradient(to right, #d7e4f7, #f7d7e4)", // Updated gradient color
  };

  const headerStyle = {
    color: "#33333b",
    fontFamily: "DMB",
    marginLeft: "0rem",
    borderBottom: "1.3px solid #ccc",
    paddingBottom: "0.5rem",
    textShadow: "0px 0px 10px rgba(0,0,0,0.3)",
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.div
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3 style={headerStyle} initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
        My Vehicle
      </motion.h3>
      <motion.div
        style={iconStyle}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <img src="https://s10.gifyu.com/images/St6lm.png" alt="Vehicle" style={{ width: "100%", height: "100%", borderRadius: "20px" }} />
      </motion.div>
    </motion.div>
  );
}

export default RightVehicle;
