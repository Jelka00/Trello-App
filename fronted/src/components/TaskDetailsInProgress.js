import { useState } from "react";
import UpdateTaskPopup from "../components/UpdateTaskPopUp";
import Modal from "react-modal";
const TaskDetailsInProgress = ({ task }) => {
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
  const toggleEditTask = () => {
    setIsEditTaskOpen(!isEditTaskOpen);
  };
  function UpdatePopUp() {
    return (
      <Modal isOpen={isEditTaskOpen} onRequestClose={toggleEditTask}>
        <UpdateTaskPopup key={task.id} task={task} />
      </Modal>
    );
  }

  if (task.status == "In Progress") {
    return (
      <div className="task-details">
        <h4 onClick={toggleEditTask}>{task.title}</h4>
        <UpdatePopUp key={task.id} task={task} />
      </div>
    );
  }
};

export default TaskDetailsInProgress;
