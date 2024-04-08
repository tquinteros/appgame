
import mongoose, { Schema, Model, Models } from "mongoose";

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
    },
    photo: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
});
const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User;