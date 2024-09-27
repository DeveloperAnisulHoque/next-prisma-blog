import { auth } from "@/auth";
import EmptySection from "@/components/common/EmptySection/EmptySection";
import { BlogModal } from "@/components/common/Modals/BlogModal";
import { InfoUPdateModal } from "@/components/common/Modals/InfoUpdateModal";
import { OTPModal } from "@/components/common/Modals/OtpModal";
import { PasswordUpdateModal } from "@/components/common/Modals/PasswordUpdateModal";
import WidthWraper from "@/components/common/WidthWraper";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="py-10">
      <WidthWraper>
        <div className="flex md:gap-2 gap-y-2 flex-wrap">
          <div className="w-40 h-40   bg-slate-100  shadow-sm hover:shadow-md duration-150 rounded overflow-hidden border border-slate-100">
            {session?.user?.image && (
              <Image
                src={session?.user?.image}
                width={500}
                height={500}
                alt={session?.user?.name || "user_image"}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="px-4 space-y-3">
            <div>
              <p className="text-sm font-semibold">Name</p>
              <p>Anisul hoque</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Email</p>
              <p>anishoque@gmail.com</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Total blogs</p>
              <p className="text-xl font-bold">54</p>
            </div>
          </div>
          <div className="md:ms-auto flex gap-2 ">
            <InfoUPdateModal />
            <PasswordUpdateModal />
            <OTPModal />
          </div>
        </div>
        <div className=" py-10">
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">All Blogs</p>

            <BlogModal />
          </div>

          <hr />

          <div className=" w-8/12   md:w-4/12 mx-auto py-10 text-center space-y-4">
            <EmptySection />
            <p className=" text-base  md:text-xl font-semibold text-slate-500">
              No data found !
            </p>
          </div>
        </div>
      </WidthWraper>
    </div>
  );
}
