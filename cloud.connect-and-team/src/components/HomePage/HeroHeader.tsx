"use client";

import { useState, useEffect } from "react";
import HomeSidebar from "./HomeSidebar";
import Logo from "../Logo";
import ModeSwitch from "../ModeSwitch";
import { useTheme } from "next-themes";
import { motion, useScroll } from "framer-motion";
import StarsCanvas from "../StarCanvas";

const HeroHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  const { resolvedTheme } = useTheme();

  const { scrollYProgress } = useScroll();

  if (!mounted) return <HeaderLoader />;

  return (
    <>
      <div
        className={`fixed flex border-b justify-between gap-2 items-center p-3 md:px-5 md:p-1 top-0 left-0 w-full transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } ${
          resolvedTheme == "dark"
            ? "bg-black border-white"
            : "bg-gray-200 border-black"
        }`}
      >
        <StarsCanvas />
        <div className="flex justify-center items-center gap-1">
          <HomeSidebar />
          <Logo className="lg:text-3xl md:text-2xl text-lg" />
        </div>
        <ModeSwitch />
      </div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className={`fixed top-0 w-full left-0 h-2 bg-gradient-to-br origin-left ${
          resolvedTheme == "dark"
            ? "from-purple-300 to-blue-400"
            : "from-purple-500 to-blue-700"
        }`}
      />
    </>
  );
};

export default HeroHeader;

const HeaderLoader = () => {
  return (
    <div className="bg-black fixed border-b border-white top-0 left-0 w-full flex justify-between items-center p-3 md:p-5">
      <div className="flex px-5 p-2 gap-2">
        <div className="bg-slate-200 animate-pulse h-6 rounded-md w-9"></div>
        <div className="bg-slate-200 animate-pulse h-6 rounded-md w-28"></div>
      </div>
      <div className="bg-slate-200 animate-pulse rounded-md h-6 w-20"></div>
    </div>
  );
};
