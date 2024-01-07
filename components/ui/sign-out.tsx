"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })}
    >
      Sign Out
    </Button>
  );
}
