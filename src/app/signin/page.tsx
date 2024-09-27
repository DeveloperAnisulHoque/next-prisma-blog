import { auth } from "@/auth";
import AuthProvider from "@/components/common/Provider/AuthProvider";
import WidthWraper from "@/components/common/WidthWraper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/profile");
  }

  return (
    <div>
      <WidthWraper>
        <div className=" space-y-2 py-10 max-w-xl">
          <h2 className="text-2xl font-semibold text-black">
            Log in to you Account{" "}
          </h2>
          <p className="text-sm text-slate-700 font-medium">
            Lets go with lots of fun !
          </p>
          <div className="space-y-4 py-6">
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Type your email"
                className="focus-visible:ring-slate-300"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="email"
                placeholder="Type  password"
                className="focus-visible:ring-slate-300"
              />
            </div>

            <Button type="submit">Sign In</Button>
          </div>
          <Link href={"/signup"} className="text-sm font-semibold">
            Dont an account ?
          </Link>
          <div className="flex gap-3 items-center justify-center text-sm font-semibold text-gray-700 py-4">
            <div className="h-[2px] bg-gray-300 w-4/12" />

            <p>Or</p>
            <div className="h-[2px] bg-gray-300 w-4/12" />
          </div>{" "}
          <AuthProvider />
        </div>
      </WidthWraper>
    </div>
  );
};

export default Page;
