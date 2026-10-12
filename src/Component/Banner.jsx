"use client";

import React from "react";
import Link from "next/link";

// React Icons
import {
  HiOutlineShoppingBag,
  HiOutlineSparkles,
  HiOutlineTruck,
  HiOutlineArrowRight,
  HiStar,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

import { FaFire } from "react-icons/fa6";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/60 via-slate-50 to-white py-12 lg:py-20">
      {/* Decorative Background Blur Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Pitch & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-700 text-xs font-bold tracking-wide shadow-xs">
              <HiOutlineSparkles
                className="w-4 h-4 text-rose-600 animate-spin"
                style={{ animationDuration: "6s" }}
              />
              <span>NEW FESTIVE COLLECTION 2026</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              Wear the Colors of <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-rose-600 via-amber-500 to-rose-700 bg-clip-text text-transparent">
                Every Generation.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover authentic Bangladeshi fashion for both{" "}
              <strong className="text-slate-900 font-semibold">
                Adults & Kids
              </strong>
              . From premium cotton Panjabis and designer Sarees to comfortable
              kidswear, RongBari brings tradition to modern everyday style.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/shop/adults"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-rose-600/25 transition-all transform hover:-translate-y-0.5"
              >
                <HiOutlineShoppingBag className="w-4 h-4" />
                Shop Adults Collection
              </Link>

              <Link
                href="/shop/kids"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm rounded-xl border border-slate-200 shadow-xs transition-all hover:border-amber-400 group"
              >
                Explore Kids Zone
                <HiOutlineArrowRight className="w-4 h-4 text-amber-500 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
              <div>
                <p className="text-xs sm:text-sm font-black text-slate-900 flex items-center justify-center lg:justify-start gap-1">
                  <HiOutlineTruck className="w-4 h-4 text-rose-600" />
                  <span>24-48 Hours</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  Dhaka Express Shipping
                </p>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-black text-slate-900 flex items-center justify-center lg:justify-start gap-1">
                  <HiOutlineShieldCheck className="w-4 h-4 text-amber-500" />
                  <span>100% COD</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  Cash On Delivery Available
                </p>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-black text-slate-900 flex items-center justify-center lg:justify-start gap-1">
                  <FaFire className="w-3.5 h-3.5 text-rose-500" />
                  <span>50k+ Happy</span>
                </p>
                <p className="text-[11px] text-slate-500">Families Across BD</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Main Showcase Image Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl bg-gradient-to-tr from-rose-500 to-amber-400 p-1.5 shadow-2xl">
              <div className="w-full h-full bg-slate-100 rounded-[22px] overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800"
                  alt="RongBari Festive Fashion Collection"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-rose-600 block">
                        Featured Drop
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        Royal Cotton Panjabi & Kurti
                      </h3>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <HiStar
                            key={i}
                            className="w-3 h-3 text-amber-400 fill-amber-400"
                          />
                        ))}
                        <span className="text-[11px] font-semibold text-slate-600 ml-1">
                          (4.9/5)
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 line-through">
                        ৳ 2,850
                      </span>
                      <p className="text-base font-black text-slate-900">
                        ৳ 2,150
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Kids Special Badge */}
            <div
              className="absolute -bottom-4 -left-2 sm:left-2 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-lg">
                🧸
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  Kids Special Drop
                </p>
                <p className="text-[10px] text-slate-500">
                  Soft Organic Cotton Wear
                </p>
              </div>
            </div>

            {/* Floating Discount Tag */}
            <div className="absolute -top-3 -right-2 bg-slate-900 text-white rounded-2xl py-2 px-3.5 shadow-xl border border-slate-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-black text-amber-300">
                UP TO 30% OFF
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
