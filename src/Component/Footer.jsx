"use client";

import React, { useState } from "react";
import Link from "next/link";

// React Icons
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePaperAirplane,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineArrowPath,
  HiOutlineHeadphones,
} from "react-icons/hi2";

import { FaFacebookF, FaHeadset, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      {/* 1. Value Proposition Highlights Bar */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-3 bg-rose-500/10 text-rose-500 rounded-2xl">
              <HiOutlineTruck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Nationwide Shipping
              </h4>
              <p className="text-xs text-slate-400">
                Fast delivery inside & outside Dhaka
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-2xl">
              <HiOutlineArrowPath className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                7-Day Easy Return
              </h4>
              <p className="text-xs text-slate-400">
                Hassle-free size exchange policy
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-2xl">
              <HiOutlineShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                100% Authentic Fabric
              </h4>
              <p className="text-xs text-slate-400">
                Premium cotton, silk & designer craft
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="p-3 bg-sky-500/10 text-sky-500 rounded-2xl">
              <FaHeadset ones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Dedicated Support
              </h4>
              <p className="text-xs text-slate-400">
                Call or WhatsApp us (10 AM - 10 PM)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                R
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Rong<span className="text-rose-500">Bari</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              RongBari brings authentic Bangladeshi culture and modern
              streetwear together. We craft everyday lifestyle apparel, festive
              wear, and kidswear with top-tier fabrics and attention to fit.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <HiOutlineMapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span>
                  Level 4, Jamuna Future Park, Kuril, Dhaka-1229, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <HiOutlinePhone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>+880 1700-000000 (WhatsApp Supported)</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <HiOutlineEnvelope className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>support@rongbari.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Shop Categories
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/shop/men"
                  className="hover:text-rose-400 transition"
                >
                  Men’s Panjabi & Casuals
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/women"
                  className="hover:text-rose-400 transition"
                >
                  Sarees & Kurtis
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/kids-boys"
                  className="hover:text-rose-400 transition"
                >
                  Boys Wear (3-12 Yrs)
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/kids-girls"
                  className="hover:text-rose-400 transition"
                >
                  Girls Festive Outfits
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/toddlers"
                  className="hover:text-rose-400 transition"
                >
                  Infants & Toddlers
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/eid-festive"
                  className="text-amber-400 hover:underline"
                >
                  Eid Festive Drop 🌙
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Customer Care
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/track-order"
                  className="hover:text-rose-400 transition"
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className="hover:text-rose-400 transition"
                >
                  Delivery Rates (Dhaka & Outside)
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="hover:text-rose-400 transition"
                >
                  Exchange & Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="hover:text-rose-400 transition"
                >
                  Size Guide & Sizing Chart
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-rose-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-rose-400 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Join RongBari Club
            </h3>
            <p className="text-xs text-slate-400">
              Subscribe to get special discounts on upcoming Eid drops and
              seasonal releases.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs">
                🎉 Thank you for subscribing! Check your inbox for your 10%
                discount promo code.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white text-xs rounded-xl pl-3 pr-10 py-2.5 focus:outline-none focus:border-rose-500 transition"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-rose-600 text-white rounded-lg hover:bg-rose-500 transition flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <HiOutlinePaperAirplane className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Social Media Links with react-icons */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold text-slate-400 mb-2">
                Follow Us
              </p>
              <div className="flex gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-slate-800 hover:bg-rose-600 text-white rounded-lg transition"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-slate-800 hover:bg-rose-600 text-white rounded-lg transition"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-slate-800 hover:bg-rose-600 text-white rounded-lg transition"
                >
                  <FaYoutube className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Accepted Payment Gateways & Copyright */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            © {/*  {new Date().getFullYear()}{" "} */}
            <strong className="text-slate-200">
              RongBari Fashion Ltd.
            </strong>{" "}
            All rights reserved.
          </p>

          {/* Payment Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[10px] text-slate-400 mr-2 uppercase tracking-wide">
              We Accept:
            </span>

            <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded font-bold text-rose-400 text-[11px]">
              bKash
            </span>
            <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded font-bold text-amber-500 text-[11px]">
              Nagad
            </span>
            <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded font-bold text-purple-400 text-[11px]">
              Rocket
            </span>
            <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded font-bold text-sky-400 text-[11px]">
              Visa / Mastercard
            </span>
            <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded font-bold text-emerald-400 text-[11px]">
              COD (Cash on Delivery)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
