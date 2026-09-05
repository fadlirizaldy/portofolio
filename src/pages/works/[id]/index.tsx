import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";

import MainLayout from "@/components/MainLayout";
import { Works, CompanyWorks } from "@/utils/data";
import { DataType } from "@/utils/type";

const WorkDetail = () => {
  const router = useRouter();
  const [data, setData] = useState<DataType | null>(null);
  const { id } = router.query;

  useEffect(() => {
    if (router.isReady) {
      const WorksProject = Works.find((x) => x.id === id) as any;
      const CompanyProject = CompanyWorks.find((x) => x.id === id) as any;
      setData(WorksProject || CompanyProject);
    }
  }, [id]);
  return (
    <MainLayout>
      <div className="max-w-[1200px] w-[90%] mx-auto py-7 relative">
        <div
          className="absolute text-black top-4 flex items-center cursor-pointer"
          onClick={() => router.push("/works")}
        >
          <Icon
            icon="tabler:arrow-left"
            className="text-xl h-full dark:text-white"
          />
        </div>
        <div className="border border-slate-300 rounded-lg mt-7 p-3">
          <div className="flex flex-col md:flex-row gap-10 ">
            <div className="w-full md:w-80 md:max-h-56">
              <img
                src={data?.image}
                alt="project-img"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-[70%]">
              <div className="px-4 sm:px-0">
                <h3 className="text-xl font-semibold leading-7 text-gray-900 dark:text-primaryBtn">
                  {data?.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-200">
                  Project details
                </p>
                <div className="flex items-center gap-2 mt-2">
                  {data?.links?.live && (
                    <Link
                      href={data?.links?.live ?? ""}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      className="tooltip"
                      data-tip="Live"
                    >
                      <Icon
                        icon="fluent:live-20-filled"
                        className="dark:text-slate-200 text-slate-600"
                        width={24}
                      />
                    </Link>
                  )}
                  <Link
                    href={data?.links?.github ?? ""}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className="tooltip"
                    data-tip="Github"
                  >
                    <Icon
                      icon="mdi:github"
                      className="dark:text-slate-200 text-slate-600"
                      width={24}
                    />
                  </Link>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100 ">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-primaryBtn">
                      Type
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">
                      {data?.type}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-primaryBtn">
                      Year
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">
                      {data?.year}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-primaryBtn">
                      Description
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">
                      {data?.description}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900 dark:text-primaryBtn">
                      Stack
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 dark:text-white">
                      {data?.tech_stack.join(", ")}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          {data?.images && (
            <div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 dark:text-white">
                Images
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {data?.images?.map((image) => (
                  <div key={image.id} className="overflow-hidden rounded-lg">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover border border-slate-300 rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default WorkDetail;
