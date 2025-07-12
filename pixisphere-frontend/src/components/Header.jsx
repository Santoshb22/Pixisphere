"use client";

import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCamera } from "react-icons/md";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, []);

  return (
    <header className="px-4 w-full flex items-center justify-between py-4 shadow-lg shadow-gray-950 fixed top-0 left-0 bg-black text-white z-50">
      <div
        className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition"
        onClick={() => router.push("/")}
      >
        <MdOutlineCamera size={32} />
        <p className="font-semibold text-lg">Pixisphere</p>
      </div>

      {isSearch && (
        <div className="flex items-center gap-2 border border-gray-600 rounded-md px-3 py-1 bg-gray-800">
          <label htmlFor="search">
            <CiSearch size={22} />
          </label>
          <input
            className="outline-none w-72 bg-transparent text-gray-200 placeholder-gray-400"
            type="text"
            name="search"
            id="search"
            placeholder="Search maternity photographer"
          />
        </div>
      )}

      <div className="cursor-pointer hover:underline">
        <p>Photographers</p>
      </div>
    </header>
  );
};

export default Header;
