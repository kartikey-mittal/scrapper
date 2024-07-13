import React from 'react'
import { MdOutlineAddCard } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";



function PaymentCard() {
        const items = ['Aluminium', 'Steel', 'Copper'];

        const handlePay=()=>{
                console.log('Pay bc');
        }
              
  return (
        <div>
        
    <div style={{display:"flex",flexDirection:"column",padding:"1rem",backgroundColor:"#fafafa",margin:"1rem",border:".08rem solid black",borderRadius:10}}>
    <span style={{paddingLeft:".1rem",fontSize:"2rem",fontFamily:"DMSB"}}>Do Payment</span>
    <div style={{ display: "flex", flexDirection: "column", marginTop: '2rem' }}>
            {items.map((item, index) => (
              <span
                key={index} // Use a unique key for each item
                style={{
                  backgroundColor: "white",
                  border: "1px solid #CBC7C7",
                  paddingRight: 5,
                  paddingLeft: 8,
                  borderRadius: 5,
                  paddingTop: 5,
                  paddingBottom: 5,
                  color: "#7F7F7F",
                  fontFamily: "DMR",
                  marginRight: 10,
                  width:"30%",
                  marginTop:"1rem"
                }}
              >
                {item}
              </span>
            ))}
          </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"3rem"}}>
        <MdOutlineAddCard style={{fontSize:"4rem"}}/>
            <div style={{display:"flex",flexDirection:"column"}}>
                <span style={{fontSize:".8rem",fontFamily:"DMSB"}}>Total Bill Amount</span>
                <div style={{display:"flex",flexDirection:"row"}}>
                <span style={{fontSize:"2rem",marginTop:".5rem",fontFamily:"DMB"}}>₹ </span>
                <span style={{fontSize:"2.3rem",marginTop:".5rem",fontFamily:"DMB",marginLeft:".3rem",color:"green",marginTop:".3rem"}}>400</span>
                </div>
            </div>
        </div>
        <button 
      style={{
        
        backgroundColor: "#000125",
        border: "0.1rem solid black",
        width: "100%",
        borderRadius: 20,
        fontSize: "1.2rem",
        color: "#ffffff",
        fontFamily: "DMB", 
        padding:".7rem",
        marginTop:"3rem",
        cursor:"pointer"
      }}
      onClick={handlePay} 
    >
      Pay Now
      <FaArrowRight style={{marginLeft:"1rem",position:"relative",top:"0.3rem",fontSize:"1.5rem"}}/>
    </button>
    </div>
    </div>
  )
}

export default PaymentCard