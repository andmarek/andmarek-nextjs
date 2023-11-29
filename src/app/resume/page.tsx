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
    ],
  },
  {
    name: "Software Engineer II",
    entity: "Principal Financial Group",
    from: "May 2021",
    to: "Sep 2022",
    responsibilities: [
      "Engineered a DR plan for a web application, using AWS CloudFront, CloudWatch, and Route53.",
      "Maintained an AWS Datalake written in the AWS CDK.",
      "Architected an ETL process to enable portfolio managers to easily manage asset allocations.",
    ],
  },
  {
    name: "Software Engineer Intern",
    entity: "Principal Global Investors",
    from: "May 2020",
    to: "May 2021",
    responsibilities: [
      "Collaborated with a full-time engineering team to expand and optimize an AWS S3-based data lake",
      "Developed a chatbot leveraging AWS Lex to streamline employee onboarding",
      "Authored comprehensive unit tests for infrastructure as code in AWS CDK.",
    ],
  },
  {
    name: "Software Engineering Peer Mentor / Teaching Assistant",
    entity: "Iowa State University",
    from: "Aug 2019",
    to: "May 2021",
    responsibilities: [
      "Taught and guided 30 students in a semester-long project-based course, covering topics like Git, project development, etc.",
      "Pioneered and executed community events like resume clinics and various coding workshops.",
    ],
  },
];

export default function Resume(): React.JSX.Element {
  return (
    <div className="bg-raisin-black flex min-h-screen flex-col items-center font-mono">
      <div className="container mx-auto p-4">
        <h1 className="text-papaya-whip text-2xl mb-4 font-bold">Work Experience</h1>
        <WorkPositions positions={positions} />
        <Education />
      </div>
    </div>
  );
}
