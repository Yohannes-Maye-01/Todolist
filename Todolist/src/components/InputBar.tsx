import  { useState } from "react";
import "./inputbar.css";

export default function InputBar({ input,setInput,handleKeyDown ,list,pinedList}) {


 


  return (
    <div className="inputBar">

      <input
        type="text"
        placeholder="Add a task ..."
        className="inputtask"
        value={input.title}
        onChange={(event) => {
         

          setInput((prv) => {
            const l = {
              id: list.length + 1 + pinedList.length,
              title: event.target.value,
            };
            return l;
          });

          
         
        }}
        onKeyDown={handleKeyDown}


      />

    </div>
  );
}
