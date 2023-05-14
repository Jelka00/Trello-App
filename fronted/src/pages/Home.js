import { useEffect, useState } from "react";
import TaskDetailsToDo from "../components/TaskDetailsToDo";
import TaskDetailsInProgress from "../components/TaskDetailsInProgress";
import TaskDetailsInDone from "../components/TaskDetailsDone";
import AddTaskPopup from "../components/AddTaskPopUp";

import Modal from "react-modal";

const Home = () => {
  const [tasks, setTasks] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  function PopUp() {
    return (
      <Modal isOpen={isPopUpOpen} onRequestClose={togglePopUp}>
        <AddTaskPopup />
      </Modal>
    );
  }

  function Button() {
    return (
      <div>
        <button type="submit" onClick={togglePopUp}>
          Dodaj zadatak
        </button>
        <PopUp />
      </div>
    );
  }

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("/api/tasks");
      const json = await response.json();

      if (response.ok) {
        setTasks(json);
      }
    };
    fetchTasks();
  }, []);

  return (
    <html>
      <head></head>
      <body>
        <div class="container">
          <div class="section">
            <h2>To Do</h2>
            {tasks &&
              tasks.map((task) => (
                <TaskDetailsToDo key={task.id} task={task} />
              ))}
          </div>
          <div class="section">
            <h2>In Progress</h2>
            {tasks &&
              tasks.map((task) => (
                <TaskDetailsInProgress key={task.id} task={task} />
              ))}
          </div>
          <div class="section">
            <h2>Done</h2>
            {tasks &&
              tasks.map((task) => (
                <TaskDetailsInDone key={task.id} task={task} />
              ))}
          </div>
        </div>
        <div class="bottom-section">
          <Button />
        </div>
      </body>
    </html>
  );
};

export default Home;
