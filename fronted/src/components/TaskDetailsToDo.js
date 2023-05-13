const TaskDetailsToDo = ({ task }) => {
  if (task.status == "To Do") {
    return (
      <div className="task-details">
        <h4>{task.title}</h4>
      </div>
    );
  }
};

export default TaskDetailsToDo;
