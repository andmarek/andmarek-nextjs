import WorkPositions from "./position";

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

function WorkExperience(props: { from: string, to: string, responsibilities: string[], position: string, company: string }) {
  return (
    <div className="flex flex-col space-y-3 max-w-4xl px-5">
      <div className="flex flex-col justify-between">
        <div className="flex flex-row space-x-2 justify-between">
          <h2 className="text-papaya-whip text-2xl"> {props.company} </h2>
          <p className="text-papaya-whip text-2xl order-last"> {props.position} </p>
        </div>
        <p className="text-cinereous last"> {props.from} - {props.to} </p>
      </div>
      <ul className="space-y-2 pl-5">
        {
          props.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-champagne-pink text-xl list-disc"> {responsibility} </li>
          ))
        }
      </ul>
    </div>
  )
}
export function Education(): React.JSX.Element {
  return (
    <div className="pt-3">
      <h1 className="text-papaya-whip text-3xl"> Education </h1>
      <div className="flex flex-col">
        <div>
        <p> Iowa State University </p>
        <p> Bachelor's of Science </p>
        <p> Software Engineering </p>
        <p> 2017 - 2021 </p>
      </div>
    </div>
    </div>
  )
}

export default function Resume(): React.JSX.Element {
  return (
    <div className="bg-raisin-black flex min-h-screen flex-col items-center font-sans">
      <h1 className="text-papaya-whip text-3xl"> Work Experience </h1>
      <div className="flex flex-col space-y-10">
        <WorkExperience from={"September 2022"} to={"Present"} responsibilities={["Developing an API and data ingestion service to store billions of healthcare transactions and allow them to be searched in sub-second latency."]} position={"Software Engineer II"} company={"Optum"} />
        <WorkExperience
          from={"May 2021"} to={"September 2022"}
          responsibilities={
            [
              "Engineered a robust disaster recovery plan for a critical web application, leveraging AWS CloudFront, CloudWatch, and Route53, minimizing system downtime.",
              "Maintained an AWS Datalake written in the AWS CDK in order to allow various internal data vendors to bring their own data",
              "Architected an ETL process to enable portfolio managers to easily manage asset allocations"
            ]
          }
          position={"Software Engineer II"}
          company={"Principal Financial Group"} />
        <WorkExperience
          from={"May 2020"} to={"May 2021"}
          responsibilities={
            [
              "Collaborated with a full-time engineering team to expand and optimize an AWS S3-based data lake, contributing to key performance improvements.",
              "Developed a chatbot leveraging AWS Lex, streamlining the employee onboarding process by autonomously addressing FAQs, and thereby increasing operational efficiency.",
              "Authored comprehensive unit tests for infrastructure as code in AWS CDK, ensuring robust test coverage and paving the way for seamless production deployments."
            ]
          }
          position={"Software Engineer Intern"}
          company={"Principal Global Investors"} />
      </div>
      <Education />
    </div>
  )
}

