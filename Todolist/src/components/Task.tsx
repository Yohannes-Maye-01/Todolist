import React, { useEffect, useState } from "react";
import Tasklist from "./Tasklist";

function Task({
  isEllipsOpen,
  setEllispsOpen,
  pin,
  Unpin,
  deleteTask,
  pinedList,
  list,
}) {
  return (
    <>

    
      {pinedList &&
        pinedList.map((item) => (
          <Tasklist
            isPined={true}
            item={item}
            isEllipsOpen={item.id === isEllipsOpen}
            setEllispsOpen={setEllispsOpen}
            Unpin={Unpin}
            deleteTask={deleteTask}
          />
        ))}
      {list &&
        list.map((item) => (
          <Tasklist
            isPined={false}
            item={item}
            isEllipsOpen={item.id === isEllipsOpen}
            setEllispsOpen={setEllispsOpen}
            pin={pin}
            deleteTask={deleteTask}

          />
        ))}
    </>
  );
}

export default Task;
