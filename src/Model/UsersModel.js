import { Schema, model } from "mongoose";

const usersSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
});

export const UsersModel = model('Users', usersSchema);