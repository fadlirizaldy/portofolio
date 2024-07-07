import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { useRouter } from "next/router";
import TextTransition, { presets } from "react-text-transition";

import MainLayout from "@/components/MainLayout";
import ImageSlider from "@/components/imageSlider";
import { DataProfile, Experience, Works } from "@/utils/data";
import ShowInWhenVisible from "@/components/motion/ShowInWhenVisible";
import ShowFromBottom from "@/components/motion/Template";
import ExperienceItem from "@/components/ExperienceItem";

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
          <ShowInWhenVisible duration={0.5}>
            <h2 className="mb-2 text-2xl">
              Hi, I am <span className="text-primary dark:text-primaryBtn font-medium">{DataProfile.name}</span>
            </h2>
          </ShowInWhenVisible>
          A{" "}
          <TextTransition springConfig={presets.wobbly} inline={true}>
            {DataProfile?.passion[index]}
          </TextTransition>
          <p className="mt-4">{DataProfile.about}</p>
          <div className="mt-3">
            <button
              className="btn py-3 px-4 min-h-fit h-fit rounded-lg border border-slate-200 bg-primaryBtn hover:bg-primary text-white font-semibold transition-all"
              rel="noreferrer"
              onClick={() => handleDownloadClick()}
            >
              Download CV
            </button>
          </div>
        </section>
        <ShowInWhenVisible duration={1}>
          <img src="/fadli-photo.jpg" alt="" className="w-48 h-48 rounded-full object-cover" />
        </ShowInWhenVisible>
      </div>
      <div className="max-w-[1200px] w-[90%] mx-auto mb-4 md:px-20">
        <h2 className="text-center font-medium text-xl mb-2 dark:text-white">Skills</h2>
        <ImageSlider />
      </div>
      <div className="bg-primary bg-opacity-20 min-h-56">
        <div className="h-full max-w-[1200px] w-[90%] mx-auto pt-3 pb-8">
          <div className="mb-3 flex gap-2">
            <div className="w-2 h-8 bg-primary dark:bg-primaryBtn rounded-md"></div>
            <h3 className="font-medium text-xl text-secondary dark:text-primaryBtn italic">Experience</h3>
          </div>
          <div className="flex sm:justify-center items-center mx-auto text-black dark:text-white">
            <ul className="steps steps-vertical gap-2 relative sm:left-32 overflow-visible">
              {Experience.map((item) => (
                <ExperienceItem key={item.id} {...item} />
              ))}
            </ul>
          </div>
          {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}> */}
          {/* </motion.div> */}
        </div>
      </div>
      <div className="h-full max-w-[1200px] w-[90%] mx-auto pt-3 pb-10">
        <h3 className="mb-3 font-medium text-xl text-secondary dark:text-primaryBtn italic">Featured works</h3>

      <div>
        <section className="flex flex-col divide-y-2 text-black dark:text-white">
            {Works?.slice(0, 2).map((work) => (
              <ShowFromBottom
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
                    <p className="text-slate-500">{work.type}</p>
                  </div>
                  <p className="line-clamp-2 dark:font-thin">{work.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Link
                      href={work.links.live ?? ""}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      className="tooltip"
                      data-tip="Live"
                    >
                      <Icon icon="fluent:live-20-filled" className="dark:text-slate-200 text-slate-600" width={24} />
                    </Link>
                    <Link
                      href={work.links.github ?? ""}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      className="tooltip"
                      data-tip="Github"
                    >
                      <Icon icon="mdi:github" className="dark:text-slate-200 text-slate-600" width={24} />
                    </Link>
                  </div>
                </div>
              </ShowFromBottom>
            ))}
          </section>
          <Link
            href={"/works"}
            className="flex justify-center mt-3 text-primary font-medium text-center hover:underline dark:text-primaryBtn"
          >
            See more...
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
