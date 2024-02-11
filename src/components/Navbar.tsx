import React from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";

const roboto = Roboto({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
});

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="max-w-[1200px] w-[90%] mx-auto py-3 flex justify-between">
      <div className="flex items-center gap-1">
        <h1 className={`${roboto.className} tracking-wider italic text-2xl`}>Fadli</h1>
        <div className="w-3 h-3 bg-primaryBtn rounded-full"></div>
      </div>
      <div className="flex items-center gap-4 font-medium">
        <Link href={"/"} className={`${router.asPath === "/" && "text-primaryBtn"} hover:underline`}>
          About
        </Link>
        <Link href={"/works"} className={`${router.asPath === "/works" && "text-primaryBtn"} hover:underline`}>
          Works
        </Link>
        <Link href={"/blog"} className={`${router.asPath === "/blog" && "text-primaryBtn"} hover:underline`}>
          Blog
        </Link>
        <Link href={"/contact"} className={`${router.asPath === "/contact" && "text-primaryBtn"} hover:underline`}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
