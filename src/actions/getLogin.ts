"use server";

import { signIn, signOut } from "../auth";
import { redirect } from "next/navigation"; // Ensure you're using next/navigation

interface SignInResult {
  ok?: boolean;
  // Add other properties you expect from the signIn result
}

export const getAuthLogin = async (formData: FormData) => {
  const action = formData.get("action") as string | null;

  if (action) {
    // Proceed with signIn
    const result: SignInResult = await signIn(action);

    // Handle redirection after successful signIn
    if (result?.ok) {
      redirect("/profile");
    } else {
      throw new Error("Failed to sign in.");
    }
  } else {
    // Handle case where action is null
    throw new Error("Action cannot be null.");
  }
};

export const getAuthLogout = async () => {
  await signOut();
};
