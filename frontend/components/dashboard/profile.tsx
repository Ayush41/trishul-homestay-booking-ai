"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  fullName: string;
  email: string;
};

export default function ProfileCard() {
  const [user, setUser] = useState<User | null>(null);

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
    })
    .catch((err) => {
      console.error(err);
    });
}, []);

  if (!user) {
    return (
      <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-2xl shadow-md">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Profile Information
      </h2>

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Name:</span>{" "}
          {user.fullName}
        </p>

        <p>
          <span className="font-semibold">Email:</span>{" "}
          {user.email}
        </p>
      </div>
    </div>
  );
}