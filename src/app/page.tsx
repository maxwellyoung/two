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
            className={`flex items-center justify-center h-full bg-top bg-cover bg-no-repeat relative transition-all duration-500 ${
              isDevImageHovered ? "blur-none opacity-100" : "blur-sm opacity-75"
            }`}
            style={{
              backgroundImage: `url('/dev.jpeg')`,
              border: "none", // Ensure no border
              outline: "none", // Ensure no outline
            }}
            onMouseEnter={() => setIsDevImageHovered(true)}
            onMouseLeave={() => setIsDevImageHovered(false)}
          >
            <span
              className={`text-3xl font-light ${
                isDevImageHovered ? "text-white" : "text-zinc-300"
              } opacity-75 z-10`}
            >
              dev
            </span>
          </div>
        </Link>
        <Link href="https://dev.maxwellyoung.info/" passHref>
          <div
            className={`flex items-center justify-center h-full bg-center bg-cover bg-no-repeat relative transition-all duration-500 ${
              isMusicImageHovered
                ? "blur-none opacity-100"
                : "blur-sm opacity-75"
            }`}
            style={{
              backgroundImage: `url('/music.jpeg')`,
              border: "none", // Ensure no border
              outline: "none", // Ensure no outline
            }}
            onMouseEnter={() => setIsMusicImageHovered(true)}
            onMouseLeave={() => setIsMusicImageHovered(false)}
          >
            <span
              className={`text-3xl font-light ${
                isMusicImageHovered ? "text-white" : "text-zinc-300"
              } opacity-75 z-10`}
            >
              music
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
