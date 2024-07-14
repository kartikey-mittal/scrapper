import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Item1', Price: 18, amt: 2400 },
  { name: 'Item2', Price: 20, amt: 2210 },
  { name: 'Item3', Price: 38, amt: 2290 },
  { name: 'Item4', Price: 22, amt: 2000 },
  { name: 'Item5', Price: 29, amt: 2181 },
];

function RightGraph({balance}) {
  return (
    <motion.div
      style={{
        width: "28vw",
        backgroundColor: "linear-gradient(to right, #d7e4f7, #f7d7e4)", // Updated gradient color
        height: "63vh",
        marginTop: "3rem",
        marginLeft: "1rem",
        borderRadius: 10,
        border: "1px solid green",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{ height: "70%", padding: ".4rem", marginRight: "1.4rem" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Price" stroke="#00356a" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
      <motion.div
        style={{ height: "10%", paddingLeft: "2rem", backgroundColor: "#d8ffcb", marginTop: "2rem" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 style={{ color: "#33333b", fontFamily: "DMSB" }}>Total Earn Money</h3>
        <h1 style={{ color: "#33333b", marginBottom: ".5rem", fontSize: "2.3rem", fontFamily: "DMB" }}>₹ {balance}</h1>
      </motion.div>
    </motion.div>
  );
}

export default RightGraph;