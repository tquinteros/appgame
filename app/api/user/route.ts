import { getUserById, getAllUsers } from "@/libs/actions/user.action";
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

