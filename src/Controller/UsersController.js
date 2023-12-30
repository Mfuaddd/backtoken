import { UsersModel } from "../Model/UsersModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UsersModel.find({});
    res.status(200).send(users);
  } 
  catch (error) {
    console.error(error);
  }
};

export const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UsersModel.findById(id);
    res.status(200).send(user);
  } 
  catch (error) {
    console.error(error);
  }
};

export const postUser = async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = new UsersModel({ name });
    await newUser.save();
    res.status(200).send("Got a POST request");
  } 
  catch (error) {
    console.error(error);
  }
};

export const putUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await UsersModel.findByIdAndUpdate(id, { name });
    res.status(200).send("Got a PUT request");
  } 
  catch (error) {
    console.error(error);
  }
};

export const deleteUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    await UsersModel.findByIdAndDelete(id);
    res.status(200).send("Got a DELETE request");
  } 
  catch (error) {
    console.error(error);
  }
};
