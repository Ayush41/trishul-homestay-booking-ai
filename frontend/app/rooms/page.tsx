"use client";

import Card from "@/components/Card";
import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { useEffect, useState } from "react";


type Room = {
  id: number;
  name: string;
  price: number;
  description:string;
  image:string;
  rating:number;
};

export default function RoomsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);


  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
  fetch("http://127.0.0.1:8000/api/rooms")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch rooms");
      }
      return res.json();
    })
    .then((data) => {
      setRooms(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setError("Unable to load rooms.");
      setLoading(false);
    });
}, []);


/*function  for availability message when button is clicked*/
const checkAvailability = async () => {
  if (!selectedRoom) {
    alert("Please select a room.");
    return;
  }

  if (!checkIn || !checkOut) {
    alert("Please select check-in and check-out dates.");
    return;
  }

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/check-availability",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          room_id: selectedRoom.id,
          check_in: `${checkIn}T00:00:00`,
          check_out: `${checkOut}T00:00:00`,
          guests: guests,
        }),
      }
    );

    const data = await response.json();

    console.log("API Response:", data);

    setAvailabilityMessage(data.message);
    setIsAvailable(data.available);

  } catch (error) {
    console.error(error);

    setAvailabilityMessage("Unable to connect to server.");
    setIsAvailable(false);
  }
};

/*--------function for booking confirmation when button is clicked---------*/

const confirmBooking = async () => {
  if (!selectedRoom) return;

  if (!guestName || !email) {
    alert("Please enter your name and email.");
    return;
  }

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/book-room",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guestName: guestName,
          email: email,
          roomId: selectedRoom.id,
          userId: Number(localStorage.getItem("userId")),
          checkIn: `${checkIn}T00:00:00`,
          checkOut: `${checkOut}T00:00:00`,
          guests: guests,
        }),
      }
    );

    const data = await response.json();

    alert(data.message);

    // Close modal
    setIsModalOpen(false);

    // Clear form
    setGuestName("");
    setEmail("");
    setCheckIn("");
    setCheckOut("");
    setGuests(1);

    setAvailabilityMessage("");
    setIsAvailable(null);

  } catch (error) {
    console.error(error);
    alert("Booking failed.");
  }
};



  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <img
          src="/images/cottageRoom.png"
          alt="Rooms"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold">
            Our Rooms
          </h1>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your Perfect Stay
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Comfortable rooms and cottages designed for a memorable mountain
            experience.
          </p>
        </div>

        {loading && (
              <p className="text-center text-lg">
                  Loading rooms...
              </p>
        )}

        {error && (
            <p className="text-center text-red-500 text-lg">
                {error}
            </p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {rooms.map((room) => (
          <Card
            key={room.id}
            title={room.name}
            description={room.description}
            image={room.image}
            price={room.price.toString()}
            rating={room.rating.toString()}
            onBook={() => {
              setSelectedRoom(room);

              setCheckIn("");
              setCheckOut("");
              setGuests(1);

              setAvailabilityMessage("");
              setIsAvailable(null);

              setIsModalOpen(true);
            }}
            />
        ))}

        </div>

      </section>

     

      {/* Amenities */}
      <section className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Room Amenities
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="p-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-2xl shadow">
              📶 Wi-Fi
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-2xl shadow">
              🍽️ Restaurant
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-2xl shadow">
              🚗 Parking
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-2xl shadow">
              🔥 Bonfire
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-16 text-center">
        <h2 className="text-4xl font-bold">
          Ready for Your Mountain Getaway?
        </h2>

        <p className="mt-4 text-lg mb-8">
          Book your stay today and experience nature like never before.
        </p>

        <Button
          text="Book Now"
          variant="outline"
          size="lg"
          onClick={() => setIsModalOpen(true)}
        />
      </section>


      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book Your Stay"
      >
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Ready to book your mountain getaway?
        </p>

        <div className="space-y-4">
  <h3 className="text-lg font-semibold">
    {selectedRoom?.name}
  </h3>

  <div>
    <label className="block mb-1">Check-in Date</label>
    <input
        type="date"
  value={checkIn}
  onChange={(e) => setCheckIn(e.target.value)}
  className="w-full border rounded-lg p-2 bg-white dark:bg-gray-700"
/>
  </div>

  <div>
    <label className="block mb-1">Check-out Date</label>
    <input
      type="date"
      value={checkOut}
      onChange={(e) => setCheckOut(e.target.value)}
      className="w-full border rounded-lg p-2 bg-white dark:bg-gray-700"
    />
  </div>

  <div>
    <label className="block mb-1">Guests</label>
    <input
      type="number"
      value={guests}
      onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
      className="w-full border rounded-lg p-2 bg-white dark:bg-gray-700"
    />
  </div>

  {availabilityMessage && (
  <div
    className={`rounded-lg p-3 text-center font-semibold ${
      isAvailable
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {availabilityMessage}
  </div>
)}

{isAvailable && (
  <>
    <div>
      <label className="block mb-1">Guest Name</label>
      <input
        type="text"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        placeholder="Enter your full name"
        className="w-full border rounded-lg p-2 bg-white dark:bg-gray-700"
      />
    </div>

    <div>
      <label className="block mb-1">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full border rounded-lg p-2 bg-white dark:bg-gray-700"
      />
    </div>

    <div className="flex justify-end mt-4">
  <Button
    text="Confirm Booking"
    variant="primary"
    onClick={confirmBooking}
  />
</div>
  </>
)}



  <div className="flex gap-3 justify-end">
    <Button
      text="Check Availability"
      variant="primary"
      onClick={checkAvailability}
  />

    <Button
      text="Cancel"
      variant="secondary"
      onClick={() => setIsModalOpen(false)}
    />
  </div>
</div>
      </Modal>


    </main>
  );
}