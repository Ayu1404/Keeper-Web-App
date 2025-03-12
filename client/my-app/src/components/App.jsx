import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then(response => response.json())
      .then(data => {
        setNotes(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching notes:", error);
        setErrorMessage('Failed to fetch notes');
        setIsLoading(false);
      });
  }, []);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter(noteItem => noteItem.id !== id));
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
        {isLoading ? (
          <p>Loading notes...</p>
        ) : errorMessage ? (
          <p className="error">{errorMessage}</p>
        ) : (
          notes.map(noteItem => (
            <Note
              key={noteItem.id}
              id={noteItem.id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
