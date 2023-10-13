import WorkPositions from "./position";
import Education from "./education";

const positions = [
  {
    name: "Software Engineer II",
    entity: "Optum",
    from: "September 2022",
    to: "Present",
    responsibilities: [
      "Developing an API and data ingestion service to serve healthcare data to the entire org.",
      "The tech stack is mainly comprised of AWS serverless components + Python to do any data processing.",
    ],
  },
  {
    name: "Software Engineer II",
    entity: "Principal Financial Group",
    from: "May 2021",
    to: "Sep 2022",
    responsibilities: [
      "Engineered a robust disaster recovery plan for a critical web application, leveraging AWS CloudFront, CloudWatch, and Route53, minimizing system downtime.",
      "Maintained an AWS Datalake written in the AWS CDK in order to allow various internal data vendors to bring their own data.",
      "Architected an ETL process to enable portfolio managers to easily manage asset allocations.",
    ],
  },
  {
    name: "Software Engineer Intern",
    entity: "Principal Global Investors",
    from: "May 2020",
    to: "May 2021",
    responsibilities: [
      "Collaborated with a full-time engineering team to expand and optimize an AWS S3-based data lake, contributing to key performance improvements.",
      "Developed a chatbot leveraging AWS Lex, streamlining the employee onboarding process by autonomously addressing FAQs, and thereby increasing operational efficiency.",
      "Authored comprehensive unit tests for infrastructure as code in AWS CDK, ensuring robust test coverage and paving the way for seamless production deployments.",
    ],
  },
  {
    name: "Software Engineering Peer Mentor / Teaching Assistant",
    entity: "Iowa State University",
    from: "Aug 2019",
    to: "May 2021",
    responsibilities: [
      "Facilitated hands-on, semester-long course guiding 30 students through project-based learning, fostering autonomy and real-world problem-solving skills.",
      "Pioneered and executed community events like resume clinics and coding bootcamps, enhancing extracurricular learning and boosting student engagement.",
    ],
  },
];

export default function Resume(): React.JSX.Element {
  return (
    <div className="bg-raisin-black flex min-h-screen flex-col items-center">
      <div className="container mx-auto p-4">
        <h1 className="text-papaya-whip text-2xl mb-4 font-bold">Work Experience</h1>
        <WorkPositions positions={positions} />
        <Education />
      </div>
    </div>
  );
}
