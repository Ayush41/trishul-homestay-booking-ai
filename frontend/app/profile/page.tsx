"use client";

import Button from "@/components/ui/button";
import { useEffect, useState } from "react";

type User = {
  id: number;
  fullName: string;
  email: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) return;
    fetch(`http://127.0.0.1:8000/api/users/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load user");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex justify-center items-center">
        <p className="text-xl">Loading Profile...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white py-10 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">
            Profile
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            View and manage your profile information
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">

          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-4xl">
              👤
            </div>

            <h2 className="text-2xl font-bold mt-4">
              {user?.fullName}
            </h2>

            <p className="text-gray-500 dark:text-gray-300">
              {user?.email}
            </p>
          </div>

          <div className="space-y-4">
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
          </div>

          <div className="mt-8">
            <Button text="Edit Profile" />
          </div>

        </div>
      </div>
    </main>
  );
}