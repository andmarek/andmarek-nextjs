import Image from "next/image";

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
          <div
            key={index}
            className="relative hover:bg-opacity-50 hover:bg-black transition duration-300"
          >
            <Image
              src={project.imagePath}
              alt={project.name}
              layout="responsive"
              width={1600}
              height={900}
              className="blur-sm hover:invert"
              // ...other img props
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-2xl text-cinereous drop-shadow-lg">{project.name}</h2>
              {project.techStack.map((techItem, index) => (
                <div className="flex flex-row"> <p className="text-chinese-violet drop-shadow-lg border rounded-lg"> {techItem} </p> </div> 
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
