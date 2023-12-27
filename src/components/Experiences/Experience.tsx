'use client';
import { useState } from 'react';
import { SectionTitle } from '../Layout/SectionTitle';
import { Jobs, Job } from './Jobs';
import './_experience.scss';
import { motion } from 'framer-motion';
import useAnimate from '@/src/hooks/useAnimate';
import { usePathname } from 'next/navigation';
export const Experience = () => {
  const pathname = usePathname();
  const { ref, mainControls } = useAnimate();
  let jobsData;
  if (pathname.includes('/en')) {
    jobsData = require('@/public/assets/jobsEN.json');
  } else {
    jobsData = require('@/public/assets/jobsFR.json');
  }

  const data: Job[] = jobsData.jobs;

  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  const [selectedJob, setSelectedJob] = useState(data[0]);
  const handleJobs = (index: number, job: Job) => {
    // Si l'élément cliqué est déjà sélectionné, désélectionnez-le

    // Sinon, sélectionnez le nouvel élément
    setSelectedJobIndex(index);
    setSelectedJob(job);
  };

  return (
    <motion.section
      className="section-experience"
      id="experience"
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <SectionTitle title="Experiences" titleNumber="0.2."></SectionTitle>
      <div className="companies">
        <ul className="list">
          {data.map((job, index) => (
            <li
              className={`item ${
                selectedJobIndex === index ? 'item-active' : ''
              }`}
              key={index}
              onClick={() => handleJobs(index, job)}
            >
              {job.companiesName}
            </li>
          ))}
        </ul>
        {selectedJobIndex !== null && <Jobs job={selectedJob} />}
      </div>
    </motion.section>
  );
};
