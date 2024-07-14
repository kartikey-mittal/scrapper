import React from 'react';
import { motion } from 'framer-motion';

function RightUp({ count1, count2, count3 }) {
  const boxStyle = {
    width: "15vw",
    border: "1px solid grey",
    marginTop: "1rem",
    borderRadius: 10,
    padding: '1rem 0rem',
    cursor: 'pointer',
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  };

  const textStyle = {
    textAlign: "center",
    color: "#ffffff",
    marginBottom: "0.5rem",
    fontFamily: "DMB",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  };

  const countStyle = {
    textAlign: "center",
    color: "#ffffff",
    fontSize: "2.6rem",
    marginTop: "0.5rem",
    fontFamily: "DMB",
    textShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <motion.div
        style={{
          ...boxStyle,
          background: "linear-gradient(to right, #007991, #78ffd6)",
        }}
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 style={textStyle}>Completed</h3>
        <motion.h1
          style={{ ...countStyle, background: "rgba(0, 0, 0, 0.2)", padding: "0.5rem",borderRadius:10 }}
          initial={{ y: "65%" }}
          whileHover={{ y: "20%" }}
          transition={{ duration: 0.5 }}
        >
          {count1}
        </motion.h1>
      </motion.div>
      <motion.div
        style={{
          ...boxStyle,
          background: "linear-gradient(to right, #ff6b6b, #ffa500)",
        }}
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 style={textStyle}>Rejected</h3>
        <motion.h1
          style={{ ...countStyle, background: "rgba(0, 0, 0, 0.2)", padding: "0.5rem",borderRadius:10 }}
          initial={{ y: "65%" }}
          whileHover={{ y: "20%" }}
          transition={{ duration: 0.5 }}
        >
          {count2}
        </motion.h1>
      </motion.div>
      <motion.div
        style={{
          ...boxStyle,
          background: "linear-gradient(to right, #8e44ad, #3498db)",
        }}
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.95, boxShadow: "0px 0px 10px rgba(0,0,0,0.2)" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 style={textStyle}>Cancelled</h3>
        <motion.h1
          style={{ ...countStyle, background: "rgba(0, 0, 0, 0.2)", padding: "0.5rem",borderRadius:10 }}
          initial={{ y: "65%" }}
          whileHover={{ y: "20%" }}
          transition={{ duration: 0.5 }}
        >
          {count3}
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default RightUp;