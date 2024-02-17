import React from "react";

const NoData = ({ caption }: { caption: string }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <img src={`/no-data.png`} alt="no-data" className="w-24 sm:w-32" />
      <p className="text-slate-400 font-medium mt-3">{caption}</p>
    </div>
  );
};

export default NoData;
