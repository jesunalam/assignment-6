"use client";

import { IExercise } from "@/app/component/user";
import { createContext, useState } from "react";

const Econtext = createContext({});

const ExerciseContext = ({ children }: { children: React.ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IExercise[]>([]);
  const [savedPlan, setSavedPlan] = useState<IExercise[]>([]);
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const allData = {
    todayPlan,
    setTodayPlan,

    savedPlan,
    setSavedPlan,

    activeTab,
    setActiveTab,

    sortBy,
    setSortBy,
  };

  return <Econtext.Provider value={allData}>{children}</Econtext.Provider>;
};

export { Econtext };
export default ExerciseContext