// app.js (Express Backend)
import express, { json } from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

app.use(cors()); // Allow cross-origin requests from the React app
app.use(json());

// Sample API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
