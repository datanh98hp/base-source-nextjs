"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters",
    })
    .max(100, {
      message: "Username must be less than 100 characters",
    })
    .email({
      message: "Must be a valid email",
    }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters",
    })
    .max(25),
  // confirmPassword: z
  //   .string()
  //   .min(6, { message: "Confirm - password must be at least 6 characters" })
  //   .max(25),
});
//   .superRefine(({ confirmPassword, password }, ctx) => {
//     if (confirmPassword !== password) {
//       ctx.addIssue({
//         code: "custom",
//         message: "Confirm password not match",
//         path: ["confirmPassword"],
//       });
//     }
//   });

const LoginForm = () => {
  const [error, seterror] = useState("");	
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    
     //console.log(response);
    if (!response?.error) {
      return router.push("/dashboard");
    }else{
      seterror("Someting when wrong");
      toast({
        variant: "destructive",
        title: "Error",
        description: response?.error,
      });
    }
  }
  return (
    <div>
      <div className="my-6">
        <h1 className="text-3xl text-red-500 font-bold text-center my-5">
          You're not logged in
        </h1>
        <div className="flex flex-row gap-3">
          {/* <Link className="border rounded-lg p-5 w-60" href="/login">
            Login by Email / Password
          </Link> */}
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
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {error && <p className="text-sm text-red-500">{error}</p>}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                {/* <FormDescription>Password...</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <Link href="/register">Don't haven account ?</Link>
            <Button type="submit">Login now</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
