import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import InputBar from "./components/InputBar";
import Task from "./components/Task";
import axios from "axios";

import { type CarouselApi } from "@/components/ui/carousel";

import { useEffect, useState } from "react";

const generateDaysArray = (startDate, numberOfDays) => {
  const daysArray = [];
  const current = new Date(startDate);

  for (let i = 0; i < numberOfDays; i++) {
    daysArray.push({
      day: current.toLocaleDateString("en-US", { weekday: "long" }),
      date: current.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    });
    // Increment the date by one day
    current.setDate(current.getDate() + 1);
  }

  return daysArray;
};

// Example usage
const currentDate = new Date(); // Starting date

const days = generateDaysArray(currentDate, 7);

const saveToStorageWithTimestamp = (key, data) => {
  const timestampedData = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem(key, JSON.stringify(timestampedData));
};

// Function to load data with timestamp validation
const loadFromStorageWithTimestamp = (key, defaultValue, expirationTime = 24 * 60 * 60 * 1000) => {
  const saved = localStorage.getItem(key);
  if (saved) {
    const { data, timestamp } = JSON.parse(saved);
    // Check if data is still valid (not expired)
    if (Date.now() - timestamp < expirationTime) {
      return data;
    } else {
      localStorage.removeItem(key); // Clear expired data
      return defaultValue;
    }
  }
  return defaultValue; // If nothing is saved or expired
};


function App() {
  useEffect(() => {
    // Send a GET request to the backend using a relative URL
    axios.get('/api')
      .then(response => {
        postMessage(response.data.message); // Set the response message from the API
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);






  



  const [listOfTodos, setListOfTodos] = useState(
    loadFromStorageWithTimestamp("listOfTodos", [[], [], [], [], []])
  );
  const [listOfPinedTodos, setListOfPinedTodos] = useState(
    loadFromStorageWithTimestamp("listOfPinedTodos", [[], [], [], [], [], [], []])
  );

  // Whenever the data changes, save it to localStorage
  useEffect(() => {
    saveToStorageWithTimestamp("listOfTodos", listOfTodos);
  }, [listOfTodos]);

  useEffect(() => {
    saveToStorageWithTimestamp("listOfPinedTodos", listOfPinedTodos);
  }, [listOfPinedTodos]);



  



  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(0);

  const [pinedList, setPinedList] = useState<TaskType[]>(
    listOfPinedTodos[current - 1] || []
  );
  const [isEllipsOpen, setEllispsOpen] = useState<number | null>(null);
  const [list, setList] = useState<TaskType[]>(listOfTodos[current - 1] || []);




  useEffect(() => {
    setList(listOfTodos[current - 1]);
    setPinedList(listOfPinedTodos[current - 1]);
  }, [current]);



  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);





  
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

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
  const generateId = () =>
    `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // Add a click listener to detect outside clicks
  const [input, setInput] = useState({
    id: generateId(),
    title: "",
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.title.trim()) {
      setList([{ ...input, id: generateId()}, ...list]);

      setInput({
        id: generateId(),
        title: "",
      });
    }
  };


  
  const Unpin = (item) => {
    setPinedList((prev) => prev.filter((pin) => pin.id !== item.id));
    setList((prev) => [...prev, item]);
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

  const handleDayChange = (newDay) => {
    // Save current day lists
    setListOfTodos((prev) => {
      const updated = [...prev];
      updated[current - 1] = list;
      return updated;
    });
  
    setListOfPinedTodos((prev) => {
      const updated = [...prev];
      updated[current - 1] = pinedList;
      return updated;
    });
  
    // Switch to the new day
    setCurrent(newDay);
  
    // Load new day's lists
    setList(listOfTodos[newDay - 1] || []);
    setPinedList(listOfPinedTodos[newDay - 1] || []);
  };
  
  return (
    <>
      <div className=" app">
        <Header />
        <Slider days={days} setApi={setApi}  handleDayChange={handleDayChange}/>

        <InputBar
          input={input}
          setInput={setInput}
          handleKeyDown={handleKeyDown}
          list={list}
          pinedList={pinedList}



          
        />

        <Task
          setEllispsOpen={setEllispsOpen}
          pin={pin}
          Unpin={Unpin}
          deleteTask={deleteTask}
          list={list}
          pinedList={pinedList}
          isEllipsOpen={isEllipsOpen}
        />
      </div>
    </>
  );
}

export default App;