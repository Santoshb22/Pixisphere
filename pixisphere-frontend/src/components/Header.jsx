"use client";

import { useEffect, useState } from "react";
import { MdOutlineCamera } from "react-icons/md";
import { useRouter } from "next/navigation";
import Search from "./Search";

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
    <header className="px-4 w-full md:flex items-center justify-between py-4 shadow-lg shadow-gray-950 fixed top-0 left-0 bg-black text-white z-50">
      <div
        className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition"
        onClick={() => router.push("/")}
      >
        <MdOutlineCamera size={32} />
        <p className="font-semibold text-lg">Pixisphere</p>
      </div>

      { isSearch && <Search /> }

      <div className="cursor-pointer hover:underline">
        <p>Photographers</p>
      </div>
    </header>
  );
};

export default Header;
