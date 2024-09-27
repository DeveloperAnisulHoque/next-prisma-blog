"use server";

import { signIn, signOut } from "../auth";

export const getAuthLogin = async (formData: FormData) => {
  const action = formData.get("action");

  await signIn(action, { redirect: "/profile" });
};
export const getAuthLogout = async () => {
  await signOut();
};
