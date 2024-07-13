import React from "react"
import R4 from "./R4/R4";

const Right = () => {

  return (
    <div style={{backgroundColor:'white',height:'100vh ',padding:'2rem'}}>
     <div className="wrapper" style={{padding:'0rem' ,borderRadius:'10px',height:'90vh' ,backgroundColor:'#F3F3F3',borderRadius:'10px' ,border:'1px solid black', }}>

     <div className="top-hedder " style={{height:'10vh',backgroundColor:'#252525',display:'flex',alignItems:'center', justifyContent: 'flex-start',color:'white',fontSize:'x-large', fontWeight: 'bold',paddingLeft: '0', borderRadius:'10px'}}>

<p style={{paddingLeft:'2rem'}}>Sell Your Scrap</p>

      </div>


      <R4 />

     </div>
    </div>
  )
};

export default Right