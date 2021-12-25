import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import { createConnection } from "typeorm";
// import { User } from "./entities/User";
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(4000, async () => {
  try {
    console.log("Server started on port 4000");
    await createConnection();
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
  }
});
