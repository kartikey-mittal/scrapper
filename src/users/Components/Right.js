import React, { useState } from "react";
import R1 from "./R1";
import R2 from "./R2";
import R3 from "./R3";
import R4 from './R4/R4';

const Right = () => {
  const [componentID, setComponentID] = useState(1);

  const renderComponent = () => {
    switch (componentID) {
      case 1:
        return <R1 setComponentID={setComponentID} />;
      case 2:
        return <R2 setComponentID={setComponentID} />;
      case 3:
        return <R3 setComponentID={setComponentID} />;
      case 4:
        return <R4 setComponentID={setComponentID} />;
      default:
        return <R1 setComponentID={setComponentID} />;
    }
  };

  return (
    <div style={{ backgroundColor: '#fffefe', height: '100vh', overflow: 'hidden' }}>
      <div
        style={{
          border: '2px solid #000', // Border color
          borderRadius: '1.3rem', // Border radius
          height: 'calc(100% - 40px)', // Adjusted height to account for margin
          margin: '20px', // Margin around the div
          boxSizing: 'border-box', // Ensures padding and border are included in the element's total width and height
          display: 'flex',
          flexDirection: 'column', // Ensure child elements stack vertically
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
          Sell Your Scrap
        </div>
        <div style={{ flex: 1, overflowY: 'auto', backgroundColor: 'transparent' }}>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Right;
