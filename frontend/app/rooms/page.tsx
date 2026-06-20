"use client";

import Card from "@/components/Card";
import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { useState } from "react";

export default function RoomsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Card
            title="Standard Room"
            description="Cozy room with balcony view and essential amenities."
            image="/images/standardRoom.jpg"
            price="2499"
            rating="4.5"
          />

          <Card
            title="Deluxe Room"
            description="Spacious room with mountain views and premium interiors."
            image="/images/deluxeRoom.jpg"
            price="3999"
            rating="4.8"
          />

          <Card
            title="Family Suite"
            description="Large room ideal for families and groups."
            image="/images/familyRoom.jpg"
            price="5499"
            rating="4.9"
          />

          <Card
            title="Luxury Cottage"
            description="Private wooden cottage surrounded by nature."
            image="/images/cottageRoom.png"
            price="7999"
            rating="5.0"
          />

          <Card
            title="Premium Room"
            description="Sustainable room with eco-friendly amenities."
            image="/images/PremiumSuite.jpg"
            price="2999"
            rating="4.7"
          />

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

        <div className="flex gap-3 justify-end">
          <Button
            text="Continue"
            variant="primary"
          />

          <Button
            text="Cancel"
            variant="secondary"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
      </Modal>

    </main>
  );
}