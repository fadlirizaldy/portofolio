import MainLayout from "@/components/MainLayout";
import { Works } from "@/utils/data";
import { DataType } from "@/utils/type";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const WorkDetail = () => {
  const router = useRouter();
  const [data, setData] = useState<DataType | null>(null);
  const { id } = router.query;

  useEffect(() => {
    if (router.isReady) {
      setData(Works[Number(id)]);
    }
  }, []);
  return (
    <MainLayout>
      <div className="max-w-[1200px] w-[90%] mx-auto pt-7 relative">
        <div
          className="absolute text-black top-4 flex items-center cursor-pointer"
          onClick={() => router.push("/works")}
        >
          <Icon icon="tabler:arrow-left" className="text-xl h-full" />
        </div>
        <div className="flex gap-10 mt-7 p-3 border border-slate-300 rounded-lg">
          <div className="w-80 max-h-56">
            <img src={data?.image} alt="project-img" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="w-[70%]">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-semibold leading-7 text-gray-900">Doctor Information</h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and contact</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">varmasea</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Specialization</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Yes</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Years of Experience</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">2 Years</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Phone Number</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">0856932132</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Status</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">valid</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                  <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Here</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default WorkDetail;
