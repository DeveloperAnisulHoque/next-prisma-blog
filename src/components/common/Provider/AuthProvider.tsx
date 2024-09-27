import { getAuthLogin } from "@/actions/getLogin";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthProvider = () => {
  return (
    <form action={getAuthLogin}>
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          value={"google"}
          type="submit"
          name="action"
          className="flex gap-4  justify-center h-11 "
        >
          <FcGoogle size={20} />
          with Google
        </Button>
        <Button
          variant="outline"
          type="submit"
          name="action"
          value={"github"}
          className="flex gap-4  justify-center  h-11"
        >
          <FaGithub size={20} />
          with Github
        </Button>
      </div>
    </form>
  );
};

export default AuthProvider;
