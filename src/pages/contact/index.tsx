import MainLayout from "@/components/MainLayout";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import React, { useState } from "react";
import { toast } from "react-toastify";

type DataMessage = {
  name: string;
  email: string;
  message: string;
};

type EventInput = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;
const defaultData: DataMessage = { name: "", email: "", message: "" };

const ContactPage = () => {
  const [data, setData] = useState<DataMessage>(defaultData);

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "https://642e77348ca0fe3352d049ba.mockapi.io/message";
    let result;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      result = await response.json();
    } catch (error) {
      toast.error("There's an error when send the message");
    }
    if (result !== null) {
      toast.success("Thank you for sending me a message!", { position: "top-right" });
    }
  };

  const handleOnChange = (e: EventInput) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <MainLayout title="Contact me | Fadli">
      <div className="bg-primary bg-opacity-20 md:min-h-44 min-h-52">
        <div className="h-full max-w-[1200px] w-[90%] mx-auto pt-10 pb-8 flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Contact Me</h1>
          <p className="text-secondaryText">Feel free to drop me a line below</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute">
          <path
            fill="#D1DADB"
            fill-opacity="1"
            d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,181.3C672,181,768,139,864,144C960,149,1056,203,1152,197.3C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="max-w-[1200px] w-[90%] mx-auto flex justify-center">
        <div className="flex flex-col md:flex-row justify-center gap-4 relative w-full -top-16 md:-top-10">
          <div className="bg-white p-4 w-full md:w-1/2 lg:w-2/5 border border-slate-200 shadow-md rounded-md">
            <form action="" className="flex flex-col gap-2" onSubmit={handleSendEmail}>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-secondaryText text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-b-2 border-slate-200 text-sm w-4/5 pb-1 focus:outline-none focus:border-primaryBtn"
                  placeholder="Full name"
                  required={true}
                  value={data?.name}
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-secondaryText text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-b-2 border-slate-200 text-sm w-4/5 pb-1 focus:outline-none focus:border-primaryBtn"
                  placeholder="example@email.com"
                  required={true}
                  value={data?.email}
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-secondaryText text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  id=""
                  cols={20}
                  rows={5}
                  className="border-b-2 border-slate-200 text-sm w-4/5 pb-1 focus:outline-none focus:border-primaryBtn"
                  value={data?.message}
                  onChange={handleOnChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-[2px] px-4 bg-primary hover:bg-primaryBtn transition-all rounded-md text-white w-16 text-sm mt-5"
              >
                Send
              </button>
            </form>
          </div>
          <div className="bg-white w-full md:w-1/3 lg:w-1/5 h-fit border border-slate-200 shadow-md rounded-md p-3 flex justify-center flex-col sm:flex-row md:flex-col gap-1 sm:gap-3 md:gap-1">
            <div className="flex items-center gap-1">
              <Icon icon="ic:baseline-email" className="text-primary" />
              <p className="text-sm">fadli.rizaldi12@gmail.com</p>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="carbon:phone-filled" className="text-primary" />
              <p className="text-sm">+62 85693215654</p>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="ri:map-pin-fill" className="text-primary" />
              <p className="text-sm">Tangerang, Banten</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
