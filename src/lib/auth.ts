import { NextAuthOptions } from "next-auth";
import { db } from "@/db";
import { users } from "@/db/schema";
import GithubProvider from "next-auth/providers/github";
import { eq } from "drizzle-orm";

type Token = {
  id?: string;
  email?: string;
  githubUsername?: string;
};

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        if (account?.provider === "github" && user) {
          const { email, image } = user;
          const githubUsername = (profile as any)?.login;

          const existingUser = await db.query.users.findFirst({
            where: eq(users.email, email!),
          });

          if (!existingUser) {
            await db.insert(users).values({
              email: email!,
              image,
              githubUsername,
            });
          }
        }

        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        (token as Token).id = user.id;
        (token as Token).email = user.email;
        (token as Token).githubUsername = (user as any)?.githubUsername;
      }
      return token;
    },
    async session({ session, token }) {
      const customToken = token as Token;
      session.user = {
        ...session.user,
        user_id: customToken.id || null,
        email: customToken.email || null,
        githubUsername: customToken.githubUsername || null,
      };
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
