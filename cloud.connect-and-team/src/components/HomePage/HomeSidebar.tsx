"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger
} from "../ui/sheet";
import Logo from "../Logo";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

const HomeSidebar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      id: "overview",
      title: "Overview"
    },
    {
      id: "features",
      title: "Features"
    },
    {
      id: "testimonials",
      title: "Testimonials"
    }
  ];

  const handleLinkClick = (title: string) => {
    setActive(title);
    setIsOpen(false);
  };

  const {resolvedTheme} = useTheme()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <div
          className={`flex gap-1 md:gap-2 rounded-md flex-col w-8 md:w-10 justify-center p-2 items-center ${resolvedTheme == "dark" ? 'bg-slate-700 hover:bg-slate-900' : 'bg-gray-300  hover:bg-gray-400'}`}
          onClick={() => setIsOpen(true)}
        >
          <span className={`${resolvedTheme == "dark" ? 'bg-white' : 'bg-black'} h-[2px] w-full rounded-lg`} />
          <span className={`${resolvedTheme == "dark" ? 'bg-white' : 'bg-black'} h-[2px] w-full rounded-lg`} />
          <span className={`${resolvedTheme == "dark" ? 'bg-white' : 'bg-black'} h-[2px] w-full rounded-lg`} />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className={`px-3 w-72 py-0 pb-2 flex flex-col items-center ${resolvedTheme == "dark" ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
      >
        <SheetHeader className="flex justify-center items-center pt-4">
          <Logo className="md:text-xl text-[16px]" />
        </SheetHeader>
        <div className="bg-gray-500 w-full flex h-[1px] rounded-lg" />
        <SheetDescription className="overflow-y-auto flex flex-col h-full w-full">
          <ul className="list-none flex flex-col items-center gap-2">
            {navLinks.map(link =>
              <li
                key={link.id}
                className="text-[14px] md:text-md w-full flex"
                onClick={() => handleLinkClick(link.title)}
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  href={`#${link.id}`}
                  className={`${resolvedTheme == "dark" ? 'bg-slate-600 text-white' : 'bg-gray-300 text-black'} w-full text-center p-2 md:p-3 rounded-xl font-medium cursor-pointer`}
                >
                  {link.title}
                </Link>
              </li>
            )}
          </ul>
        </SheetDescription>
        <SheetFooter className={`${resolvedTheme == "dark" ? 'bg-slate-950' : 'bg-gray-200'}flex justify-center items-center w-full`}>
          <div className="flex flex-col w-full gap-2 md:text-md text-[12px] items-center">
            <Link
              href="/login"
              className={`${resolvedTheme == "dark" ? 'bg-white text-black' : 'bg-black text-white'} font-semibold w-full p-3 text-center rounded-xl`}
            >
              Welcome Back
            </Link>
            <Link
              href="/register"
              className={`${resolvedTheme == "dark" ? 'border-white' : 'border-black'} font-semibold border w-full p-3 text-center rounded-xl`}
            >
              Start With Us
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default HomeSidebar;
