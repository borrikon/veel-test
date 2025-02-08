"use server";

import { redirect } from "next/navigation";

import axiosInstance from "./axios";

import { deleteSession } from "./session";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function registration(_: unknown, formData: FormData) {
  const name = formData.get("name");
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    await axiosInstance.post("/register", {
      username,
      name,
      password,
    });
    redirect("/signin");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
        case "CallbackRouteError":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
}

export async function login(_: unknown, formData: FormData) {
  try {
    await signIn("credentials", {
      redirect: false,
      name: formData.get("name"),
      username: formData.get("username"),
      password: formData.get("password"),
    });
    redirect("/dashboard");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
        case "CallbackRouteError":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
}

export async function getUserInfo() {
  try {
    const response = await axiosInstance.get("/me");
    return response.data;
  } catch (e) {
    console.error("Error:", e);
    return null;
  }
}

export async function logout() {
  await deleteSession();
  await signOut();
}
