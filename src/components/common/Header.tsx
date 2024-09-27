import Link from "next/link";
import React from "react";
import WidthWraper from "./WidthWraper";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";

import { ProfileDropdown } from "./DopDowns/ProfileDropDown";
import { Button } from "../ui/button";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();

  return (
    <WidthWraper>
      <div className="flex justify-between items-center py-3">
        <Link href={"/"} className="text-primary text-2xl font-bold">
          Blogs
        </Link>
        <ul className="hidden lg:flex gap-2 items-center font-semibold text-slate-600">
          <li>
            <Link
              href={"/"}
              className="hover:bg-slate-100 px-4 py-2 rounded-md duration-150"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="hover:bg-slate-100 px-4 py-2 rounded-md duration-150"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="hover:bg-slate-100 px-4 py-2 rounded-md duration-150"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="hover:bg-slate-100 px-4 py-2 rounded-md duration-150"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          {session?.user ? (
            <ProfileDropdown />
          ) : (
            <>
              <Link
                className="hover:bg-slate-100 px-4 py-2 rounded-md duration-150 font-medium"
                href={"/signin"}
              >
                Log In
              </Link>
              <Link
                className="hover:opacity-90 duration-150 px-4 py-2 rounded-md font-medium bg-primary text-white"
                href={"/signup"}
              >
                SignUp
              </Link>
            </>
          )}{" "}
          <Sheet>
            <SheetTrigger asChild className="">
              <Button className="lg:hidden px-2" variant="outline">
                <MdMenu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div>
                <h2>Menu</h2>
              </div>
              <ul className=" font-semibold text-slate-600 flex-col items-start gap-2 py-5">
                <li>
                  <Link
                    href={"/"}
                    className="hover:bg-slate-100 p-2 rounded-md duration-150  block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:bg-slate-100 p-2 rounded-md duration-150  block"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:bg-slate-100 p-2 rounded-md duration-150  block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:bg-slate-100 p-2 rounded-md duration-150  block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </WidthWraper>
  );
};

export default Header;
