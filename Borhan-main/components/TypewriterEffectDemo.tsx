"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { words } from "@/utils/constant";
export function TypewriterEffectDemo() {
  
  return (
    <div className="h-[50rem] w-full  bg-transparent -z-10 dark:bg-grid-white/[0.1] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-transparent ">
        <div className="flex flex-col items-center justify-center h-[40rem] ">
        <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
          The road to freedom starts from here
        </p>
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </div>
        </div>
      </div>
     </div>

  );
}
