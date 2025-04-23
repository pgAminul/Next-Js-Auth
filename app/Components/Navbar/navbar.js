"use client";

import UseAuth from "@/app/ContextApi/UseAuth";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = UseAuth();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">MyLogo</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          {user ? (
            <li>
              <Link href="/allUsers">All Users</Link>
            </li>
          ) : (
            ""
          )}
          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <Link href="/dashborad">Dashboard</Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden mt-3 space-y-2 px-4">
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/allUsers" onClick={toggleMenu}>
              All Users
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
