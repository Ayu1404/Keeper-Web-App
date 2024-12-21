import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import pg from "pg";

// Load environment variables
dotenv.config();

const app = express();
const port =  5000;

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
    const { title, content } = req.body; // Destructure content as well
    const result = await db.query(
      "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
      [title, content]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// Get all notes
app.get("/notes", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM notes");
    res.json(result.rows);
  } catch (err) {
    console.log(err.message);
  }
});



// Update a note
app.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body; // Destructure content as well
    const result = await db.query(
      "UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *",
      [title, content, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// Delete a note
app.delete("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM notes WHERE id = $1", [id]);
    res.json("Note is deleted");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log(`Server is started on port ${port}`);
});
