import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosNavigate } from "react-icons/io";
import { IoNavigateCircle } from "react-icons/io5";

import { IoIosCall } from "react-icons/io";
const BS1 = ({ isOpen1, toggleSheet }) => {
  const items = ['Aluminium', 'Steel', 'Copper', 'Bronze'];

  return (
    <div
      className={`bottom-sheet ${isOpen1 ? "open" : ""}`}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: isOpen1 ? "77%" : "0",
        backgroundColor: "white",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "height 0.3s ease",
      }}
    >
      <div
        className="bottom-sheet-content"
        style={{
          padding: "0.8rem",
          opacity: isOpen1 ? 1 : 0,
          transition: "opacity 0.3s ease",

          overflowY: 'auto', // Add vertical scroll for content 
          flex: 1,           
        }}
      >
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
            border: "0.01rem solid #cccccc", // Border shorthand property for simplicity
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

          <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
            {items.map((item, index) => (
              <span
                key={index} // Use a unique key for each item
                style={{
                  backgroundColor: "#fafafa",
                  border: "1px solid #CBC7C7",
                  paddingRight: 5,
                  paddingLeft: 8,
                  borderRadius: 5,
                  paddingTop: 5,
                  paddingBottom: 5,
                  color: "#7F7F7F",
                  fontFamily: "DMR",
                  marginRight: 10,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div style={{height:120,display:'flex',flex:1}}></div>

        <div style={{flex:1,height:'100%'}}></div>
        <div style={{ display: 'flex', flexDirection: "row", padding: 2, marginTop: 20, gap: 5, marginTop: 'auto' }}>
          <button style={{ paddingTop: 17, paddingBottom: 17, backgroundColor: "white", border: "0.1rem solid #e7191f", width: "40%", borderRadius: 10, fontSize: '1.2rem', color: '#e7191f', fontFamily: "DMB" }} onClick={toggleSheet}>REJECT</button>
          <button style={{ paddingTop: 17, paddingBottom: 17, backgroundColor: "#318216", border: "0.1rem solid #318216", width: "60%", borderRadius: 10, fontSize: '1.2rem', color: '#ffffff', fontFamily: "DMB" }} onClick={toggleSheet}>ACCEPT</button>
        </div>

   
      </div>
    </div>
  );
};

export default BS1;
