import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      id: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const auth = getAuth(
          initializeApp({
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          }),
        );

        const userCredential = await signInWithEmailAndPassword(
          auth,
          credentials.email as string,
          credentials.password as string,
        );

        return {
          id: userCredential.user.uid,
          name: userCredential.user.displayName,
          email: userCredential.user.email,
        };
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return "/protected";
    },
    async session({ session, token }) {
      session.user.name = token.name!;
      session.user.email = token.email!;
      return session;
    },
  },
});
