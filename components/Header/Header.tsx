"use client"
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect } from "react";

const Header = () => {

    const {user} = useUser();

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <header className="container mx-auto flex items-center justify-between">
            <h3 className="text-4xl">LOGO</h3>
            <h3 className="text-4xl">{user?.username}</h3>
            <ul className="flex gap-4">
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </header>
    )
}

export default Header;