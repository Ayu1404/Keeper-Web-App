import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {
    event.preventDefault();

    fetch("http://localhost:5000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    })
    .then(response => response.json())
    .then(newNote => {
      props.onAdd(newNote);
      setNote({
        title: "",
        content: ""
      });
      setErrorMessage(''); // Clear any previous error messages
    })
    .catch(error => {
      console.error("Error adding note:", error);
      setErrorMessage('Failed to add note');
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="newnote">
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default CreateArea;
