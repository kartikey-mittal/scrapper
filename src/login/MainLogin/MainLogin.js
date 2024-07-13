import React from "react"
import MainLoginL from "./MainLoginL";
import MainLoginR from "./MainLoginR";

const MainLogin = () => {
  return (
 
        <div style={{display:'flex',flexDirection:'row',width:'100vw',height:'100vh'}}>
      <div style={{width:'55%'}}>
     <MainLoginL/>
      </div>
      <div style={{width:'45%'}}>
        <MainLoginR/>
      </div>
   
    </div>
  )
};

export default MainLogin
