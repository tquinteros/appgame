import connectMongoDB from "@/libs/mongodb";
import Topic from "@/libs/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json(
    { message: "Topic created successfully" },
    { status: 201 }
  );
}

// create the get handler

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

// create the delete handler

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Topic deleted successfully" },
    { status: 200 }
  );
}