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

  const mobileMenuClasses = isOpen
    ? "max-h-[1200px] opacity-100 pt-4 pb-4 pointer-events-auto"
    : "max-h-0 opacity-0 pt-0 pb-0 pointer-events-none";

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800/70 px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-slate-900 dark:text-white"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-emerald-600 text-white text-lg font-extrabold shadow-lg shadow-emerald-500/30">
            T
          </span>

          <span className="leading-tight">
            <span className="block text-xl lg:text-2xl font-extrabold tracking-tight">
              Trishul
            </span>
            <span className="block text-xs lg:text-sm text-slate-500 dark:text-slate-300 font-medium">
              Eco Homestays
            </span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-300/70 dark:border-slate-700/70 bg-white/90 dark:bg-slate-950/90 text-slate-900 dark:text-white text-3xl shadow-sm transition-colors duration-300 ease-in-out hover:bg-emerald-600 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
            {isOpen ? "✕" : "☰"}
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-slate-900 dark:text-white">

          <Link href="/" className="text-sm font-semibold uppercase tracking-wide hover:text-emerald-700 dark:hover:text-emerald-300 transition">
            Home
          </Link>

          <Link href="/about" className="text-sm font-semibold uppercase tracking-wide hover:text-emerald-700 dark:hover:text-emerald-300 transition">
            About
          </Link>

          <Link href="/rooms" className="text-sm font-semibold uppercase tracking-wide hover:text-emerald-700 dark:hover:text-emerald-300 transition">
            Rooms
          </Link>

          <Link href="/contact" className="text-sm font-semibold uppercase tracking-wide hover:text-emerald-700 dark:hover:text-emerald-300 transition">
            Contact
          </Link>

          <Link href="/recommendation" className="text-sm font-semibold uppercase tracking-wide hover:text-emerald-700 dark:hover:text-emerald-300 transition">
            AI Sentiment
          </Link>

          <ThemeToggle />

          {!user ? (
            <Link
              href="/login"
              className="bg-emerald-600 text-white px-5 py-2 rounded-full shadow-lg shadow-emerald-500/30 hover:bg-emerald-700 transition text-sm font-semibold"
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
                className="flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 px-5 py-2 rounded-full shadow-lg shadow-emerald-500/30 transition text-sm font-semibold"
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
      <div className={`lg:hidden flex flex-col gap-4 mt-4 overflow-hidden rounded-3xl bg-white/95 dark:bg-slate-950/95 border border-slate-200/70 dark:border-slate-800/70 text-slate-900 dark:text-white shadow-xl backdrop-blur-xl transition-[max-height,opacity,padding] duration-300 ease-in-out ${mobileMenuClasses}`}>

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition"
          >
            About
          </Link>

          <Link
            href="/rooms"
            onClick={() => setIsOpen(false)}
            className="font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition"
          >
            Rooms
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition"
          >
            Contact
          </Link>

          <Link
            href="/recommendation"
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold uppercase tracking-wide hover:text-emerald-700 dark:hover:text-emerald-300 transition"
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
              className="bg-emerald-600 text-white px-4 py-2 rounded-full shadow hover:bg-emerald-700 transition text-center"
            >
              Login
            </Link>
          ) : (
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-300/70 dark:border-slate-700/70">

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
                className="font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition"
              >
                📊 Dashboard
              </Link>

              <Link
                href="/profile"
                onClick={() => setIsOpen(false)}
                className="font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition"
              >
                👤 Profile
              </Link>

              <Link
                href="/bookings"
                onClick={() => setIsOpen(false)}
                className="font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition"
              >
                📅 My Bookings
              </Link>

              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-left text-red-500 hover:text-red-300 transition"
              >
                🚪 Logout
              </button>

            </div>
          )}

        </div>
    </nav>
  );
}