"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  /*------register funcction------*/
  const registerUser = async (e: React.FormEvent) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.detail || "Registration failed.");
      return;
    }

    alert(data.message);

    router.push("/login");

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
            Create Account
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Register to start booking your stay
          </p>
        </div>

        <form className="space-y-5" onSubmit={registerUser}>

          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            text="Register"
            type="submit"
            size="lg"
          />

        </form>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-700 dark:text-green-400 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}