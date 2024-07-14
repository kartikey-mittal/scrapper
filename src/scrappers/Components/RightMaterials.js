import React from 'react';
import { motion } from 'framer-motion';

function RightMaterials({ materials }) {
  const containerStyle = {
    width: "20vw",
    backgroundColor: "#f4f4f4",
    marginTop: "3rem",
    borderRadius: 10,
    border: ".5px solid grey",
    overflowY: "auto",
    padding: "1rem",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  };

  const headerStyle = {
    color: "#ffffff",
    fontFamily: "DMB",
    marginLeft: "1.3rem",
    marginBottom: "1rem",
    paddingBottom: "0.5rem",
    background: "linear-gradient(to right, #007991, #78ffd6)",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
  };

  const itemStyle = {
    marginBottom: "0.5rem",
    padding: "0.5rem 0",
    cursor: "pointer",
    borderRadius: "5px",
  };

  const nameStyle = {
    color: "#74b7a0",
    margin: 0,
    fontSize: "1rem",
    fontWeight: "lighter",
    textShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  };

  const weightStyle = {
    color: "green",
    margin: 0,
    fontSize: "1rem",
    fontWeight: "lighter",
    textShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3 style={headerStyle} initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
        My Materials
      </motion.h3>
      {materials.map((material, index) => (
        <motion.div
          key={index}
          style={itemStyle}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(116, 183, 160, 0.2)",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.09)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: (index + 1) * 0.1 }}
        >
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" ,alignItems:"center"}}>
            <h3 style={nameStyle}>{material.name}</h3>
            <motion.p
              style={weightStyle}
              // initial={{ y: "100%" }}
              // whileHover={{ y: "50%" }}
              // transition={{ duration: 0.5 }}
            >
              {material.weight}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default RightMaterials;