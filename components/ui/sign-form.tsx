"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
export default function SignForm() {
  const [email, setEmail] = useState<string | null>(null);
  async function handleSignIn() {
    const signInResponse = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!signInResponse?.ok) {
      return toast({
        title: "This Doesn't Look Like A Valid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
    return toast({
      title: "Check your email!",
      description: "A magic link has been sent to your email address.",
      variant: "default",
    });
  }

  return (
    <form action={handleSignIn}>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
        />
      </div>

      <Button type="submit" className="mt-4 w-full">
        Login with Email
      </Button>
    </form>
  );
}
