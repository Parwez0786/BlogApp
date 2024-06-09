import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
//import prisma from "./connect";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Prisma } from "@prisma/client";
import prisma from "./connect";
import { getServerSession } from "next-auth";
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};
export const getAuthSession = () => getServerSession(authOptions);
