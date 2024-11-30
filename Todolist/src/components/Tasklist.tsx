import "./tasklist.css";
import pin from "../assets/pin.png";
import React, { useState } from "react";
import EllipsisMenu from "./EllipsisMenu";

export default function Tasklist() {


  
  const [isPined, setPined] = React.useState(false);
  const [isEllipsOpen, setEllispsOpen]=useState(false)

  
  
  return (
    <div className="tasklist">
      <div className="pinimage">
        {isPined ? <img src={pin} alt="pin" className="pinimage" /> : " "}
      </div>

      <label className="custom-checkbox ">
        <input type="checkbox" />
        <span className="checkmark"></span>
        Stylish Checkbox
      </label>

      <div className="ellipsis" onClick={()=>setEllipsisMenuclicKed(!isEllipsisMenuclicKed)} >
        <i className="fas fa-ellipsis-h"></i>
      </div> 
       
<div className="menuelipsi">
{isEllipsisMenuclicKed && <EllipsisMenu/>}
</div>


        
      
      
    </div>
  );
}
