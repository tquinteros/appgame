import {
  getUserById,
  getAllUsers,
  addExperience,
} from "@/libs/actions/user.action";
import connectMongoDB from "@/libs/mongodb";
import { auth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export async function GET() {
  await connectMongoDB();
  const users = await getAllUsers();
  return NextResponse.json({ users });
}

// create a function that will add 1 experience the logged user

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     await addExperience();
//     res.status(200).json({ message: "Experience added successfully" });
//   } catch (error) {
//     console.error("Error adding experience:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }
