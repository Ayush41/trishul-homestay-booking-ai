"use client";

import BookingCard from "@/components/dashboard/mybooking";
import { useEffect, useState } from "react";


type Booking = {
  id: number;
  roomId: number;
  roomName: string;
  roomPrice: number;
  roomImage: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
};

export default function BookingPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setLoading(false);
      return;
    }

    fetch(`http://127.0.0.1:8000/api/bookings/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Loading Bookings...</h2>
      </main>
    );
  }


  /* Function to handle booking cancellation */
  const cancelBooking = async (bookingId: number) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to cancel this booking?"
  );

  if (!confirmDelete) return;

  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/bookings/${bookingId}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.detail || "Unable to cancel booking.");
      return;
    }

    alert(data.message);

    setBookings((prev) =>
      prev.filter((booking) => booking.id !== bookingId)
    );
  } catch (error) {
    console.error(error);
    alert("Server error.");
  }
};

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold dark:text-white">
            My Bookings
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-2">
            View your current and past bookings
          </p>
        </div>

        {bookings.length === 0 ? (
          <div className="text-center text-xl dark:text-white">
            No bookings found.
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <BookingCard
                      key={booking.id}
                      bookingId={`BK${booking.id}`}
                      roomType={booking.roomName}
                      dates={`${new Date(
                        booking.checkIn
                      ).toLocaleDateString()} - ${new Date(
                        booking.checkOut
                      ).toLocaleDateString()}`}
                      guests={booking.guests}
                      status="Confirmed"
                      onCancel={() => cancelBooking(booking.id)}
                />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}