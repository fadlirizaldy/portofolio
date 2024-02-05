import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import { DataProfile } from "@/utils/data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center py-12 gap-20 max-w-[1200px] w-[90%] mx-auto">
        <section>
          <h2>Hi, I am {DataProfile.name}</h2>
          <p>Your Software Engineer</p>
        </section>
        <img src="/fadli-photo.jpg" alt="" className="w-48 h-48 rounded-full object-cover" />
      </div>
      <div className="bg-primary bg-opacity-20 h-56">
        <div className="h-full flex items-center gap-4 max-w-[1200px] w-[90%] mx-auto">
          <div className="w-40 h-40 bg-white rounded-xl">
            <h2>Hello</h2>
          </div>
          <div className="w-40 h-40 bg-white rounded-xl">
            <h2>Hello 2</h2>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
