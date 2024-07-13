import React from "react";
import RightUp from "./RightUp";
import RightGraph from "./RightGraph";
import RightMaterials from "./RightMaterials";
import RightVechicle from "./RightVechicle";

const materialsData = [
  { name: "Iron", weight: "₹ 7/kg" },
  { name: "Copper", weight: "₹ 20/kg" },
  { name: "Aluminum", weight: "₹ 10/kg" },
  // Add more materials as needed
];

const Right = () => {
  return (
    <div style={{ backgroundColor: '#fffefe', height: '100vh' }}>
      <RightUp count1={30} count2={40} count3={50} />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
        <RightGraph />
        <RightMaterials materials={materialsData} />
        <RightVechicle />
      </div>
    </div>
  );
};

export default Right;
