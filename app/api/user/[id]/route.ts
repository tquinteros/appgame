import { getUserById } from "@/libs/actions/user.action";
import connectMongoDB from "@/libs/mongodb";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}: any) {

  const { id } = params;
  await connectMongoDB();
  const user = await getUserById(id as string);
  return NextResponse.json({ user });
}

