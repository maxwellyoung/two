"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isDevImageHovered, setIsDevImageHovered] = useState(false);
  const [isMusicImageHovered, setIsMusicImageHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number }) => {
      const windowWidth = window.innerWidth;
      setIsDevImageHovered(event.clientX < windowWidth / 2);
      setIsMusicImageHovered(event.clientX >= windowWidth / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="grid grid-cols-2 h-full">
        <Link href="https://music.maxwellyoung.info" passHref>
          <div
            className={`relative h-full transition-all duration-500`}
            onMouseEnter={() => setIsDevImageHovered(true)}
            onMouseLeave={() => setIsDevImageHovered(false)}
          >
            <div
              className={`absolute inset-0 bg-top bg-cover bg-no-repeat transition-all duration-500 ${
                isDevImageHovered
                  ? "blur-none opacity-100"
                  : "blur-sm opacity-75"
              }`}
              style={{
                backgroundImage: `url('/dev.jpeg')`,
              }}
            ></div>
            {!isDevImageHovered && (
              <div className="relative flex items-center justify-center h-full z-10">
                <span className="text-3xl font-light text-zinc-300 opacity-75">
                  music
                </span>
              </div>
            )}
          </div>
        </Link>
        <Link href="https://dev.maxwellyoung.info/" passHref>
          <div
            className={`relative h-full transition-all duration-500`}
            onMouseEnter={() => setIsMusicImageHovered(true)}
            onMouseLeave={() => setIsMusicImageHovered(false)}
          >
            <div
              className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-500 ${
                isMusicImageHovered
                  ? "blur-none opacity-100"
                  : "blur-sm opacity-75"
              }`}
              style={{
                backgroundImage: `url('/music.jpeg')`,
              }}
            ></div>
            {!isMusicImageHovered && (
              <div className="relative flex items-center justify-center h-full z-10">
                <span className="text-3xl font-light text-zinc-300 opacity-75">
                  dev
                </span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
