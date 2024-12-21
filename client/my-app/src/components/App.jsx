import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error("Error fetching notes:", error));
  }, []);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((noteItem, index) => noteItem.id !== id));
  }

  function editNote(id, newTitle, newContent) {
    setNotes(prevNotes => 
      prevNotes.map(noteItem =>
        noteItem.id === id ? { ...noteItem, title: newTitle, content: newContent } : noteItem
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="notes-wrapper">
        {notes.map(noteItem => (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
