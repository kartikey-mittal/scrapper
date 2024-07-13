import React from "react";
import R1 from "./R1";
import R2 from "./R2";
import R3 from "./R3";

const Right = () => {
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
        <div style={{ flex: 1, overflowY: 'auto',backgroundColor:'transparent' }}>
          {/* <R1 /> */}
          <R2 />
          {/* <R3/> */}
        </div>
      </div>
    </div>
  );
};

export default Right;
