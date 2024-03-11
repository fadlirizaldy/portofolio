import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";
import React from "react";

const WorksPage = () => {
  const router = useRouter();
  return (
    <MainLayout title="Works | Fadli">
      <div className=" max-w-[1200px] w-[90%] mx-auto pt-7">
        <h2 className="font-extrabold text-2xl text-slate-500 dark:text-primaryBtn">Works</h2>
        <div className="mt-5 flex flex-col gap-2 divide-y-2 text-black dark:text-white">
          <div
            className="flex flex-col sm:flex-row gap-5 py-2 cursor-pointer group transition-all hover:-translate-y-1"
            onClick={() => router.push(`/works/2`)}
          >
            <img
              src="https://designsvalley.com/wp-content/uploads/2023/10/what-is-web-design.png"
              alt=""
              className="rounded-lg min-w-52 w-full sm:w-52 h-44 sm:h-32 object-cover"
            />
            <div>
              <h4 className="font-medium text-xl dark:text-white ">Varmasea Web App</h4>
              <div className="flex gap-4 items-center">
                <p className="px-2 rounded-2xl bg-primaryBtn text-sm text-white">2024</p>
                <p className="text-slate-400">Web Development</p>
              </div>
              <p className="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate! Dolore, asperiores? Animi, labore architecto?
                Aliquam illo quos vitae illum totam. Voluptatum voluptatem doloremque corporis expedita repudiandae, vero dolor illo?
              </p>
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row gap-5 py-2 cursor-pointer transition-all hover:-translate-y-1"
            onClick={() => router.push(`/works/2`)}
          >
            <img
              src="https://gogo.co.id/wp-content/uploads/2021/12/Ketahui-Perbedaan-Website-Development-VS-Website-Design.jpg"
              alt=""
              className="rounded-lg min-w-52 w-full sm:w-52 h-44 sm:h-32 object-cover"
            />
            <div>
              <h4 className="font-medium text-xl dark:text-white">Golang Rest API</h4>
              <div className="flex gap-4 items-center">
                <p className="px-2 rounded-2xl bg-primaryBtn text-sm text-white">2022</p>
                <p className="text-slate-400">Rest API</p>
              </div>
              <p className="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate! Dolore, asperiores? Animi, labore architecto?
                Aliquam illo quos vitae illum totam. Voluptatum voluptatem doloremque corporis expedita repudiandae, vero dolor illo?
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default WorksPage;
