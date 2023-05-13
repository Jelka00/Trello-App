require("dotenv").config();

const express = require("express");
const tasksRoutes = require("./routes/tasks");
const mongoose = require("mongoose");
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());

app.use("/api/tasks", tasksRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //slusanje zahteva

    app.listen(process.env.PORT, () => {
      console.log(
        "Povezano na db i lusanje zahteva na portu ",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
