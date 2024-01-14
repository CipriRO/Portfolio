import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "@/app/components/Icons";
import { SignalIcon } from "@heroicons/react/24/solid";

const MyProjects = () => {
  

  return (
    <section className="flex flex-col gap-5 justify-center md:px-10 px-4 py-14 items-center min-h-screen bg-_rich-black text-slate-100 selection:bg-slate-100 selection:text-_rich-black">
      <div className="md:w-8/12 w-full self-start">
        <h1 className="text-5xl font-bold mb-3">My Projects.</h1>
        <p className="indent-2 ml-2">
          I have experience building web applications using the technologies
          listed in the About Me section. Please view my GitHub and the projects
          below to see examples of my work and the types of apps I built. I look
          forward to discussing my experience and interest in web development
          roles where I can contribute meaningfully as part of a talented
          engineering team.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col max-w-[24rem] rounded-2xl bg-[#1d2d31d3] text-_platinum p-3"
          >
            <Image
              src={project.defaultImage}
              alt="Project image"
              className="rounded-xl mb-2 bg-cover shadow-lg"
              style={{ width: "100%" }}
            />
            <div className="flex justify-around items-center mb-2">
              <h1 className="font-bold text-xl">{project.name}</h1>

              <div>
                <p>
                  <span className="font-semibold">Duration:</span>{" "}
                  {project.duration}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {project.date}
                </p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <Link
                href={project.githubLink ? project.githubLink : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  !project.githubLink && "opacity-30 pointer-events-none"
                } flex gap-2 w-full justify-center items-center hover:bg-_dark-blue/10 transition-colors rounded-full py-1 px-2`}
              >
                <Icons.github />
                Github
              </Link>
              <Link
                href={project.website ? project.website : "#"}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className={`${
                  !project.website && "opacity-30 pointer-events-none"
                } flex gap-2 w-full justify-center items-center hover:bg-_dark-blue/10 transition-colors rounded-full py-1 px-2`}
              >
                <SignalIcon className="w-7" />
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
