import Link from "next/link";

export default function Navbar() {
  return (
    
    <nav className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 bg-gray-600 shadow-md">

      {/* Left Side - Logo/Name */}
      <Link href="/">
        <h1 className="text-xl md:text-2xl font-bold text-white cursor-pointer text-center">
          Trishul Eco Homestays
        </h1>
      </Link>

      {/* Right Side - Links + Button */}

      <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-6 mt-3 md:mt-0">

        <Link href="/" className="hover:text-green-400 text-lg text-white">
          Home
        </Link>

        <Link href="/rooms" className="hover:text-green-400 text-lg text-white">
          Rooms
        </Link>

        <Link href="/about" className="hover:text-green-400 text-lg text-white">
          About
        </Link>

        <Link href="/contact" className="hover:text-green-400 text-lg text-white">
          Contact
        </Link>

        <Link href="/dashboard" className="hover:text-green-400 text-lg text-white">
          Dashboard
        </Link>

        <Link href="/login" className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
          Login
        </Link>

      </div>

    </nav>
  );
}