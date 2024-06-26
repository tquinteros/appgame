import User from "../models/user";
import connectMongoDB from "../mongodb";

export const createUser = async (user: any) => {
  try {
    user.level = 1;
    user.experience = 0;

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

export const addExperience = async () => {
  try {
    await connectMongoDB();
    await User.updateOne({}, { $inc: { experience: 1 } });
    return { message: "Experience added successfully" };
  } catch (error) {
    console.error("Error adding experience:", error);
    throw error;
  }
};
