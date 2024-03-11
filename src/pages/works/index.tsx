import MainLayout from "@/components/MainLayout";
import { Works } from "@/utils/data";
import { useRouter } from "next/router";
import React from "react";

const WorksPage = () => {
  const router = useRouter();
  return (
    <MainLayout title="Works | Fadli">
      <div className=" max-w-[1200px] w-[90%] mx-auto pt-7">
        <h2 className="font-extrabold text-2xl text-slate-500 dark:text-primaryBtn">Works</h2>
        <div className="mt-5 flex flex-col gap-2 divide-y-2 text-black dark:text-white">
          {Works?.map((work) => (
            <div
              key={work.id}
              className="flex flex-col sm:flex-row gap-5 py-2 cursor-pointer group transition-all hover:-translate-y-1"
              onClick={() => router.push(`/works/${work.id}`)}
            >
              <img
                src={work.image}
                alt="works image"
                className="rounded-lg min-w-52 w-full sm:w-52 h-44 sm:h-32 object-cover"
              />
              <div>
                <h4 className="font-medium text-xl dark:text-white ">{work.title}</h4>
                <div className="flex gap-4 items-center">
                  <p className="px-2 rounded-2xl bg-primaryBtn text-sm text-white">{work.year}</p>
                  <p className="text-slate-400">{work.type}</p>
                </div>
                <p className="line-clamp-2">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default WorksPage;
