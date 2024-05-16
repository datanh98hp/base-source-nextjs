import React from 'react';
import LoginForm from './Form';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/authOptions';
import HeaderCommon from '@/common/Header';

export default async function LoginPage() {

    const session = await getServerSession(authOptions);

    if (session) {
      return redirect("/");
    }
  return (
    <section className="container h-screen flex flex-col items-center justify-center">
      <div className="w-fit">
        <HeaderCommon />
        <LoginForm />
      </div>
    </section>
  );
}
