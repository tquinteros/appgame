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