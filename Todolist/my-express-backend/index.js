import express from "express";
import cors from "cors";
import { data, addTask, pinTask, unpinTask, markTaskDone, deleteTask } from "./data.js";


const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for frontend requests
app.use(express.json()); // Enable JSON body parsing

// ✅ Get all tasks for a specific day
app.get("/api/tasks/:day", (req, res) => {
  const { day } = req.params;
  if (!data[day]) return res.status(404).json({ message: "Day not found!" });

  res.json(data[day]);
});

// ✅ Add a new task to a specific day
app.post("/api/tasks/:day", (req, res) => {
  const { day } = req.params;
  const { task } = req.body;

  if (!task) return res.status(400).json({ message: "Task is required!" });
  if (!data[day]) return res.status(404).json({ message: "Day not found!" });

  const newTask = addTask(day, task);
console.log(newTask);
  res.status(201).json(newTask);
});

// ✅ Pin a task (Move from unPinList to pinList)
app.put("/api/tasks/:day/pin/:taskId", (req, res) => {
  const { day, taskId } = req.params;
  const pinnedTask = pinTask(day, parseInt(taskId));

  if (pinnedTask === "Task not found!") return res.status(404).json({ message: "Task not found!" });
  console.log(pinTask);
  res.json(pinnedTask);

});


// ✅ Unpin a task (Move from pinList to unPinList)
app.put("/api/tasks/:day/unpin/:taskId", (req, res) => {
  const { day, taskId } = req.params;
  const unpinnedTask = unpinTask(day, parseInt(taskId));

  if (unpinnedTask === "Task not found!") return res.status(404).json({ message: "Task not found!" });
 console.log(unpinTask);
  res.json(unpinnedTask);
});

// ✅ Mark a task as done (Move from undoneList to doneList)
app.put("/api/tasks/:day/done/:taskId", (req, res) => {
  const { day, taskId } = req.params;
  const updatedTask = markTaskDone(day, parseInt(taskId));

  if (updatedTask === "Task not found!") return res.status(404).json({ message: "Task not found!" });

  res.json(updatedTask);
  
});

// ✅ Delete a task from all lists
app.delete("/api/tasks/:day/:taskId", (req, res) => {
  const { day, taskId } = req.params;
  deleteTask(day, parseInt(taskId));

  res.json({ message: "Task deleted!" });
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
