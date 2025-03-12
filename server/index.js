import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import pg from "pg";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

db.connect();

// Middleware
const corsOptions = {
  origin: 'http://localhost:3000', 
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes

// Create a note
app.post("/notes", async (req, res) => {
  try {
    const { title, content } = req.body;
    const result = await db.query(
      "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// Get all notes
app.get("/notes", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM notes");
    res.status(200).json(result.rows);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// Update a note
app.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const result = await db.query(
      "UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *",
      [title, content, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

// Delete a note
app.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM notes WHERE id = $1", [id]);
    res.status(200).send("Note is deleted");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
