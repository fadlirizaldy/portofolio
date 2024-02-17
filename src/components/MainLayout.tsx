import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Roboto } from "next/font/google";
import Head from "next/head";

// const roboto = Roboto({
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
      <div className="min-h-[90vh]">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
