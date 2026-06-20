import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "next/link";

export default function RegisterPage() {
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

        <form className="space-y-5">

          <Input
            label="Full Name"
            placeholder="Enter your full name"
          />

          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
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