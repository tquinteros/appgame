import Header from "@/components/Header/Header";
import { getUserById } from "@/libs/actions/user.action";
import { auth, currentUser } from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();
  const mongoDbUser = user?.publicMetadata.userId as string;
  const thisUser = await getUserById(mongoDbUser);

  return (
    <div>
      {user && <h1>{thisUser.level}</h1>}
      <Header />
    </div>
  );
}
