import Image from "next/image";
import Link from "next/link";
interface IProject {
  name: string;
  imagePath: string;
  description: string;
  techStack: string[];
  link: string;
}

interface ProjectTileProps {
  project: IProject;
}


export default function Projects(): React.JSX.Element {
  const projects = [
    {
      name: "pacequick.com",
      imagePath: "/pacequick-screen.png",
      description: "A running utility to calcuate paces, quickly.",
      techStack: ["Sveltekit", "AWS"],
      link: ""
    },
    {
      name: "andmarek.com",
      imagePath: "/me_cleaned_up.png",
      description: "This website :)",
      techStack: ["NextJS", "React", "Tailwind", "TypeScript"],
      link: ""
    },
    {
      name: "IntervalTreaps",
      imagePath: "/treap_image.png",
      description: "An interval treap implementation in Java",
      techStack: ["Java", "Data Structures", "Algorithms"],
      link: ""
    },
    {
      name: "sshell",
      imagePath: "/neofetch.png",
      description: "A simple shell written in C.",
      techStack: ["C"],
      link: ""
    },
    {
      name: "VimSweep",
      imagePath: "/vim_sweep.png",
      description: "A vim-inspired minesweeper clone.",
      techStack: ["C++"],
      link: ""
    },
  ];
  return (
    <div className="bg-raisin-black">
    <div className="min-h-screen text-mono container mx-auto p-10 bg-raisin-black">
      <h2 className="text-champagne-pink hover:text-papaya-whip transition-all duration-300 text-3xl font-bold mb-10">projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-van-dyke rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800"
          >
            <Image
              className="w-full h-48 object-cover"
              src={project.imagePath}
              alt={project.name}
              width={"300"}
              height={"300"}
            />
            <div className="p-6 hover:bg-wenge transition-all duration-1000">
              <Link href={project.link} className="hover:text-papaya-whip transition-all duration-300 text-champagne-pink text-xl font-semibold">{project.name}</Link>
              <p className="text-sm mt-2">{project.description}</p>
              <div className="mt-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-chinese-violet hover:bg-plum transition-all duration-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
  );
}
