"use client";

import React, { useState } from "react";
import Link from "next/link";

// Importing icons from react-icons
import {
  HiOutlineMagnifyingGlass,
  HiOutlineShoppingBag,
  HiOutlineBars3,
  HiOutlineXMark,
  HiChevronDown,
  HiOutlineArrowRightOnRectangle,
  HiOutlineCube,
  HiOutlineSquares2X2,
  HiSparkles,
} from "react-icons/hi2";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Replace with Better Auth hook: const { data: session } = authClient.useSession();
  const session = null;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-xs">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-amber-200 text-xs py-2.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <HiSparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        <span>
          Grand Launch Offer: Free Shipping across Bangladesh on orders over
          ৳1,500! Code:{" "}
          <strong className="text-white underline">RONGBARI2026</strong>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-rose-600 p-2 rounded-xl transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <HiOutlineXMark className="w-6 h-6" />
              ) : (
                <HiOutlineBars3 className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Brand Logo ("RongBari") */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
                R
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900 font-sans">
                Rong<span className="text-rose-600">Bari</span>
                <span className="text-amber-500 text-xs block font-normal tracking-widest uppercase -mt-1">
                  Family Fashion
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-800 hover:text-rose-600 transition"
            >
              Home
            </Link>

            {/* Adults Mega Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-800 group-hover:text-rose-600 transition">
                Adults{" "}
                <HiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-52 bg-white shadow-2xl rounded-2xl border border-slate-100 py-3 hidden group-hover:block transition-all animate-in fade-in-50 zoom-in-95">
                <Link
                  href="/shop/men"
                  className="block px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  Men Collection & Panjabi
                </Link>
                <Link
                  href="/shop/women"
                  className="block px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  Women Sarees & Kurtis
                </Link>
                <Link
                  href="/shop/unisex-casuals"
                  className="block px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  Unisex Casual Wear
                </Link>
              </div>
            </div>

            {/* Kids Dropdown */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-800 group-hover:text-rose-600 transition">
                Kids{" "}
                <HiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-52 bg-white shadow-2xl rounded-2xl border border-slate-100 py-3 hidden group-hover:block transition-all animate-in fade-in-50 zoom-in-95">
                <Link
                  href="/shop/kids-boys"
                  className="block px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  Boys (3-12 yrs)
                </Link>
                <Link
                  href="/shop/kids-girls"
                  className="block px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  Girls Festive & Casual
                </Link>
                <Link
                  href="/shop/toddlers"
                  className="block px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600 transition"
                >
                  Toddlers & Newborns
                </Link>
              </div>
            </div>

            <Link
              href="/shop/eid-festive"
              className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition flex items-center gap-1"
            >
              Eid Edit 🌙
            </Link>
            <Link
              href="/shop/sale"
              className="text-sm font-semibold text-rose-600 hover:text-rose-700 transition"
            >
              Sale 🔥
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-3">
            {/* Search Input toggle */}
            <div className="relative hidden md:flex items-center">
              {searchOpen ? (
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 shadow-inner w-64 transition-all">
                  <HiOutlineMagnifyingGlass className="w-4 h-4 text-slate-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search Panjabi, saree, kids..."
                    className="w-full text-xs bg-transparent focus:outline-none text-slate-800"
                    autoFocus
                    onBlur={() => setSearchOpen(false)}
                  />
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2.5 text-slate-700 hover:text-rose-600 transition rounded-full hover:bg-rose-50"
                  aria-label="Search"
                >
                  <HiOutlineMagnifyingGlass className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Cart Badge */}
            <Link
              href="/cart"
              className="relative p-2.5 text-slate-700 hover:text-rose-600 transition rounded-full hover:bg-rose-50"
              aria-label="Cart"
            >
              <HiOutlineShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                2
              </span>
            </Link>

            {/* User Dropdown */}
            {session?.user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full hover:bg-slate-100 transition border border-slate-200"
                >
                  {session.user.image ? (
                    <img
                      src={session.user.image}
                      alt={session.user.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      {session.user.name?.charAt(0) || "U"}
                    </div>
                  )}
                  <span className="text-xs font-semibold text-slate-800 hidden sm:inline">
                    {session.user.name?.split(" ")[0]}
                  </span>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50 animate-in fade-in-50">
                    <div className="px-4 py-2.5 border-b border-slate-100">
                      <p className="text-xs font-bold text-slate-900">
                        {session.user.name}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {session.user.email}
                      </p>
                    </div>

                    <Link
                      href="/dashboard"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-slate-700 hover:bg-rose-50 hover:text-rose-600 font-medium"
                    >
                      <HiOutlineSquares2X2 className="w-4 h-4" /> Account
                      Dashboard
                    </Link>
                    <Link
                      href="/orders"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-slate-700 hover:bg-rose-50 hover:text-rose-600 font-medium"
                    >
                      <HiOutlineCube className="w-4 h-4" /> My Orders & Tracking
                    </Link>

                    <button
                      onClick={async () => {
                        setUserDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs text-rose-600 hover:bg-rose-50 font-medium border-t border-slate-100 mt-1"
                    >
                      <HiOutlineArrowRightOnRectangle className="w-4 h-4" />{" "}
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/sign-in"
                  className="text-xs font-semibold text-slate-700 hover:text-rose-600 px-3 py-2 transition hidden sm:inline-block"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="text-xs font-semibold bg-gradient-to-r from-rose-600 to-amber-600 text-white px-4 py-2.5 rounded-xl hover:opacity-95 shadow-md shadow-rose-600/20 transition"
                >
                  Join RongBari
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2">
          <div className="relative">
            <HiOutlineMagnifyingGlass className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search clothes for adults & kids..."
              className="w-full bg-slate-100 text-xs rounded-xl pl-10 pr-4 py-3 focus:outline-none text-slate-800"
            />
          </div>

          <div className="space-y-1.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-rose-50 hover:text-rose-600"
            >
              Home
            </Link>

            <div className="px-3 pt-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Adults Collection
            </div>
            <Link
              href="/shop/men"
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-6 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600"
            >
              Men Collection
            </Link>
            <Link
              href="/shop/women"
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-6 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600"
            >
              Women Collection
            </Link>

            <div className="px-3 pt-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Kids Collection
            </div>
            <Link
              href="/shop/kids-boys"
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-6 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600"
            >
              Boys (3-12 yrs)
            </Link>
            <Link
              href="/shop/kids-girls"
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-6 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600"
            >
              Girls (3-12 yrs)
            </Link>
            <Link
              href="/shop/toddlers"
              onClick={() => setMobileMenuOpen(false)}
              className="block pl-6 py-1.5 text-xs font-medium text-slate-600 hover:text-rose-600"
            >
              Toddlers & Newborns
            </Link>

            <div className="pt-4 border-t border-slate-100 flex gap-3">
              <Link
                href="/sign-in"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 text-xs font-semibold text-slate-800 border border-slate-200 rounded-xl"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 text-xs font-semibold bg-rose-600 text-white rounded-xl shadow-md"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
