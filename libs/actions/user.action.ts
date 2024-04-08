import User from "../models/user";
import connectMongoDB from "../mongodb";

export const createUser = async (user: any) => {
  try {
    user.level = 1;

    await connectMongoDB();

    const newUser = await User.create(user);

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    await connectMongoDB();

    const users = await User.find();

    return users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserById = async (id: string) => {
  try {
    await connectMongoDB();

    const user = await User.findById(id);
    if (!user) {
      console.log("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};
