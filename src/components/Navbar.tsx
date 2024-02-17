import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const roboto = Roboto({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

const Navbar = () => {
  const router = useRouter();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sticky top-0 bg-white z-[999]">
      <div className="max-w-[1200px] w-[90%] mx-auto py-4 flex justify-center items-center sm:justify-between">
        <div
          className="flex justify-center absolute left-5 sm:hidden cursor-pointer transition-all"
          onClick={() => setIsShowMenu(!isShowMenu)}
        >
          <Icon icon={`${!isShowMenu ? "pajamas:hamburger" : "ic:round-close"}`} className="text-2xl" />
        </div>
        <div className="flex items-center gap-1">
          <h1 className={`${roboto.className} tracking-wider italic text-2xl`}>Fadli</h1>
          <div className="w-3 h-3 bg-primaryBtn rounded-full"></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row absolute sm:static bg-white w-screen h-screen sm:h-fit sm:w-fit sm:py-0 py-6 top-16 -left-2 items-center gap-7 sm:gap-4 font-medium transition-all ${
            width < 640 ? (isShowMenu ? "translate-x-2 opacity-100" : "opacity-0 pointer-events-none") : ""
          }`}
        >
          <Link href={"/"} className={`${router.asPath === "/" && "text-primaryBtn"} hover:underline sm:w-fit w-full flex justify-center`}>
            About
          </Link>
          <Link
            href={"/works"}
            className={`${router.asPath === "/works" && "text-primaryBtn"} hover:underline sm:w-fit w-full flex justify-center`}
          >
            Works
          </Link>
          <Link
            href={"/blog"}
            className={`${router.asPath === "/blog" && "text-primaryBtn"} hover:underline sm:w-fit w-full flex justify-center`}
          >
            Blog
          </Link>
          <Link
            href={"/contact"}
            className={`${router.asPath === "/contact" && "text-primaryBtn"} hover:underline sm:w-fit w-full flex justify-center`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
