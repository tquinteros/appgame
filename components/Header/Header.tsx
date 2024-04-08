"use client";
import { useEffect } from "react";
import { useClerk } from "@clerk/clerk-react";
import Link from "next/link";

// Define una interfaz para el usuario de MongoDB
interface MongoDBUser {
  id: string;
  username: string;
  level: number;
}

interface HeaderProps {
  user: MongoDBUser | null;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const { signOut } = useClerk();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <header className="container mx-auto flex items-center justify-between">
      <h3 className="text-4xl">LOGO</h3>
      <h3 className="text-4xl">{user?.level}</h3>
      <h3 className="text-4xl">{user?.username}</h3>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        {user ? (
          <button onClick={() => signOut()}>Sign out</button>
        ) : (
          <Link href="/sign-in">Log in</Link>
        )}
      </ul>
    </header>
  );
};

export default Header;
