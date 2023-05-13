import React from "react";

function AddTaskPopup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <form onSubmit={props.onSubmit}>
          <label htmlFor="title">Naslov:</label>
          <input
            id="title"
            type="text"
            placeholder="Unesi naslov zadatka"
            value={props.taskTitle}
            onChange={props.onTitleChange}
          />
          <label htmlFor="description">Opis:</label>
          <textarea
            id="description"
            placeholder="Unesi opis zadatka"
            value={props.taskDescription}
            onChange={props.onDescriptionChange}
          ></textarea>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={props.taskStatus}
            onChange={props.onStatusChange}
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <label htmlFor="user">Korisnik:</label>
          <input
            id="user"
            type="text"
            placeholder="Dodeli korisniku"
            value={props.taskUser}
            onChange={props.onUserChange}
          />
          <button type="submit">Dodaj zadatak</button>
        </form>
        <button className="close-btn" onClick={props.onClose}>
          Zatvori
        </button>
      </div>
    </div>
  );
}

export default AddTaskPopup;
