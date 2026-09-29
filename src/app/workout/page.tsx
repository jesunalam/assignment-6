import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IExercise } from "../component/user";

interface WorkOutProps{
    data:IExercise
}

const WorkOutCardPage = ({data}:WorkOutProps) => {
    return (
        <>
    <Link
      href={`/workout/${data.id}`}
      className="bg-[#12141a] rounded-2xl overflow-hidden border border-[#1e222d] hover:border-[#ccff00]  flex flex-col justify-between h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(204,255,0,0.15)]"
    >
      {/* Top Image */}
      <div className="relative w-full h-52 bg-gray-800">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover transition-transform duration-500  hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Muscle Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            {data.muscleGroups?.map((group, idx) => (
              <span
                key={idx}
                className="bg-[#ccff00] text-black font-extrabold text-[11px] uppercase px-3 py-1 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-black uppercase text-white mb-1">
            {data.name}
          </h3>
          <p className="text-gray-400 text-xs font-medium mb-6">
            {data.equipment}
          </p>
        </div>

        {/* Card Footer */}
        <div className="flex items-center gap-4 text-gray-400 text-xs font-semibold pt-2 border-t border-gray-600">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{data.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4" />
            <span>{data.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-gray-400" />
            <span>{data.rating}</span>
          </div>
        </div>
      </div>
    </Link>
   </>
    );
};

export default WorkOutCardPage;