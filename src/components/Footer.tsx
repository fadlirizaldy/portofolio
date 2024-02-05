import React from "react";
import { Icon } from "@iconify-icon/react";

const Footer = () => {
  return (
    <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col items-center py-7">
      <div className="flex items-center gap-3">
        <Icon icon="mdi:instagram" className="text-3xl cursor-pointer" />
        <Icon icon="fe:facebook" className="text-3xl cursor-pointer" />
        <Icon icon="mdi:linkedin" className="text-3xl cursor-pointer" />
        <Icon icon="mdi:github" className="text-3xl cursor-pointer" />
      </div>
      <div className="mt-3">
        <p className="text-sm">Copyright © 2024. All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
