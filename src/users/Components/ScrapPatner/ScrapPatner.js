import React,{useState} from 'react'
import "./ScrapPatner.css"
import recImage from './rec.png';


const ScrapPatner = ({ imageUrl, partnerInfo }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleImageClick = () => {
    setIsSelected(!isSelected);
    console.log(isSelected ? "Image deselected" : "Image selected");
  };
  const { name, material ,weightPerKg} = partnerInfo;
  return (
    <div className='parent ' style={{ margin:"3rem 2rem" ,border:'.05rem solid black',backgroundColor:"transparent"}}>
      <div className='div-left'>
      <img
          onClick={handleImageClick}
          style={{
            width: '70px',
            height: '60px',
            borderRadius: '10px',
            display: 'inline-block',
            marginRight: '2rem',
            cursor: 'pointer',
            border: isSelected ? '2px solid #65C047' : 'none',
          }}
          src={imageUrl}
          alt={`Scrap Material`}
        />
      </div>
     
      <div className='div-right' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <p style={{ fontSize: 'x-large', marginBottom: '4px',alignSelf:"flex-start" }}>{name}</p>
        <div style={{ display: 'flex', flexDirection: 'row' ,marginTop:"1rem"}}>
          <div style={{ textAlign: 'right', marginLeft: '3rem', padding: '0.4rem 0rem 0.4rem 1rem', display: 'flex', justifyContent: 'space-between', border: '1px solid black', borderRadius: '5px', alignItems: 'center' }}>
            <span>{material}</span>
            <span style={{ marginLeft: '10px', backgroundColor: '#65C047', padding: '0.4rem 1rem', borderRadius: '5px', color: 'white', fontFamily: 'DMSB', height: '100%', display: 'flex', alignItems: 'center' ,justifyContent:"flex-end"}}>
              ₹{weightPerKg}/KG
            </span>
          </div>
          <div style={{ textAlign: 'right', marginLeft: '3rem', padding: '0.4rem 0rem 0.4rem 1rem', display: 'flex', justifyContent: 'space-between', border: '1px solid black', borderRadius: '5px', alignItems: 'center' }}>
            <span>{material}</span>
            <span style={{ marginLeft: '10px', backgroundColor: '#65C047', padding: '0.4rem 1rem', borderRadius: '5px', color: 'white', fontFamily: 'DMSB', height: '100%', display: 'flex', alignItems: 'center' }}>
              ₹{weightPerKg}/KG
            </span>
          </div>
        </div>
      </div>
     
     
     
<div>  <img onClick={handleImageClick} style={{width:'auto',height:'30px',borderRadius:'20px', display:'flex',alignSelf:'center',justifyContent:'start',marginRight:'2rem', cursor: 'pointer',
          border: isSelected ? '2px  solid #65C047 ' : 'none', }} src={recImage} alt="Recycled Material" />

</div>

    </div>
  )
}

export default ScrapPatner