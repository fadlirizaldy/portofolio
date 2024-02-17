import Image from "next/image";
import { Inter } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import { DataProfile, Skill } from "@/utils/data";
import { motion } from "framer-motion";
import Template from "@/components/motion/Template";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setIndex((index) => {
          if (index === DataProfile?.passion?.length - 1) {
            return 0;
          } else {
            return index + 1;
          }
        }),
      2000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 items-center justify-center py-12 max-w-[1200px] w-[90%] mx-auto">
        <section className="w-full md:w-1/2">
          <h2 className="mb-2 text-2xl">
            Hi, I am <span className="text-primary font-medium">{DataProfile.name}</span>
          </h2>
          A{" "}
          <TextTransition springConfig={presets.wobbly} inline={true}>
            {DataProfile?.passion[index]}
          </TextTransition>
          <p className="mt-4">{DataProfile.about}</p>
          <div className="mt-3">
            <Link
              href={""}
              download={"/logo/js.png"}
              className="py-2 px-4 rounded-lg border border-slate-200 bg-primaryBtn hover:bg-primary text-white font-semibold transition-all"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </Link>
          </div>
        </section>
        <img src="/fadli-photo.jpg" alt="" className="w-48 h-48 rounded-full object-cover" />
      </div>
      <div className="max-w-[1200px] w-[90%] mx-auto mb-4 md:px-20">
        <h2 className="text-center font-medium text-xl mb-2">Skills</h2>
        <div className="flex items-center gap-5 overflow-x-scroll px-2">
          {Skill.map((data) => (
            <div key={data.id} className="min-w-20 w-20 max-w-20 h-20 rounded-full border border-slate-100 overflow-hidden">
              <img src={data.url} alt={data.name} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary bg-opacity-20 min-h-56">
        <div className="h-full max-w-[1200px] w-[90%] mx-auto pt-3 pb-8">
          <div className="mb-3 flex gap-2">
            <div className="w-2 h-8 bg-primary rounded-md"></div>
            <h3 className="font-medium text-xl text-secondary italic">Experience</h3>
          </div>
          <div className="flex sm:justify-center ">
            <ul className="steps steps-vertical gap-2 relative sm:left-32 overflow-visible">
              <li data-content="★" className="step step-neutral flex justify-start">
                <div className="flex flex-col items-start">
                  <h4 className="text-xl font-medium">Frontend Engineer Trainee</h4>
                  <h5 className="text-base text-slate-500">Shopee</h5>
                  <p className="text-slate-700 text-sm">Oct 2023 - Feb 2024</p>
                </div>
              </li>
              <li data-content="★" className="step step-neutral">
                <div className="flex flex-col items-start sm:absolute sm:-left-[270px]">
                  <h4 className="text-xl font-medium">Frontend Developer Mentee</h4>
                  <h5 className="text-base text-slate-500">Alterra Academy</h5>
                  <p className="text-slate-700 text-sm">Feb 2023 - Jun 2023</p>
                </div>
              </li>
              <li data-content="★" className="step step-neutral">
                <div className="flex flex-col items-start">
                  <h4 className="text-xl font-medium">Data Scientist Internship</h4>
                  <h5 className="text-base text-slate-500">Bisa AI Academy</h5>
                  <p className="text-slate-700 text-sm">Feb 2022 - Jul 2022</p>
                </div>
              </li>
              <li data-content="★" className="step step-neutral">
                <div className="flex flex-col items-start sm:absolute sm:-left-[270px]">
                  <h4 className="text-xl font-medium">Data Admin Internship</h4>
                  <h5 className="text-base text-slate-500">Telunjuk.com</h5>
                  <p className="text-slate-700 text-sm">Nov 2021 - Des 2021</p>
                </div>
              </li>
            </ul>
          </div>
          {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}> */}

          {/* </motion.div> */}
        </div>
      </div>
      <div className="h-full max-w-[1200px] w-[90%] mx-auto pt-3 pb-10">
        <h3 className="mb-3 font-medium text-xl text-secondary italic">Featured works</h3>

        <section className="flex flex-col divide-y-2">
          <div className="flex flex-col md:flex-row gap-3 py-2">
            <img
              src="https://designsvalley.com/wp-content/uploads/2023/10/what-is-web-design.png"
              alt=""
              className="rounded-lg min-w-32 w-full md:w-32 h-28 md:h-20 object-cover"
            />
            <div>
              <h4 className="font-medium text-xl">Varmasea Web App</h4>
              <div className="flex gap-4 items-center">
                <p className="px-2 rounded-2xl bg-primaryBtn text-sm text-white">2024</p>
                <p>Web Development</p>
              </div>
              <p className="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate! Dolore, asperiores? Animi, labore architecto?
                Aliquam illo quos vitae illum totam. Voluptatum voluptatem doloremque corporis expedita repudiandae, vero dolor illo?
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 py-2">
            <img
              src="https://gogo.co.id/wp-content/uploads/2021/12/Ketahui-Perbedaan-Website-Development-VS-Website-Design.jpg"
              alt=""
              className="rounded-lg min-w-32 w-full md:w-32 h-28 md:h-20 object-cover"
            />
            <div>
              <h4 className="font-medium text-xl">Varmasea Web App</h4>
              <div className="flex gap-4 items-center">
                <p className="px-2 rounded-2xl bg-primaryBtn text-sm text-white">2024</p>
                <p>Web Development</p>
              </div>
              <p className="line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptate! Dolore, asperiores? Animi, labore architecto?
                Aliquam illo quos vitae illum totam. Voluptatum voluptatem doloremque corporis expedita repudiandae, vero dolor illo?
              </p>
            </div>
          </div>
        </section>
        <Link href={"/works"} className="flex justify-center mt-3 text-primary font-medium text-center hover:underline">
          See more...
        </Link>
      </div>
    </MainLayout>
  );
}
