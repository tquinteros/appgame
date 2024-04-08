"use server";

import { NextRequest, NextResponse } from "next/server";
import User from "../models/user";
import connectMongoDB from "../mongodb";

export const createUser = async (user: any) => {
    try {
        await connectMongoDB();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
        console.log(error)
    }
}