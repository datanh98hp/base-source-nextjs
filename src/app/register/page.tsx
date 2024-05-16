import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import RegisterForm from "./Form";
import { Button } from "@/components/ui/button";

export default async function page() {
  // const session = await getServerSession(authOptions);

  // if (session) {
  //   return redirect("/");
  // }

  return (
    <section className="container h-screen flex flex-col  items-center justify-center">
      <div className="w-[400px]">
        <RegisterForm />
      </div>
    </section>
  );
}
