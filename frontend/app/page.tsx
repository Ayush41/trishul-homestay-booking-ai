"use client";

import Card from "@/components/Card";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/whyChooseUs";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">

      <Hero />

      <WhyChooseUs />

      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="text-center max-w-4xl mx-auto mb-8 px-4">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            Our Rooms
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose from our carefully designed rooms and cottages,
            offering breathtaking views, modern amenities, and a
            comfortable stay surrounded by nature.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="px-8 py-6"
        >
          <SwiperSlide>
            <Card
              title="Standard Room"
              description="Cozy room with balcony view."
              image="/images/standardRoom.jpg"
              price="2499"
              rating="4.5"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              title="Deluxe Room"
              description="Mountain view room."
              image="/images/deluxeRoom.jpg"
              price="3999"
              rating="4.8"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              title="Family Suite"
              description="Perfect for families."
              image="/images/familyRoom.jpg"
              price="5499"
              rating="4.9"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              title="Luxury Cottage"
              description="Private wooden cottage."
              image="/images/cottageRoom.png"
              price="7999"
              rating="5.0"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              title="Premium Suite"
              description="Premium wooden cottage suite."
              image="/images/premiumSuite.jpg"
              price="7999"
              rating="5.0"
            />
          </SwiperSlide>
        </Swiper>
      </section>

    </div>
  );
}