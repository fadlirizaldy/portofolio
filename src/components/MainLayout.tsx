import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Roboto } from "next/font/google";
import Head from "next/head";

//   weight: ["400", "500", "700"],
//   subsets: ["latin"],
// });

const MainLayout = ({ children, title }: { children: React.ReactNode; title?: string }) => {
  return (
    <>
      <Head>
        <title>{title === undefined ? "My Portofolio | Fadli" : title}</title>
      </Head>
      <Navbar />
      <div className="min-h-[90vh] bg-white dark:bg-darkBg transition-all">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
