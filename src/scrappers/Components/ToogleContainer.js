import React,{useState} from 'react'
import ToggleSwitch from "./Toggle/ToggleSwitch";
const ToggleContainer = () => {
    const [isToggled, setIsToggled] = useState(false);
  return (
    <div style={{marginTop:10}}>
         {/* toggle vali div */}
  <div className="toodle" style={{padding:'8px', backgroundColor:'#d2eef9',display:'flex', justifyContent:'space-between',
  alignItems:"center", 
  borderStyle:'none', 
  border: '1px solid black', 
  borderRadius: '15px', 
  height: '12vh'}}>

{/* if want to add in p tag ...#aviral kabadi vala😂 */}
   <h1 style={{marginLeft:5,fontFamily:'DMSB',color:'#7e8f95'}}> ScrapMate Project</h1>
  <ToggleSwitch
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
  
  </div>
    </div>
  )
}

export default ToggleContainer