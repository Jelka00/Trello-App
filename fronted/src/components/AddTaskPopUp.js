import React from "react";
import { useState } from "react";

const AddTaskPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = { title, description, status, user };

    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
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
          <button type="submit">Dodaj zadatak</button>
          {error && <div className="error">{error}</div>}
          <br></br>
          <br></br>
        </form>
        <button type="submit2" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTaskPopup;
