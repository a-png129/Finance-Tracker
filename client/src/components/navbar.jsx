import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen bg-gray-800 text-white flex flex-col p-4 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex justify-between">
        {isOpen && <h1 className="text-2xl font-bold mb-8">Finance App</h1>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 mb-8 hover:bg-gray-700 flex justify-center rounded"
        >
          {isOpen? <p>←</p> : <p>→</p>}
        </button>
      </div>

      <nav className="flex flex-col space-y-4">
        <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded transition">
          🏠 {isOpen && <span>Home</span>}
        </Link>
        <Link
          to="/transactions"
          className="hover:bg-gray-700 px-3 py-2 rounded transition"
        >
          💵 {isOpen && <span>Transactions</span>}
        </Link>
        <Link
          to="/settings"
          className="hover:bg-gray-700 px-3 py-2 rounded transition"
        >
          ⚙️ {isOpen && <span>Settings</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
