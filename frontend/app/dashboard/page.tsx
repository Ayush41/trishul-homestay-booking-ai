"use client";

import ProfileCard from "@/components/dashboard/profile";
import Sidebar from "@/components/dashboard/sidebar";
import SummaryCard from "@/components/dashboard/summaryCard";

import Loader from "@/components/ui/loader";
import { useEffect, useState } from "react";

export default function DashboardPage() {

  const [fullName, setFullName] = useState("");

  useEffect(() => {
  const name = localStorage.getItem("fullName");

  if (name) {
    setFullName(name);
  }
}, []);


  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <div className="grid md:grid-cols-4 gap-6">
  
        <div>
          <Sidebar />
        </div>

        <div className="md:col-span-3 space-y-6">
        <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-2xl shadow-md">
          {/* Welcome Section */}
          <h1 className="text-3xl font-bold">
               Welcome Back{fullName ? `, ${fullName}` : ""} 👋
          </h1>


            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Manage your bookings, profile and saved rooms.
            </p>
          </div>

          {/* Profile Section */}
          <ProfileCard />

          {/* Summary Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SummaryCard
              title="My Bookings"
              value="08"
            />

            <SummaryCard
              title="Upcoming Stay"
              value="02"
            />

            <SummaryCard
              title="Saved Rooms"
              value="05"
            />
          </div>

          {/* Recent Booking */}
          <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              Recent Bookings
            </h2>
            <Loader />

            <div className="space-y-3">
              <div className="border-b pb-3">
                <p>
                  <strong>Booking ID:</strong> BK101
                </p>

                <p>
                  <strong>Room:</strong> Deluxe Room
                </p>

                <p>
                  <strong>Dates:</strong> 15 Jun - 18 Jun
                </p>

                <p className="text-green-600 font-semibold">
                  Confirmed
                </p>
              </div>

              <div>
                <p>
                  <strong>Booking ID:</strong> BK102
                </p>

                <p>
                  <strong>Room:</strong> Family Suite
                </p>

                <p>
                  <strong>Dates:</strong> 25 Jun - 28 Jun
                </p>

                <p className="text-yellow-600 font-semibold">
                  Pending
                </p>
              </div>
            </div>
          </div>

        </div>
    </div>
    </main>
  );
}