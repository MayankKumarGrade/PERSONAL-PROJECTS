"use client";

import { UserButton } from "@clerk/nextjs";
import Sidebar from "../components/Sidebar";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import ModeSwitch from "./ModeSwitch";
import { useTheme } from "next-themes";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <div
      className={`fixed flex justify-between items-center p-3 md:p-2 top-0 left-0 w-full transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${resolvedTheme == "dark" ? "bg-black" : "bg-gray-200"}`}
    >
      <Logo href="/dashboard" />
      <SearchBar className="md:flex hidden" />
      <div className="flex justify-center items-center">
        <div className="flex gap-2 pr-2">
          <UserButton afterSignOutUrl="/" />
          <div className="hidden md:flex">
            <ModeSwitch />
          </div>
        </div>
        <div className="md:hidden pr-2 flex justify-end items-center">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;
