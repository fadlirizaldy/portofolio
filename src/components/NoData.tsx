import React from "react";

const NoData = ({ caption }: { caption: string }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <img src={`/no-data.jpg`} alt="no-data" className="w-56 sm:w-96" />
      <p className="text-slate-400 font-medium">{caption}</p>
    </div>
  );
};

export default NoData;
