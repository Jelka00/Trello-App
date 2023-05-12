require("dotenv").config();

const express = require("express");
const tasksRoutes = require("./routes/tasks");
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/tasks", tasksRoutes);

app.listen(process.env.PORT, () => {
  console.log("Slusam na portu ", process.env.PORT);
});
