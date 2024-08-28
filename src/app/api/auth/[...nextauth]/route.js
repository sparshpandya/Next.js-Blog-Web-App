import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { saveUser } from "@/app/actions"; // Assuming saveUser is defined in this module

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // user object returned by the provider
    async signIn({ user }) {

      try {
        // saving the user in the database
        const saveUserData = await saveUser(user);
        if (saveUserData) {
          return true;
        }
      } catch (e) {
        console.error(e);
        return false;
      }
    },
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
