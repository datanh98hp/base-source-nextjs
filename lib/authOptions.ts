import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "./mongodb_client";
export const authOptions: NextAuthOptions =
{
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials, req) => {
                // console.log("credentials : ", credentials)
                const client = await clientPromise;
                const db = client.db() as any;

                const user = await db.
                    collection("users").
                    findOne({ email: credentials?.email });

                // console.log("user : ", user)
                const bcrypt = require("bcrypt");

                const passwordCheck = await bcrypt.compareSync(
                    credentials?.password,
                    user?.password
                );
                if (passwordCheck) {
                    return {
                        id: user?._id,
                        email: user?.email,
                    };
                }
                return null;
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (trigger === "update") {
                return {
                    ...token, ...session.user
                }
            }
            return { ...token, ...user }
        },

    }
}