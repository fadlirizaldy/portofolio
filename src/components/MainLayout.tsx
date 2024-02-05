import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: ["400", "500", "700"],
//   subsets: ["latin"],
// });

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
