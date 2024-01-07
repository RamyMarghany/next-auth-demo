import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SignWithGithub from "@/components/ui/sign-with-github";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SignForm from "@/components/ui/sign-form";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center p-10">
      <Card>
        <CardHeader>
          <CardTitle>Please sign in.</CardTitle>
          <CardDescription>
            To access private pages you have to be authenticated
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <SignForm />
            <SignWithGithub />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
