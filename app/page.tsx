import Header from "@/components/Header/Header";
import { getUserById } from "@/libs/actions/user.action";
import { auth, currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { User } from "@/interfaces/User";
// Define una interfaz para el usuario de MongoDB

export default async function Home() {
  const user = await currentUser();
  const mongoDbUser = user?.publicMetadata.userId as string;
  const thisUser = await getUserById(mongoDbUser);

  const mongoDBUser: User | null = thisUser
    ? {
        id: thisUser._id.toString(),
        username: thisUser.username,
        level: thisUser.level,
      }
    : null;

  return (
    <div>
      <Header user={mongoDBUser} />
    </div>
  );
}
