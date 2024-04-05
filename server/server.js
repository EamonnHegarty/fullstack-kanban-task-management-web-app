import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import boardRoutes from "./routes/boardRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
import path from "path";

dotenv.config();

const port = process.env.PORT || 5050;

connectDB();

const app = express();

// Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/boards", boardRoutes);
app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "production") {
  console.log("in production");
  const __dirname = path.resolve();
  // set static folder
  app.use(express.static(path.join(__dirname, "/client/dist")));

  // any route that is not api will be redirected to index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    console.log("not in production");
    res.send("API is running");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
