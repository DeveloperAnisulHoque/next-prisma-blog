"use server";

import { signIn, signOut } from "../auth";

export const getAuthLogin = async (formData: FormData) => {
  const action = formData.get("action") as string | null;

  if (action) {
    // Only call signIn if action is not null
    await signIn(action, { redirect: "/profile" });
  } else {
    // Handle case where action is null, if necessary
    throw new Error("Action cannot be null.");
  }
};

export const getAuthLogout = async () => {
  await signOut();
};
