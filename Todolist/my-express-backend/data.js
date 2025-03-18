let data = {
     Monday: {
       pinList: [
         { id: 1, task: "Buy groceries", done: false },
         { id: 2, task: "Finish homework", done: false },
       ],
       unPinList: [{ id: 3, task: "Clean the room", done: false }],
       doneList: [],
       undoneList: [
         { id: 1, task: "Buy groceries", done: false },
         { id: 2, task: "Finish homework", done: false },
       ],
     },
     Tuesday: {
       pinList: [{ id: 4, task: "Attend meeting", done: false }],
       unPinList: [{ id: 5, task: "Read a book", done: false }],
       doneList: [],
       undoneList: [
         { id: 4, task: "Attend meeting", done: false },
         { id: 5, task: "Read a book", done: false },
       ],
     },
     Wednesday: { pinList: [], unPinList: [], doneList: [], undoneList: [] },
     Thursday: { pinList: [], unPinList: [], doneList: [], undoneList: [] },
     Friday: { pinList: [], unPinList: [], doneList: [], undoneList: [] },
     Saturday: { pinList: [], unPinList: [], doneList: [], undoneList: [] },
     Sunday: { pinList: [], unPinList: [], doneList: [], undoneList: [] },
   };
   
   // ✅ Add a new task (by default, goes to unPinList and undoneList)
   const addTask = (day, task) => {
     if (!data[day]) return "Invalid day!";
     const newTask = { id: Date.now(), task, done: false };
     data[day].unPinList.push(newTask);
     data[day].undoneList.push(newTask);
     return newTask;
   };
   
   // ✅ Pin a task (Move from unPinList to pinList)
   const pinTask = (day, taskId) => {
     if (!data[day]) return "Invalid day!";
     const taskIndex = data[day].unPinList.findIndex((t) => t.id === taskId);
   
     if (taskIndex !== -1) {
       const task = data[day].unPinList.splice(taskIndex, 1)[0]; // Remove from unPinList
       data[day].pinList.push(task); // Add to pinList
       return task;
     }
     return "Task not found!";
   };
   
   // ✅ Unpin a task (Move from pinList to unPinList)
   const unpinTask = (day, taskId) => {
     if (!data[day]) return "Invalid day!";
     const taskIndex = data[day].pinList.findIndex((t) => t.id === taskId);
   
     if (taskIndex !== -1) {
       const task = data[day].pinList.splice(taskIndex, 1)[0]; // Remove from pinList
       data[day].unPinList.push(task); // Add to unPinList
       return task;
     }
     return "Task not found!";
   };
   
   // ✅ Mark task as done (Move from undoneList to doneList)
   const markTaskDone = (day, taskId) => {
     if (!data[day]) return "Invalid day!";
     const taskIndex = data[day].undoneList.findIndex((t) => t.id === taskId);
   
     if (taskIndex !== -1) {
       const task = data[day].undoneList.splice(taskIndex, 1)[0]; // Remove from undoneList
       task.done = true;
       data[day].doneList.push(task); // Add to doneList
       return task;
     }
     return "Task not found!";
   };
   
   // ✅ Delete a task (Remove from all lists)
   const deleteTask = (day, taskId) => {
     if (!data[day]) return "Invalid day!";
     data[day].pinList = data[day].pinList.filter((t) => t.id !== taskId);
     data[day].unPinList = data[day].unPinList.filter((t) => t.id !== taskId);
     data[day].doneList = data[day].doneList.filter((t) => t.id !== taskId);
     data[day].undoneList = data[day].undoneList.filter((t) => t.id !== taskId);
     return "Task deleted!";
   };
   
   // Export functions for backend usage
   export { data, addTask, pinTask, unpinTask, markTaskDone, deleteTask };
