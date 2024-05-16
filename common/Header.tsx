"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function HeaderCommon() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div className="">
          <img
            src={session.user?.image as string}
            className="rounded-full h-10 w-10"
          />
          <h1 className="text-3xl text-green-500 font-bold">
            Welcome back, {session.user?.name}
          </h1>
          <p className="text-2xl font-semibold">{session.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="border dark:border-white rounded-lg bg-red-400 px-5 py-1"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2 my-4 text-center">
          
          {/* <div className="flex flex-row gap-4">
            <Link className="border rounded-lg p-5 w-60" href="/login">
              Login by Email / Password
            </Link>
            <button
              onClick={() => signIn("google")}
              className="border dark:border-white w-60 border-black rounded-lg p-5"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="border dark:border-white border-black w-60 rounded-lg bg-green-500 p-5"
            >
              Sign in with GitHub
            </button>
          </div> */}
        </div>
      )}
    </>
  );
}
