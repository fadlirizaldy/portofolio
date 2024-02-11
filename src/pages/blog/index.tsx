import MainLayout from "@/components/MainLayout";
import NoData from "@/components/NoData";
import React from "react";

const BlogPage = () => {
  return (
    <MainLayout>
      <div className="max-w-[1200px] w-[90%] mx-auto">
        <NoData caption="Sorry, currently there's no article in here" />
      </div>
    </MainLayout>
  );
};

export default BlogPage;
