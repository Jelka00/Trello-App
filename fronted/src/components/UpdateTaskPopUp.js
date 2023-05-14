import React from "react";
import { useState } from "react";

const UpdateTaskPopup = ({ task }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [user, setUser] = useState(task.user);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTask = { title, description, status, user };

    const response = await fetch(`/api/tasks/${task._id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setStatus("");
      setUser("");
      setError(null);
      console.log("Dodat zadatak", json);
    }
    window.location.reload();
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Naslov:</label>
          <input
            id="title"
            type="text"
            placeholder="Unesi naslov zadatka"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Opis:</label>
          <textarea
            id="description"
            placeholder="Unesi opis zadatka"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <label htmlFor="user">Korisnik:</label>
          <select
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          >
            <option value="Nikola">Nikola</option>
            <option value="Marko">Marko</option>
            <option value="Tanja">Tanja</option>
          </select>
          <button type="submit">Azuriraj zadatak</button>
          {error && <div className="error">{error}</div>}
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default UpdateTaskPopup;
