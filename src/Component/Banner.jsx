"use client";

import React, { useState } from "react";
import Link from "next/link";

// React Icons
import {
  HiOutlineShoppingBag,
  HiOutlineSparkles,
  HiOutlineArrowRight,
  HiStar,
  HiOutlineCheckBadge,
  HiOutlineTruck,
  HiOutlineArrowPath,
} from "react-icons/hi2";

import { FaFire } from "react-icons/fa6";

// Scrolling Photos Data for Adults & Kids
const scrollingPhotos = [
  {
    id: 1,
    title: "Men's Panjabi",
    tag: "Adults",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    title: "Girls Dress",
    tag: "Kids",
    img: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    title: "Silk Saree",
    tag: "Adults",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    title: "Boys Kurta",
    tag: "Kids",
    img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    title: "Casual Tops",
    tag: "Adults",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 6,
    title: "Toddlers Set",
    tag: "Kids",
    img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=400",
  },
];

export default function HeroBanner() {
  const [activeHover, setActiveHover] = useState("adults");

  return (
    <section className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-20 overflow-hidden font-sans relative">
      {/* Background Accent Mesh */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-100/40 via-amber-50/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Top Header Text */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-300 text-xs font-bold tracking-wide shadow-xs">
            <HiOutlineSparkles
              className="w-4 h-4 text-amber-400 animate-spin"
              style={{ animationDuration: "6s" }}
            />
            <span>NEW ARRIVALS • EID & FESTIVE 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Festive Heritage & Everyday Comfort for{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-rose-600 via-amber-600 to-rose-700 bg-clip-text text-transparent">
              Every Age in the Family
            </span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Shop premium cotton Panjabis, designer Sarees, and kidswear crafted
            specifically for Bangladeshi celebrations and daily wear.
          </p>
        </div>

        {/* 2. NEW: Horizontal Scrolling Photo Marquee Strip (Positioned directly under text) */}
        <div className="mb-14 overflow-hidden relative w-full py-3 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs">
          {/* Subtle Left & Right Gradient Shadows */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Continuous Auto-Scrolling Strip */}
          <div className="flex items-center gap-4 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
            {/* Doubled array for seamless looping */}
            {[...scrollingPhotos, ...scrollingPhotos].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 flex items-center gap-3 p-2 bg-slate-50 border border-slate-200 rounded-xl hover:border-rose-400 hover:shadow-md transition-all group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 rounded-lg object-cover group-hover:scale-105 transition-transform"
                />
                <div className="pr-2">
                  <span
                    className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${
                      item.tag === "Kids"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-rose-100 text-rose-800"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Dual Split Cards Showcase (Original Lower Design Preserved) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Adults Festive Collection */}
          <div
            onMouseEnter={() => setActiveHover("adults")}
            className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 min-h-[420px] lg:min-h-[480px] shadow-xl ${
              activeHover === "adults"
                ? "border-rose-500 shadow-rose-600/10 scale-[1.01]"
                : "border-slate-200 hover:border-rose-300"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800"
              alt="RongBari Adults Festive Wear"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-black shadow-md flex items-center gap-1.5">
                <FaFire className="w-3.5 h-3.5 text-rose-600" />
                ADULTS COLLECTION
              </span>
              <span className="px-3 py-1 rounded-full bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider">
                Up to 25% Off
              </span>
            </div>

            <div className="relative z-10 space-y-3 pt-20">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs text-slate-200 font-bold ml-1">
                  4.9/5 (180+ Reviews)
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Men's Royal Panjabi & Women's Silk Sarees
              </h2>

              <p className="text-slate-300 text-xs leading-relaxed max-w-md">
                Handcrafted premium fabrics with subtle traditional embroidery.
                Lightweight and elegant.
              </p>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 line-through block">
                    ৳ 3,850
                  </span>
                  <span className="text-xl font-black text-white">৳ 2,950</span>
                </div>

                <Link
                  href="/shop/adults"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
                >
                  <HiOutlineShoppingBag className="w-4 h-4" />
                  Explore Adults
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Kids Zone Collection */}
          <div
            onMouseEnter={() => setActiveHover("kids")}
            className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 min-h-[420px] lg:min-h-[480px] shadow-xl ${
              activeHover === "kids"
                ? "border-amber-500 shadow-amber-600/10 scale-[1.01]"
                : "border-slate-200 hover:border-amber-300"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=800"
              alt="RongBari Kids Collection"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-black shadow-md flex items-center gap-1.5">
                🧸 KIDS ZONE (3-12 YRS)
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider">
                Organic Cotton
              </span>
            </div>

            <div className="relative z-10 space-y-3 pt-20">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs text-slate-200 font-bold ml-1">
                  5.0/5 (95+ Reviews)
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Breathable Boys Kurtas & Girls Festive Frocks
              </h2>

              <p className="text-slate-300 text-xs leading-relaxed max-w-md">
                Soft, zero-scratch organic cotton outfits tailored for active
                playful kids.
              </p>

              <div className="pt-2 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 line-through block">
                    ৳ 1,950
                  </span>
                  <span className="text-xl font-black text-amber-300">
                    ৳ 1,450
                  </span>
                </div>

                <Link
                  href="/shop/kids"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg transition-all"
                >
                  Explore Kids Zone
                  <HiOutlineArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4. E-Commerce Guarantee Bar */}
        <div className="mt-10 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <HiOutlineTruck className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">
                Inside Dhaka (24-48 hrs)
              </p>
              <p className="text-[10px] text-slate-500">Fast home delivery</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <HiOutlineCheckBadge className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">
                Cash on Delivery
              </p>
              <p className="text-[10px] text-slate-500">
                Verify & pay on arrival
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <HiOutlineArrowPath className="w-5 h-5 text-emerald-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">
                7-Day Free Exchange
              </p>
              <p className="text-[10px] text-slate-500">
                Easy size replacement
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <p className="text-xs font-bold text-slate-900">
                WhatsApp Support
              </p>
              <p className="text-[10px] text-slate-500">
                Direct order assistant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
