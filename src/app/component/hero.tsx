import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div>
      <div className="w-full pt-10 sm:pt-10 flex justify-center items-center">
        <div className="w-4/5 bg-[#12141a] border border-[#1e222b] rounded-2xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 ">
          <div className=" space-y-6 z-10 max-w-2xl">
            <span className="text-[#C2F800] text-xs sm:text-sm font-bold tracking-widest uppercase">
              WORKOUT LIBRARY
            </span>

            <h1 className="text-white text-[30px] sm:text-[50px] font-[800] uppercase leading-[1.3] tracking-[-1px]">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="text-[#94a3b8b0] text-base sm:text-lg leading-relaxed font-normal">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <div className="pt-2">
              <Link
                href="/"
                className="inline-block bg-[#C2F800] hover:bg-[#96d82d] text-black font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-lg uppercase tracking-wide transition-colors duration-200"
              >
                BROWSE WORKOUTS
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end items-center">
            <Image
              src="/banner.png"
              alt="Gym Companion Workout Illustration"
              width={334}
              height={334}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;