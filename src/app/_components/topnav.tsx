import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import { Button } from "~/components/ui/button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Website Ttile</div>
      {/* <Button variant={"ghost"} className="text-xl">
        <LogIn />
        <span>Sign In</span>
      </Button> */}
      <div className="items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          {/* <SignOutButton /> */}
        </SignedIn>
      </div>
    </nav>
  );
}
