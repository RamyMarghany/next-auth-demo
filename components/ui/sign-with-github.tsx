"use client";
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignWithGithub() {
  return (
    <Button
      onClick={() =>
        signIn("github", { callbackUrl: `${window.location.origin}` })
      }
      className="mt-6"
      variant="secondary"
    >
      Login with Github <GithubIcon className="w-4 h-4 ml-2" />
    </Button>
  );
}
