import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">Finance App</h1>

      <nav className="flex flex-col space-y-4">
        <Link
          to="/"
          className="hover:bg-gray-700 px-3 py-2 rounded transition"
        >
          Home
        </Link>
        <Link
          to="/transactions"
          className="hover:bg-gray-700 px-3 py-2 rounded transition"
        >
          Transactions
        </Link>
        <Link
          to="/settings"
          className="hover:bg-gray-700 px-3 py-2 rounded transition"
        >
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
