import { getUserById, getAllUsers } from "@/libs/actions/user.action";
import connectMongoDB from "@/libs/mongodb";
import { auth } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(req: NextApiRequest) {
  await connectMongoDB();
  const { userId } = getAuth(req);
  console.log("user", userId);
  const users = await getAllUsers();
  return NextResponse.json({ users });
}

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   const { user } = auth();
//   console.log("user", user);

//   if (!user || !user.publicMetadata || typeof user.publicMetadata.userId !== 'string') {
//     return new Response("Unauthorized", { status: 401 });
//   }

//   const userId = user.publicMetadata.userId;

//   try {
//     await connectMongoDB();
//     const userData = await getUserById(userId);

//     return NextResponse.json({ userData });
//   } catch (error) {
//     console.error("Error retrieving user data:", error);
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }
