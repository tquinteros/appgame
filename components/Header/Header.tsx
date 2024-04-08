"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect } from "react";
import { useClerk } from "@clerk/clerk-react";

const Header = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

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
        <button onClick={() => signOut()}>Sign out</button>
      </ul>
    </header>
  );
};

export default Header;
