const TaskDetailsInDone = ({ task }) => {
  if (task.status == "Done") {
    return (
      <div className="task-details">
        <h4>{task.title}</h4>
      </div>
    );
  }
};

export default TaskDetailsInDone;
