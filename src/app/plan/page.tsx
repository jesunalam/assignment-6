"use client";

import { Dispatch, SetStateAction, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, X, View } from "lucide-react";
import { Econtext } from "@/context/context";
import { IExercise } from "@/app/component/user";

interface ExerciseContextType {
  todayPlan: IExercise[];
  setTodayPlan: Dispatch<SetStateAction<IExercise[]>>;
  savedPlan: IExercise[];
  setSavedPlan: Dispatch<SetStateAction<IExercise[]>>;
  activeTab: "today" | "saved";
  setActiveTab: Dispatch<SetStateAction<"today" | "saved">>;
  sortBy: "duration" | "calories" | "rating";
  setSortBy: Dispatch<SetStateAction<"duration" | "calories" | "rating">>;
}

const MyPlanPage = () => {
  
  const {
    todayPlan,
    setTodayPlan,
    savedPlan,
    setSavedPlan,
    activeTab,
    setActiveTab,
    sortBy,
    setSortBy,
  } = useContext(Econtext) as ExerciseContextType;

  // Active Tab er state select kora hyeche
  const currentList = activeTab === "today" ? todayPlan : savedPlan;

  // Sorting Logic
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") return a.duration - b.duration;
    if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  // Calculate Dynamic Stats
  const totalExercises = todayPlan.length;
  const totalMinutes = todayPlan.reduce((acc, curr) => acc + (curr.duration || 0), 0);
  const totalCalories = todayPlan.reduce((acc, curr) => acc + (curr.caloriesBurned || 0), 0);

  // Remove Item
  const handleRemove = (id: string | number) => {
    if (activeTab === "today") {
      setTodayPlan((prev) => prev.filter((item) => item.id !== id));
    } else {
      setSavedPlan((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="bg-[#0c0d12] min-h-screen text-white p-6 md:p-10 font-sans">
      <div className="max-w-4/5 mx-auto space-y-6">

        {/* 1. Header Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* 2. Dynamic Stats Section */}
        <div className="bg-[#12141a] border border-[#1e222d] rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#1e222d]">
          <div className="py-2 md:py-0 md:px-6 first:pl-0">
            <span className="text-gray-400 text-xs font-medium">
              Exercises
            </span>
            <p className="text-3xl font-black text-[#ccff00] mt-1">
              {totalExercises}
            </p>
          </div>

          <div className="py-2 md:py-0 md:px-6">
            <span className="text-gray-400 text-xs font-medium">
              Minutes
            </span>
            <p className="text-3xl font-black text-white mt-1">
              {totalMinutes}
            </p>
          </div>

          <div className="py-2 md:py-0 md:px-6">
            <span className="text-gray-400 text-xs font-medium">
              Calories
            </span>
            <p className="text-3xl font-black text-white mt-1">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* 3. DaisyUI Tabs & Sort Menu */}
        <div className="bg-[#12141a] border border-[#1e222d] rounded-xl p-2 flex flex-col sm:flex-row justify-between items-center gap-4">

          <div
            role="tablist"
            className="tabs tabs-boxed bg-[#0c0d12] p-1 border border-[#1e222d]"
          >
            <button
              type="button"
              role="tab"
              onClick={() => setActiveTab("today")}
              className={`tab text-xs font-bold transition-all ${
                activeTab === "today"
                  ? "tab-active !bg-[#1c202b] !text-white rounded-md"
                  : "text-gray-400"
              }`}
            >
              Today's Plan ({todayPlan.length})
            </button>

            <button
              type="button"
              role="tab"
              onClick={() => setActiveTab("saved")}
              className={`tab text-xs font-bold transition-all ${
                activeTab === "saved"
                  ? "tab-active !bg-[#1c202b] !text-white rounded-md"
                  : "text-gray-400"
              }`}
            >
              Saved ({savedPlan.length})
            </button>
          </div>

          <div className="flex items-center gap-2 pr-2">
            <span className="text-xs text-gray-400 font-medium">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as "duration" | "calories" | "rating"
                )
              }
              className="select select-sm select-bordered bg-[#0c0d12] text-white text-xs font-semibold focus:outline-none border-[#1e222d]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>

        </div>

        {/* 4. List / Empty State Render */}
        {sortedList.length === 0 ? (
          <div className="bg-[#12141a] border border-[#1e222d] rounded-xl p-12 md:p-20 text-center flex flex-col items-center justify-center min-h-[300px]">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-white mb-2">
              NOTHING HERE YET
            </h2>

            <p className="text-gray-400 text-xs md:text-sm mb-6">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="btn bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold border-none text-xs uppercase px-6 rounded-full"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedList.map((item) => (
              <div
                key={item.id}
                className="bg-[#12141a] border border-[#1e222d] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#1c202b] ">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-extrabold uppercase text-sm md:text-base tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">
                      {item.equipment}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-2">
                      <span>⏱️ {item.duration} min</span>
                      <span>🔥 {item.caloriesBurned} kcal</span>
                      <span>⭐ {item.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <Link
                    href={`/workout/${item.id}`}
                    className="bg-[#1c202b] border border-[#1e222d] hover:bg-[#252a38] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 transition"
                  >
                    <View className="w-3.5 h-3.5" /> View Details
                  </Link>

                  {activeTab === "today" && (
                    <button
                      type="button"
                      className="bg-[#ccff00] text-black text-xs font-extrabold px-4 py-2 rounded-xl flex items-center gap-1 hover:bg-[#b8e600] transition"
                    >
                      <Check className="w-3.5 h-3.5" /> Mark as Done
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => handleRemove(item.id)}
                    className="p-2 text-gray-500 hover:text-white transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default MyPlanPage;