import "next-auth";

declare module "next-auth" {
  interface User {
    user_id?: string;
    email?: string;
  }

  interface Session {
    user: {
      user_id?: string | null;
      email?: string | null;
      githubUsername?: string | null;
    };
  }

  interface JWT {
    user_id?: string;
    email?: string | null;
  }
}
