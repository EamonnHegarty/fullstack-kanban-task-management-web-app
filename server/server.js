import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import boardRoutes from "./routes/boardRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 5050;

connectDB();

const app = express();

app.use(cors());
// Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/boards", boardRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
