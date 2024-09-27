import { getAuthLogout } from "@/actions/getLogin";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export async function ProfileDropdown() {
  const session = await auth();

  return session?.user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="p-0  focus-visible:ring-0 rounded-full  h-fit w-fit"
        >
          <Avatar className="hover:ring-1 ring-primary duration-150">
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>{" "}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <hr />
        <div className="pt-4 space-y-2 ">
          <Link
            href={"/profile"}
            className="p-2 text-sm font-medium hover:bg-slate-100 flex items-center gap-2 text-slate-500 hover:text-slate-600"
          >
            <FaUser /> Profile
          </Link>
          <form action={getAuthLogout}>
            <Button
              variant={"default"}
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600"
            >
              Logout
            </Button>
          </form>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <></>
  );
}
