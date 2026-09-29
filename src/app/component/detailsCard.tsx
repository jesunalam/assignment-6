"use client";

import Image from "next/image";
import { Plus, Bookmark } from "lucide-react";
import { useContext, Dispatch, SetStateAction } from "react";

import { toast } from "react-toastify";

import { IExercise } from "./user";
import { Econtext } from "@/context/context";

interface DetailsCardProps {
  exercise: IExercise;
}


interface ExerciseContextType {
  todayPlan: IExercise[];
  setTodayPlan: Dispatch<SetStateAction<IExercise[]>>;
  savedPlan: IExercise[];
  setSavedPlan: Dispatch<SetStateAction<IExercise[]>>;
  setActiveTab: Dispatch<SetStateAction<"today" | "saved">>;
}

const DetailsCard = ({ exercise }: DetailsCardProps) => {
 
  
  const { todayPlan, setTodayPlan, savedPlan, setSavedPlan, setActiveTab } =
    useContext(Econtext) as ExerciseContextType;

  const handleAddPlan = () => {
   
    const isAlreadyAdded = todayPlan?.some((item) => item.id === exercise.id);

    if (isAlreadyAdded) {
      toast.warning("Already added to today's plan!");
      return;
    }

    setTodayPlan((prev) => [...prev, exercise]);
    setActiveTab("today");
    toast.success("Added to today's plan!");
   
  };

  // Save for Later Handler
  const handleSavePlan = () => {
    const isAlreadySaved = savedPlan?.some((item) => item.id === exercise.id);

    if (isAlreadySaved) {
      toast.warning("Already saved for later!");
      return;
    }

    setSavedPlan((prev) => [...prev, exercise]);
    setActiveTab("saved");
    toast.success("Added to saved plan!");
    
  };

  return (
    <div className="bg-[#0c0d12] min-h-screen text-white p-6 md:p-10 flex justify-center items-center">
      <div className="bg-[#0c0d12] border border-[#1e222d] rounded-3xl p-6 md:p-8 max-w-4/5 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Image */}
        <div className="relative w-full h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden bg-[#12141a]">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-2 text-white">
              {exercise.name}
            </h1>

            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
              {exercise.description}
            </p>

            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2 mb-6">
              {exercise.muscleGroups?.map((group, idx) => (
                <span
                  key={idx}
                  className="bg-[#ccff00] text-black font-extrabold text-[11px] px-3 py-1 rounded-full uppercase"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Specs */}
            <div className="bg-[#12141a] border border-[#1e222d] rounded-2xl p-4 mb-6 space-y-3 text-xs">
              <div className="flex justify-between  border-b border-gray-600 ">
                <span className="text-gray-400 mb-2.5">Equipment</span>
                <span>{exercise.equipment}</span>
              </div>

              <div className="flex justify-between border-b border-gray-600 ">
                <span className="text-gray-400 mb-2.5">Difficulty</span>
                <span>{exercise.difficulty}</span>
              </div>

              <div className="flex justify-between  border-b border-gray-600">
                <span className="text-gray-400 mb-2.5">Sets</span>
                <span>{exercise.sets}</span>
              </div>

              <div className="flex justify-between  border-b border-gray-600">
                <span className="text-gray-400 mb-2.5">Reps</span>
                <span>{exercise.reps}</span>
              </div>

              <div className="flex justify-between  border-b border-gray-600">
                <span className="text-gray-400 mb-2.5">Duration</span>
                <span>{exercise.duration} min</span>
              </div>

              <div className="flex justify-between  border-b border-gray-600">
                <span className="text-gray-400 mb-2.5">Calories</span>
                <span>{exercise.caloriesBurned} kcal</span>
              </div>

              <div className="flex justify-between  border-b border-gray-600">
                <span className="text-gray-400 mb-2.5">Rating</span>
                <span>{exercise.rating}</span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-6">
              <h3 className="text-xs font-black uppercase tracking-wider mb-3">
                Instructions
              </h3>

              <ol className="space-y-2 text-xs text-gray-400 list-decimal list-inside">
                {exercise.instructions?.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 pt-2">

            {/* ADD BUTTON */}
            <button
              onClick={handleAddPlan}
              className="flex-1 bg-[#ccff00] text-black font-extrabold text-xs uppercase py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#b8e600] transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Add to today's plan
            </button>

            {/* SAVE BUTTON */}
            <button
              onClick={handleSavePlan}
              className="bg-[#12141a] border border-[#1e222d] text-white font-bold text-xs uppercase py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1a1d26] transition cursor-pointer"
            >
              <Bookmark className="w-4 h-4" />
              Save for later
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;