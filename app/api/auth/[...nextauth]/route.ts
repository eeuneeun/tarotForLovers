import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
   // - 로그인 시도시, jwt 함수와 session 함수를 리턴
   callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

  async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages : {
    signIn : '/auth/signin',
    signOut : '/',
    error : '/'
  }
}
export default NextAuth(authOptions)