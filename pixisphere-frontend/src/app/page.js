"use client";

import { MdOutlineCamera } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  return (
    <div>
      <img className="opacity-25" src="/home.jpg" alt="Home Background" />
      
      <div
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center animate-fade-in"
      >
        <MdOutlineCamera size={92} className="cursor-pointer mb-4 transition-transform duration-300 hover:scale-110" />
        <button 
        onClick={() => router.push("/category/maternity")}
        className="flex gap-2 text-2xl bg-black py-4 px-6 hover:bg-white hover:text-black rounded-md transition-all duration-300">
          Welcome to Pixisphere
          <span className="text-sm">
            <FaExternalLinkAlt />
          </span>
        </button>
      </div>
    </div>
  );
}
