"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger
} from "../components/ui/sheet";
import SearchBar from "./SearchBar";
import ModeSwitch from "./ModeSwitch";
import { useTheme } from "next-themes";
import Logo from "./Logo";

export default function Sidebar() {
  const { resolvedTheme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger>
        <div
          className={`flex gap-1 md:gap-2 rounded-md flex-col w-8 md:w-10 justify-center p-2 items-center ${
            resolvedTheme == "dark"
              ? "bg-slate-700 hover:bg-slate-900"
              : "bg-gray-300  hover:bg-gray-400"
          }`}
        >
          <span
            className={`${
              resolvedTheme == "dark" ? "bg-white" : "bg-black"
            } h-[2px] w-full rounded-lg`}
          />
          <span
            className={`${
              resolvedTheme == "dark" ? "bg-white" : "bg-black"
            } h-[2px] w-full rounded-lg`}
          />
          <span
            className={`${
              resolvedTheme == "dark" ? "bg-white" : "bg-black"
            } h-[2px] w-full rounded-lg`}
          />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-slate-900 flex flex-col text-white"
      >
        <SheetHeader className="px-2">
          <SearchBar className="md:hidden flex w-full" />
        </SheetHeader>
        <div className="bg-gray-500 w-full flex h-[1px] rounded-lg" />
        <SheetDescription className="h-full"></SheetDescription>
        <SheetFooter className="flex justify-between gap-5 items-center pb-0">
          <Logo />
          <ModeSwitch />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
