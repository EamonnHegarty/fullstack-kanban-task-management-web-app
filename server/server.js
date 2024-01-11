import express from "express";
import { boards } from "./data/boards.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5050;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/boards", (req, res) => {
  res.json(boards);
});

app.get("/boards/:id", (req, res) => {
  const board = boards.find((b) => b._id === req.params.id);
  res.json(board);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
