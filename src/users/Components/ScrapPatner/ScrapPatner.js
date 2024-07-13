import React from 'react'
import "./ScrapPatner.css"
import recImage from './rec.png';
const ScrapPatner = () => {
  return (
    <div className='parent ' style={{ marginTop:"3rem" ,border:'.05rem solid black'}}>
      <div className='div-left'></div>
     
      <div className='div-right'>
     
     <div>  <p style={{fontSize:'x-large' ,marginBottom:'4px'}}> Aviral saxena</p>
     <div style={{ textAlign: 'right', marginLeft: '3rem', paddingLeft: '2rem' }} className='patani'>Aluminium <span className="blank">₹7/KG</span> </div>
     </div>
     <div  style={{ alignSelf:'end',marginLeft:'3rem' , paddingLeft:'2rem',textAlign: 'end', }} className='patani ok'>Aluminium <span className="blank">₹7/KG</span> </div>
    </div>
     
     
     
<div>   <img style={{width:'auto',height:'30px', display:'flex',alignSelf:'center',justifyContent:'start',marginRight:'2rem', }} src={recImage} alt="Recycled Material" /></div>
     
    </div>
  )
}

export default ScrapPatner