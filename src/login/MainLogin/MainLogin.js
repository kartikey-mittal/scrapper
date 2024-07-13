import React from "react"
import MainLoginL from "./MainLoginL";
import MainLoginR from "./MainLoginR";

const MainLogin = () => {
  return (
 
        <div style={{display:'flex',flexDirection:'row',width:'100vw',height:'100vh',justifyContent:"space-between",backgroundColor:'#baf0a9',alignItems:"center"}}>
      <div style={{width:'53%'}}>
     <MainLoginL/>
      </div>
      <div style={{width:'45%'}}>
        <MainLoginR/>
      </div>
   
    </div>
  )
};

export default MainLogin
