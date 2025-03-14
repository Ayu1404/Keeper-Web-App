import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'; 
import SaveIcon from '@mui/icons-material/Save';

function Note (props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);
  const [errorMessage, setErrorMessage] = useState('');

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    fetch(`http://localhost:5000/notes/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: editedTitle, content: editedContent })
    })
    .then(response => response.json())
    .then(updatedNote => {
      props.onEdit(props.id, updatedNote.title, updatedNote.content);
      setIsEditing(false);
      setErrorMessage(''); // Clear any previous error messages
    })
    .catch(error => {
      console.error("Error editing note:", error);
      setErrorMessage('Failed to save changes');
    });
  }

  function handleDeleteClick() {
    fetch(`http://localhost:5000/notes/${props.id}`, {
      method: "DELETE"
    })
    .then(() => {
      props.onDelete(props.id);
      setErrorMessage(''); // Clear any previous error messages
    })
    .catch(error => {
      console.error("Error deleting note:", error);
      setErrorMessage('Failed to delete note');
    });
  }

  return (
    <div className="note">
      {isEditing ? (
        <div className="editnote">
          <input 
            type="text" 
            value={editedTitle} 
            placeholder="Title"
            onChange={(e) => setEditedTitle(e.target.value)} 
          />
          <textarea 
            value={editedContent} 
            placeholder="Note"
            onChange={(e) => setEditedContent(e.target.value)} 
          />
          <button onClick={handleSaveClick}><SaveIcon /></button>
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button className="edit-button" onClick={handleEditClick}><EditIcon /></button> {/* Edit button */}
          <button className="delete-button" onClick={handleDeleteClick}><DeleteIcon /></button> {/* Delete button */}
        </div>
      )}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default Note;
