import MainLayout from "@/components/MainLayout";
import NoData from "@/components/NoData";
import React from "react";

const BlogPage = () => {
  return (
    <MainLayout title="Blog | Fadli">
      <div className="max-w-[1200px] w-[90%] mx-auto py-10">
        <NoData caption="Sorry, currently there's no article in here" />
      </div>
    </MainLayout>
  );
};

export default BlogPage;
