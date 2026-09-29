"use client";

import Image from "next/image";
import Link from "next/link";
import { IExercise } from "./user";
import { useContext } from "react";
import { Econtext } from "@/context/context";

interface ExerciseContextType {
  todayPlan: IExercise[];
  savedPlan: IExercise[];
}

const Navbar = () => {
  const { todayPlan, savedPlan } = useContext(Econtext) as ExerciseContextType;

  return (
    <div>
      <header className="shadow border-b border-gray-600 bg-[#0a0b0e]">
        <div className="navbar w-4/5 mx-auto py-3">
          
          {/* NAVBAR START */}
          <div className="navbar-start items-center">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden p-1 mr-2"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href={"/"}>Workouts</Link>
                </li>
                <li>
                  <Link href={"/plan"}>
                    My Plan ({todayPlan?.length || 0})
                  </Link>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <div className="hidden lg:flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={30} height={30} className="object-contain" />
              <Link href={"/"} className="font-bold tracking-wider text-white">
                FITLOG
              </Link>
            </div>
          </div>

          {/* NAVBAR CENTER */}
          <div className="navbar-center hidden lg:flex items-center justify-center">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li className="hover:bg-[#C2F800] hover:text-black hover:rounded-3xl transition-all">
                <Link href={"/"} className="px-4 py-2 text-sm font-medium">Workouts</Link>
              </li>
              <li className="hover:bg-[#C2F800] hover:text-black hover:rounded-3xl transition-all">
                <Link href={"/plan"} className="px-4 py-2 text-sm font-medium">My Plan</Link>
              </li>
            </ul>
          </div>

          {/* NAVBAR END */}
          <div className="navbar-end flex items-center justify-end gap-5">
            {/* Today Plan Counter */}
            <Link
              href="/plan"
              className="flex items-center gap-2 text-sm text-gray-200 hover:opacity-80 transition cursor-pointer"
            >
              <span>Plan</span>
              <span className="bg-[#ccff00] text-black font-black text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                {todayPlan?.length || 0}
              </span>
            </Link>

            {/* Saved Counter */}
            <Link
              href="/plan"
              className="flex items-center gap-2 text-sm text-gray-200 hover:opacity-80 transition cursor-pointer"
            >
              <span>Saved</span>
              <span className="border border-[#2d3240] bg-[#12141a] text-gray-300 font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                {savedPlan?.length || 0}
              </span>
            </Link>
          </div>

        </div>
      </header>
    </div>
  );
};

export default Navbar;