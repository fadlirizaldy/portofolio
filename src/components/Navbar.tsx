import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import ThemeSwitcher from "./ThemeSwitcher";

const roboto = Roboto({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

const Navbar = () => {
  const router = useRouter();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div className="sticky top-0 bg-white dark:bg-darkBg z-[999] transition-all">
      <div className="max-w-[1200px] w-[90%] mx-auto py-4 flex justify-center items-center sm:justify-between">
        <div
          className="flex justify-center absolute left-5 sm:hidden cursor-pointer transition-all"
          onClick={() => setIsShowMenu((prev) => !prev)}
        >
          <Icon icon={`${!isShowMenu ? "pajamas:hamburger" : "ic:round-close"}`} className="text-2xl" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => router.push("/")}>
          <h1 className={`${roboto.className} tracking-wider italic text-2xl dark:text-white`}>Fadli</h1>
          <div className="w-3 h-3 bg-primaryBtn rounded-full"></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row absolute sm:static bg-white dark:bg-darkBg w-screen h-screen sm:h-fit sm:w-fit sm:py-0 py-6 top-16 -left-2 items-center gap-7 sm:gap-4 font-medium transition-all ${
            width! < 640
              ? isShowMenu
                ? "translate-x-2 opacity-100"
                : "opacity-0 pointer-events-none sm:pointer-events-auto sm:opacity-100"
              : ""
          }`}
        >
          <Link
            href={"/"}
            className={`${
              router.asPath === "/" ? "text-primaryBtn" : "dark:text-white"
            } hover:underline sm:w-fit w-full flex justify-center`}
          >
            About
          </Link>
          <Link
            href={"/works"}
            className={`${
              router.asPath === "/works" ? "text-primaryBtn" : "dark:text-white"
            } hover:underline sm:w-fit w-full flex justify-center`}
          >
            Works
          </Link>
          <Link
            href={"/blog"}
            className={`${
              router.asPath === "/blog" ? "text-primaryBtn" : "dark:text-white"
            } hover:underline sm:w-fit w-full flex justify-center`}
          >
            Blog
          </Link>
          <Link
            href={"/contact"}
            className={`${
              router.asPath === "/contact" ? "text-primaryBtn" : "dark:text-white"
            } hover:underline sm:w-fit w-full flex justify-center`}
          >
            Contact
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
