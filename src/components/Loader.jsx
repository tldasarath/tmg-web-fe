"use client";
import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/assets/logo/logo.png"
          alt="Logo"
          width={140}
          height={140}
          className="object-contain mb-8 drop-shadow-[0_0_25px_rgba(151,32,68,0.3)] animate-pulse"
        />

        {/* Loader Section */}
        <div className="relative flex items-center justify-center">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`relative w-8 h-8 border-2 border-[--color] rounded-full mx-2 bg-transparent animate-circle [--color:#972044]`}
              style={{
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {/* Inner dot */}
              <div
                className={`absolute left-1/2 top-1/2 w-3 h-3 bg-[--color] rounded-full 
                -translate-x-1/2 -translate-y-1/2 animate-dot`}
                style={{
                  animationDelay: `${i * 0.3}s`,
                }}
              ></div>

              {/* Expanding outline ring */}
              <div
                className={`absolute left-1/2 top-1/2 w-6 h-6 rounded-full 
                -translate-x-1/2 -translate-y-1/2 animate-outline`}
                style={{
                  animationDelay: `${0.9 + i * 0.3}s`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
