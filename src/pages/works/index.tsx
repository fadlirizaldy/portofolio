import React from 'react';
import MainLayout from '@/components/MainLayout';
import { CompanyWorks, Works } from '@/utils/data';
import WorkSection from '@/components/WorkSection';

const WorksPage = () => {
  return (
    <MainLayout title='Works | Fadli'>
      <WorkSection title='Works' data={Works} />
      <WorkSection title='Company Works' data={CompanyWorks} />
    </MainLayout>
  );
};

export default WorksPage;
