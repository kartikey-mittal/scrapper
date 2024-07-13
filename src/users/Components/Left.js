import React from "react"
import { ImLocation2 } from "react-icons/im";
import OrderCard from "./OrderCard";
import PaymentCard from "./PaymentCard";


const Left = () => {
  return (
<div style={{backgroundColor:'#fffefe',height:'100vh',display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
      <div style={{height:"15vh",backgroundColor:'#d7ecff',width:"90%",display:"flex",flexDirection:"row",alignItems:"center",border:".05rem solid black",borderRadius:10,marginTop:"2rem"}}>
          <ImLocation2 style={{fontSize:"3rem",color:"#318216",marginLeft:"1rem"}}/>
          <div style={{width:"50%",marginLeft:"2rem",backgroundColor:"transparent"}}>
            <span style={{fontWeight:"lighter"}}>Singh Colony , Rudrapur , 201301 , Rudrapur</span>
          </div>
      </div>
      <div style={{height:"74vh",backgroundColor:'#d9ffe8',width:"90%",border:".05rem solid black",borderRadius:10}}>
        {/* <PaymentCard/> */}
        <OrderCard/>
      </div>
    </div>
  )
};

export default Left