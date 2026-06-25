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
      className="w-full border rounded-lg p-2 bg-white dark:bg-gray-700"
    />
  </div>

  <div>
    <label className="block mb-1">Check-out Date</label>
    <input
      type="date"
      className="w-full border rounded-lg p-2 bg-white dark:bg-gray-700"
    />
  </div>

  <div>
    <label className="block mb-1">Guests</label>
    <input
      type="number"
      min="1"
      defaultValue="1"
      className="w-full border rounded-lg p-2 bg-white dark:bg-gray-700"
    />
  </div>

  <div className="flex gap-3 justify-end">
    <Button
      text="Check Availability"
      variant="primary"
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