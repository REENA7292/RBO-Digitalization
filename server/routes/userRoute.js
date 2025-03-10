import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUnit2User,
  getAllUnit2Users,
  getUnit2UserById,
  updateUnit2User,
  deleteUnit2User,
} from "../controller/userController.js";

const route = express.Router();

// Routes for Unit 1
route.post("/user", createUser);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/update/user/:id", updateUser);
route.delete("/delete/user/:id", deleteUser);

// Routes for Unit 2
route.post("/unit2/user", createUnit2User);
route.get("/unit2/users", getAllUnit2Users);
route.get("/unit2/user/:id", getUnit2UserById);
route.put("/unit2/update/user/:id", updateUnit2User);
route.delete("/delete/unit2/user/:id", deleteUnit2User);

export default route;
