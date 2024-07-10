// pages/index.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isOnDark, setIsOnDark] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number }) => {
      const windowWidth = window.innerWidth;
      setIsOnDark(event.clientX < windowWidth / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-screen">
      <div className="grid grid-cols-2 h-full w-full">
        <Link href="https://music.maxwellyoung.info" passHref>
          <div className="flex items-center justify-center h-full bg-zinc-800 text-3xl font-light text-zinc-300 hover:scale-105 transition transform duration-300 cursor-pointer lowercase">
            music
          </div>
        </Link>
        <Link href="https://dev.maxwellyoung.info/" passHref>
          <div className="flex items-center justify-center h-full bg-zinc-500 text-3xl font-light text-black hover:scale-105 transition transform duration-300 cursor-pointer lowercase">
            dev
          </div>
        </Link>
      </div>
    </div>
  );
}
