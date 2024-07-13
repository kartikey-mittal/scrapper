import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Item1', Price: 18, amt: 2400 },
  { name: 'Item2', Price: 20, amt: 2210 },
  { name: 'Item3',  Price: 38, amt: 2290 },
  { name: 'Item4',  Price: 22, amt: 2000 },
  { name: 'Item5', Price: 29, amt: 2181 },
 
];

function RightGraph() {
  return (
    <div style={{ width: "28vw", backgroundColor: "#d8ffcb", height: "67vh", marginTop: "3rem", marginLeft: "1rem", borderRadius: 10 ,border:"1px solid green"}}>
      <div style={{ height: "70%", padding: ".4rem",marginRight:"1.4rem" }}>
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
      </div>
      <div style={{ height: "10%", paddingLeft: "2rem" ,backgroundColor: "#d8ffcb",marginTop:'2rem'}}>
        <h3 style={{color:"#33333b",fontFamily:"DMSB"}}>Total Earn Money</h3>
        <h1 style={{color:"#33333b",marginBlock:"-.5rem",fontSize:"2.3rem",fontFamily:"DMB"}}>₹ 400</h1>
      </div>
    </div>
  );
}

export default RightGraph;
