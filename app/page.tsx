import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import SignOut from "@/components/ui/sign-out";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-10 flex items-center justify-center flex-col gap-y-2">
      <h2>Hello to the public route page.</h2>
      {session ? (
        <div className="flex flex-col gap-y-2">
          <p className="mb-4"> you&apos;re logged in now.</p>
          <SignOut />
        </div>
      ) : (
        <>
          <p>Please login in first</p>
          <Button asChild>
            <Link href="/auth">Login</Link>
          </Button>
        </>
      )}
    </div>
  );
}
