import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB;