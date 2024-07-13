import React, { useState } from "react"

import OrderList from "./OrderList/OrderList";
import ToggleContainer from "./ToggleContainer";

const Left = () => {
  

  return (
<div style={{backgroundColor:'white',height:'100vh',padding:'8px'}}>
 <ToggleContainer/>
  
<OrderList/>

    </div>
  )
};

export default Left
