import  { useState } from "react";
import "./inputbar.css";

export default function InputBar({ setList, list, pinedList }) {


  const [input, setInput] = useState({
    id: list.length + 1 , 
    title: "", 
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.title.trim()) {
      
      setList([ { ...input, id: list.length + 1 },...list]);
      
      
      setInput({
        id: list.length + 2,
        title: "",
      });
    }
  };


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
