"use client";

import Link from "next/link";
import { useState } from "react";

import ThemeToggle from "@/components/ui/themeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-600 shadow-md px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-lg lg:text-2xl font-bold text-white">
          Trishul Eco Homestays
        </Link>

        {/* Tablet + Mobile Hamburger */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/recommendation">AI Sentiment</Link>

          <Link
            href="/login"
            className="bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Login
          </Link>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 mt-4 py-4 text-white border-t border-gray-500">
          <Link href="/">Home</Link>
          <Link href="/rooms">Rooms</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/recommendation">AI Sentiment</Link>

          <Link
            href="/login"
            className="bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Login
          </Link>

          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}