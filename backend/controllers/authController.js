import { pool } from "../db/database.js";

// will return to auth later

export const signupUser = async (req, res) => {
  try {
    const { firstName, email, password } = req.body;
    if (!(firstName || email || password)) {
      return res
        .status(404)
        .json({ message: "Please provide all required fields." });
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const signinUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
