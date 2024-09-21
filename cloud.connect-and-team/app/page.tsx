"use client";

import FeaturesSection from "@/components/HomePage/FeaturesSection";
import HeroHeader from "@/components/HomePage/HeroHeader";
import HomeFooter from "@/components/HomePage/HomeFooter";
import HomeSection from "@/components/HomePage/HomeSection";
import OverviewSection from "@/components/HomePage/OverviewSection";
import ScrollButton from "@/components/ScrollButton";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    isLoading(false);
  }, []);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="h-14 w-14 rounded-full border-2 border-b-gray-100 animate-spin"></div>
      </div>
    );

  return (
    <>
      <HeroHeader />
      <HomeSection />
      <OverviewSection />
      <FeaturesSection />
      <HomeFooter />
      <ScrollButton />
    </>
  );
}
