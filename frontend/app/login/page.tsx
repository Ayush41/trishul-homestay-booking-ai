"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      
      if (!response.ok) {
        alert(data.detail || "Login failed.");
        return;
      }

      // Save logged-in user
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("userId", data.user.id.toString());
      localStorage.setItem("fullName", data.user.fullName);
      localStorage.setItem("email", data.user.email);


      alert(data.message);

      router.push("/dashboard");

    } catch (error) {
      console.error(error);
      alert("Unable to connect to server.");
    }
  };

  return (
    <main className="min-h-[70vh] bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Welcome Back
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Login to your account
          </p>
        </div>

        <form className="space-y-5" onSubmit={loginUser}>

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            text="Login"
            variant="primary"
            type="submit"
            size="lg"
          />

        </form>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-green-700 dark:text-green-400 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </main>
  );
}