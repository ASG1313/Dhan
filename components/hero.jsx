"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
    const imageRef = useRef()
    useEffect(() =>{
        const imageElement = imageRef.current;
        const handleScroll=()=>{
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
            if (scrollPosition>scrollThreshold){
                imageElement.classList.add("scrolled");
            }else{
                imageElement.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    },[])
  return (
    <section className="w-full px-4 pb-20 flex flex-col items-center justify-center text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-purple-800">
          Managing Your Finances Smartly with <br /> Dhan
        </h1>

        <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
          An AI-powered financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights.
        </p>

        <div className="flex-justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <div ref= {imageRef} className="hero-image">
            <Image
              src="/banner.jpg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
