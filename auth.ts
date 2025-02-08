import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axiosInstance from "./lib/axios";
import { createSession } from "./lib/session";
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        name: { label: "Name", type: "text", placeholder: "name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axiosInstance.post("/login", {
            username: credentials.username,
            name: credentials.name,
            password: credentials.password,
          });
          await createSession(res.data.accessToken);
          return res.data;
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
