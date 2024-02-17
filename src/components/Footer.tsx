import React from "react";
import { Icon } from "@iconify-icon/react";

const Footer = () => {
  return (
    <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col items-center py-7">
      <div className="flex items-center gap-3">
        <Icon
          icon="mdi:instagram"
          className="text-3xl cursor-pointer"
          onClick={() => window.open("https://www.instagram.com/fadli.rizaldy/")}
        />
        <Icon
          icon="fe:facebook"
          className="text-3xl cursor-pointer"
          onClick={() => window.open("https://www.facebook.com/fadlirizaldy04")}
        />
        <Icon
          icon="mdi:linkedin"
          className="text-3xl cursor-pointer"
          onClick={() => window.open("https://www.linkedin.com/in/fadli-rizaldy/")}
        />
        <Icon icon="mdi:github" className="text-3xl cursor-pointer" onClick={() => window.open("https://github.com/fadlirizaldy")} />
      </div>
      <div className="mt-3">
        <p className="text-sm">Copyright © 2024. All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
