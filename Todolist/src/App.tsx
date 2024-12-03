import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import InputBar from "./components/InputBar";
import Task from "./components/Task";

import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([
    { id: 1, title: "dkjkdjkl" },
    { id: 2, title: "wertyerty sdfghj" },
    { id: 3, title: "1111111111111111111" },
    { id: 4, title: "2222222222222222" },
    { id: 5, title: "333333333333333" },
  ]);
  const [pinedList, setPinedList] = useState([]);
  const [isEllipsOpen, setEllispsOpen] = useState(null);
  const handleOutsideClick = () => {
    setEllispsOpen(null);
  };

  /*************  ✨ Codeium Command ⭐  *************/

  /******  9a1026e8-f916-4bff-be2a-52ec8f016df4  *******/

  const pin = (item) => {
    setPinedList((prv) => [item, ...prv]);

    setList((prv) => {
      const temp = prv.filter((pin) => {
        return pin.id !== item.id;
      });
      return temp;
    });
  };

  const Unpin = (item) => {
    setPinedList((prv) => {
      const temp = prv.filter((pin) => {
        return pin.id !== item.id;
      });
      setList((prv) => [...prv, item]);
      return temp;
    });

    setList((prv) => {
      const temp = prv.filter((pin) => {
        return pin.id !== item.id;
      });
      return temp;
    });
  };

  const deleteTask = (item) => {
    setPinedList((prv) => {
      const temp = prv.filter((pin) => {
        return pin.id !== item.id;
      });

      return temp;
    });
    setList((prv) => {
      const temp = prv.filter((pin) => {
        return item.id !== pin.id;
      });
      return temp;
    });
  };

  // Add a click listener to detect outside clicks
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);
  return (
    <>
      <div className=" app">
        <Header />
        <Slider />

        <InputBar list={list} pinedList={pinedList} setList={setList} />

        <Task
          setEllispsOpen={setEllispsOpen}
          pin={pin}
          Unpin={Unpin}
          deleteTask={deleteTask}
          list={list}
          pinedList={pinedList}
          isEllipsOpen={isEllipsOpen}
          setEllispsOpen={setEllispsOpen}
        />
      </div>
    </>
  );
}

export default App;
