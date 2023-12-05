import './_jobs.scss';
import { TiArrowForward } from 'react-icons/ti';

export interface Job {
  posteName: string;
  companiesName: string;
  startDate: number;
  endDate: number;
  jobDescription: string;
  tasks: string[];
}

interface JobsProps {
  job: Job;
}

export const Jobs: React.FC<JobsProps> = ({ job }) => {
  return (
    <div className="jobs">
      <h3 className="title">
        {job.posteName}
        <span> @{job.companiesName}</span>
      </h3>
      <p className="paragraphe">
        {job.startDate} - {job.endDate}
      </p>

      <ul className="listJobs">
        {job.tasks.map((task, index) => (
          <li key={index} className="item">
            <span>
              <TiArrowForward />
            </span>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};
