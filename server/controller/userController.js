import User from "../model/userModel.js";
import Unit2 from "../model/unit2Model.js";

// Create User for Unit 1
export const createUser = async (req, res) => {
  try {
    const { jobCode, empNo, ...otherData } = req.body;

    // Check if a record with the same jobCode and empNo exists
    const userExist = await User.findOne({ jobCode, empNo });
    if (userExist) {
      return res
        .status(400)
        .json({
          message: "User with this Job Code and Emp No already exists.",
        });
    }

    // Create and save new user
    const newUser = new User({ jobCode, empNo, ...otherData });
    await newUser.save();

    res.status(200).json({ message: "User created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Create User for Unit 2
export const createUnit2User = async (req, res) => {
  try {
    const { jobCode, empNo, ...otherData } = req.body;

    // Check if a record with the same jobCode and empNo exists in Unit 2
    const userExist = await Unit2.findOne({ jobCode, empNo });
    if (userExist) {
      return res
        .status(400)
        .json({
          message:
            "User with this Job Code and Emp No already exists in Unit 2.",
        });
    }

    // Create and save new user
    const newUser = new Unit2({ jobCode, empNo, ...otherData });
    await newUser.save();

    res.status(200).json({ message: "Unit 2 User created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Get all Users from Unit 1
export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "No user data found." });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Get all Users from Unit 2
export const getAllUnit2Users = async (req, res) => {
  try {
    const userData = await Unit2.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "No Unit 2 user data found." });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Get User by ID (Unit 1)
export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Get User by ID (Unit 2)
export const getUnit2UserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await Unit2.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "Unit 2 User not found." });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Update User (Unit 1)
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "User Updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Update User (Unit 2)
export const updateUnit2User = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await Unit2.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "Unit 2 User not found." });
    }
    await Unit2.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Unit 2 User Updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Delete User (Unit 1)
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// Delete User (Unit 2)
export const deleteUnit2User = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await Unit2.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "Unit 2 User not found." });
    }
    await Unit2.findByIdAndDelete(id);
    res.status(200).json({ message: "Unit 2 User deleted successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
