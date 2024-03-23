import MainLayout from "@/components/MainLayout";
import { DataProfile, Skill, Works } from "@/utils/data";
import { motion } from "framer-motion";
import Template from "@/components/motion/Template";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const handleDownloadClick = () => {
  const pdfUrl = "/CV_Fadli Rizaldy_IT.pdf";

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.setAttribute("download", "Fadli_CV.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Home() {
  const router = useRouter();
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
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 items-center justify-center py-12 max-w-[1200px] w-[90%] mx-auto text-black">
        <section className="w-full md:w-1/2 dark:text-white">
          <h2 className="mb-2 text-2xl">
            Hi, I am <span className="text-primary dark:text-primaryBtn font-medium">{DataProfile.name}</span>
          </h2>
          A{" "}
          <TextTransition springConfig={presets.wobbly} inline={true}>
            {DataProfile?.passion[index]}
          </TextTransition>
          <p className="mt-4">{DataProfile.about}</p>
          <div className="mt-3">
            <button
              className="py-1 px-4 rounded-lg border border-slate-200 bg-primaryBtn hover:bg-primary text-white font-semibold transition-all"
              rel="noreferrer"
              onClick={() => handleDownloadClick()}
            >
              Download CV
            </button>
          </div>
        </section>
        <img src="/fadli-photo.jpg" alt="" className="w-48 h-48 rounded-full object-cover" />
      </div>
      <div className="max-w-[1200px] w-[90%] mx-auto mb-4 md:px-20">
        <h2 className="text-center font-medium text-xl mb-2 dark:text-white">Skills</h2>
        <div className="overflow-hidden flex gap-3">
          <div className="gap-3 logos-slide flex">
            {Skill.map((data) => (
              <div key={data.id} className="w-20 h-20 min-w-20 rounded-full">
                <img src={data.url} alt={data.name} className="object-cover w-full h-full rounded-full" />
              </div>
            ))}
          </div>
          <div className="gap-3 logos-slide flex">
            {Skill.map((data) => (
              <div key={data.id} className="w-20 h-20 min-w-20 rounded-full">
                <img src={data.url} alt={data.name} className="object-cover w-full h-full rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-primary bg-opacity-20 min-h-56">
        <div className="h-full max-w-[1200px] w-[90%] mx-auto pt-3 pb-8">
          <div className="mb-3 flex gap-2">
            <div className="w-2 h-8 bg-primary dark:bg-primaryBtn rounded-md"></div>
            <h3 className="font-medium text-xl text-secondary dark:text-primaryBtn italic">Experience</h3>
          </div>
          <div className="flex sm:justify-center text-black dark:text-white">
            <ul className="steps steps-vertical gap-2 relative sm:left-32 overflow-visible">
              <li data-content="★" className="step step-neutral">
                <div className="flex flex-col items-start sm:absolute sm:-left-[270px]">
                  <h4 className="text-xl font-medium">Frontend Engineer Internship</h4>
                  <h5 className="text-base text-slate-500">Ajaib</h5>
                  <p className="text-slate-700 text-sm">Feb 2024 - May 2024</p>
                </div>
              </li>
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
        <h3 className="mb-3 font-medium text-xl text-secondary dark:text-primaryBtn italic">Featured works</h3>

        <section className="flex flex-col divide-y-2 text-black dark:text-white">
          {Works?.slice(0, 2).map((work) => (
            <div
              className="flex flex-col md:flex-row gap-3 py-2 cursor-pointer"
              key={work.id}
              onClick={() => router.push(`/works/${work.id}`)}
            >
              <img
                src={work.image}
                alt="Work Image"
                className="rounded-lg min-w-32 w-full md:w-32 h-28 md:h-20 object-cover"
              />
              <div>
                <h4 className="font-medium text-xl">{work.title}</h4>
                <div className="flex gap-4 items-center">
                  <p className="px-2 rounded-2xl bg-primaryBtn text-sm text-white">{work.year}</p>
                  <p className="text-slate-500">{work.year}</p>
                </div>
                <p className="line-clamp-2 dark:font-thin">{work.description}</p>
              </div>
            </div>
          ))}
        </section>
        <Link
          href={"/works"}
          className="flex justify-center mt-3 text-primary font-medium text-center hover:underline dark:text-primaryBtn"
        >
          See more...
        </Link>
      </div>
    </MainLayout>
  );
}
