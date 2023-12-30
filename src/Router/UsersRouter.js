import { Router } from "express";
import {
  deleteUserByID,
  getAllUsers,
  getUserByID,
  postUser,
  putUserByID,
} from "../Controller/UsersController.js";

export const usersRouter = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUserByID);
usersRouter.post("/", postUser);
usersRouter.put("/:id", putUserByID);
usersRouter.delete("/:id", deleteUserByID);
