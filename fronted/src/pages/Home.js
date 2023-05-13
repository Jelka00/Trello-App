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
        <h2>Add Task</h2>
        <AddTaskPopup />
      </Modal>
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
            <div>
              <button onClick={togglePopUp}>Add Task</button>
              <PopUp />
            </div>
          </div>
          <div class="section">
            <h2>Done</h2>
            {tasks &&
              tasks.map((task) => (
                <TaskDetailsInDone key={task.id} task={task} />
              ))}
          </div>
        </div>
      </body>
    </html>
  );
};

export default Home;
