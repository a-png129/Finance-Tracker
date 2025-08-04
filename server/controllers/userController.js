import { getUserQuery } from "../models/userModel.js";

export const getUser = async (req, res) => {
  const user_id = req.user.id;
  try {
    const user = await getUserQuery(user_id);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to find user" });
  }
};
