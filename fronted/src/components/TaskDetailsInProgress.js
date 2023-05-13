const TaskDetailsInProgress = ({ task }) => {
  if (task.status == "In Progress") {
    return (
      <div className="task-details">
        <h4>{task.title}</h4>
      </div>
    );
  }
};

export default TaskDetailsInProgress;
