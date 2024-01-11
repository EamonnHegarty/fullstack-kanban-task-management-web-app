import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./users.js";
import { boards } from "./boards.js";
import User from "../models/userModel.js";
import Board from "../models/boardModel.js";
import { connectDB } from "../config/db.js";

dotenv.config();

connectDB();

const createData = async () => {
  try {
    await User.deleteMany();
    await Board.deleteMany();

    const createdUsers = await User.insertMany(users);

    const dataUser = createdUsers[0]._id;

    const sampleBoards = boards.map((board) => {
      return { ...board, user: dataUser };
    });

    await Board.insertMany(sampleBoards);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Board.deleteMany();

    console.log("Data destroyed!");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  createData();
}
