"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import ThemeToggle from "@/components/ui/themeToggle";

type User = {
  id: number;
  fullName: string;
  email: string;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");

    setUser(null);
    setProfileOpen(false);

    router.push("/");
  };

  return (
    <nav className="bg-gray-600 shadow-md px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg lg:text-2xl font-bold text-white"
        >
          Trishul Eco Homestays
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-white">

          <Link href="/">Home</Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/rooms">
            Rooms
          </Link>

          <Link href="/contact">
            Contact
          </Link>

          <Link href="/recommendation">
            AI Sentiment
          </Link>

          <ThemeToggle />

          {!user ? (
            <Link
              href="/login"
              className="bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Login
            </Link>
          ) : (
            <div
              className="relative"
              ref={profileRef}
            >
              <button
                onClick={() =>
                  setProfileOpen(!profileOpen)
                }
                className="flex items-center gap-2 bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg transition"
              >
                <span className="text-lg">
                  👤
                </span>

                <span className="font-medium">
                  {user.fullName}
                </span>

                <span
                  className={`transition-transform ${
                    profileOpen
                      ? "rotate-180"
                      : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden z-50">

                  <div className="px-5 py-4 border-b dark:border-gray-700">

                    <p className="font-bold text-gray-900 dark:text-white">
                      {user.fullName}
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {user.email}
                    </p>

                  </div>

                  <Link
                    href="/dashboard"
                    onClick={() =>
                      setProfileOpen(false)
                    }
                    className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    📊 Dashboard
                  </Link>

                  <Link
                    href="/profile"
                    onClick={() =>
                      setProfileOpen(false)
                    }
                    className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    👤 Profile
                  </Link>

                  <Link
                    href="/bookings"
                    onClick={() =>
                      setProfileOpen(false)
                    }
                    className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    📅 My Bookings
                  </Link>

                  <hr className="dark:border-gray-700" />

                                    <button
                    onClick={handleLogout}
                    className="w-full text-left px-5 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                  >
                    🚪 Logout
                  </button>

                </div>
              )}

            </div>
          )}

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-4 py-4 border-t border-gray-500 text-white">

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            href="/rooms"
            onClick={() => setIsOpen(false)}
          >
            Rooms
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/recommendation"
            onClick={() => setIsOpen(false)}
          >
            AI Sentiment
          </Link>

          <div className="pt-2">
            <ThemeToggle />
          </div>

          {!user ? (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800 transition text-center"
            >
              Login
            </Link>
          ) : (
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-500">

              <div>
                <p className="font-bold">
                  👤 {user.fullName}
                </p>

                <p className="text-sm text-gray-300">
                  {user.email}
                </p>
              </div>

              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
              >
                📊 Dashboard
              </Link>

              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
              >
                👤 Profile
              </Link>

              <Link
                href="/bookings"
                onClick={() => setIsOpen(false)}
              >
                📅 My Bookings
              </Link>

              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-left text-red-300"
              >
                🚪 Logout
              </button>

            </div>
          )}

        </div>
      )}
    </nav>
  );
}