import React from "react"
import Left from "../Components/Left";
import Right from "../Components/Right";

const ScrapHome = () => {
  return (
    <div style={{height:'100vh',backgroundColor:'black'}}>
        <div style={{display:'flex',flexDirection:'row',width:'100vw',height:'100vh'}}>
      <div style={{width:'40%'}}>
        <Left/>
      </div>
      <div style={{width:'60%'}}>
        <Right/>
      </div>
      </div>
    </div>
  )
};

export default ScrapHome
