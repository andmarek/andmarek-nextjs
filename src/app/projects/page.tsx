import Image from "next/image";
interface IProject {
    name: string;
    imagePath: string;
    description: string;
    techStack: string[];
  }
  
  interface ProjectTileProps {
    project: IProject;
  }
  
  const ProjectTile: React.FC<ProjectTileProps> = ({ project }) => (
    <div className="relative transition duration-300 blur-sm hover:blur-0">
      <Image
        src={project.imagePath}
        alt={project.name}
        layout="responsive"
        width={1600}
        height={900}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h2 className="text-2xl text-cinereous drop-shadow-lg">{project.name}</h2>
        <div className="flex flex-row space-x-2">
          {project.techStack.map((techItem, index) => (
            <h2 key={index} className="text-papaya-whip bg-chinese-violet drop-shadow-lg rounded-lg m-1">
              {techItem}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
  

export default function Projects(): React.JSX.Element {
  const projects = [
    {
      name: "PaceQuick",
      imagePath: "/pacequick-screen.png",
      description: "A running utility to calcuate paces, quickly.",
      techStack: ["Sveltekit", "AWS"],
      // ...additional info
    },
    {
      name: "This website",
      imagePath: "/me_cleaned_up.png",
      description: "Description for project 1",
      techStack: ["NextJS", "React", "Tailwind", "TypeScript"],
      // ...additional info
    },
    {
      name: "IntervalTreaps",
      imagePath: "/pacequick-screen.png",
      description: "An interval treap implementation in Java",
      techStack: ["Java", "Data Structures", "Algorithms"],
    },
    {
      name: "CyFire",
      imagePath: "/pacequick-screen.png",
      description: "A mobile dating app for Iowa State",
      techStack: ["Java", "Android Studio"],
    },
    {
      name: "sshell",
      imagePath: "/pacequick-screen.png",
      description: "A simple shell written in C",
      techStack: ["C"],
    },
    {
      name: "VimSweep",
      imagePath: "/pacequick-screen.png",
      description: "An dating app ",
      techStack: ["C++"],
    },
    // ...more projects
  ];
  return (
    <div className="bg-raisin-black min-h-screen">
      <div className="container mx-auto p-4 grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectTile key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
