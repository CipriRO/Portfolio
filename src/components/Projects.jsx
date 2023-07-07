import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import SimpleTextAnimation from "./SimpleTextAnimation";
import PropTypes from "prop-types";
import ProjectsAnimation from "./projectsAnimation";

export default function Projects({ projects, setViewState, githubIcon }) {
  const imagesVariants = (index, length) => {
    const imageCount = length;
    const middleIndex = Math.floor(imageCount / 2);
    const isEven = imageCount % 2 === 0;
    const translation = isEven ? 28 / middleIndex : 28 / (middleIndex + 1);
    let Xvalue = "";
  
    if (index < middleIndex || (isEven && index === middleIndex)) {
      Xvalue = translation * (middleIndex - index);
    } else if (index > middleIndex) {
      Xvalue = -translation * (index - middleIndex);
    }
  
    return {
      initial: { x: 0 },
      visible: { x: Xvalue },
    };
  };
  

  return (
    <motion.section className="min-h-[90vh] flex flex-col justify-center items-center">
      <TextAnimation
        when="inView"
        gap="lg:gap-x-2 gap-x-1"
        className="lg:text-[4vw] text-[10vw] font-bold text-brand self-start"
      >
        Projects
      </TextAnimation>
      <TextAnimation
        when="inView"
        gap="gap-x-[1vw] lg:gap-x-[0.3vw]"
        className="font-semibold text-left text-[3.9vw] lg:text-[1.4vw]"
        wordStyle="1|indent-2"
      >
        Welcome to the showcase of my work! Here, you can explore a compilation
        of projects that highlight my skills and dedication. Take a moment to
        browse through my portfolio and get inspired by the diverse range of
        work I have accomplished.
      </TextAnimation>
      <div className="flex justify-center max-w-3/4 flex-wrap gap-5 p-4 mt-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col max-w-[24rem] shadow-xl relative"
          >
            <div className="flex flex-col justify-center items-center pt-2 gap-3 bg-[#222930] rounded-t-3xl overflow-hidden">
              <div className="flex justify-between items-center w-full px-4">
                <div className="flex gap-2">
                  {project.webLink && (
                    <a href={project.webLink} target="_blank" rel="noreferrer">
                      {webLinkIcon()}
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_black"
                      rel="noreferrer"
                    >
                      {githubIcon()}
                    </a>
                  )}
                </div>

                <SimpleTextAnimation when="inView" from="left">
                  <p className="font-bold text-xl">{project.name}</p>
                </SimpleTextAnimation>

                {project.badge && (
                  <div
                    className={`badge font-semibold z-10 ${project.badge.badgeType}`}
                  >
                    {project.badge.badgeContent}
                  </div>
                )}
              </div>

              <ProjectsAnimation setViewState={setViewState} index={index}>
                {project.images.map((image, index) => (
                  <motion.img
                    key={index}
                    variants={imagesVariants(index, project.images.length)}
                    className="w-10/12 rounded-xl absolute top-1 shadow-[10px_1px_10px_0_rgb(0,0,0,0.15)]"
                    src={image}
                    alt="project image"
                  />
                ))}
              </ProjectsAnimation>
            </div>

            <div className="flex items-center flex-col bg-[#3B4754] p-3 gap-3 font-medium rounded-b-3xl z-10">
              <div className="flex justify-between w-full font-semibold">
                <SimpleTextAnimation when="inView" from="left">
                  Date: {project.date}
                </SimpleTextAnimation>
                <SimpleTextAnimation when="inView" from="right">
                  Duration: {project.duration}
                </SimpleTextAnimation>
              </div>
              <SimpleTextAnimation when="inView" from="left">
                <p className="max-h-28 overflow-auto">{project.description}</p>
              </SimpleTextAnimation>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  setViewState: PropTypes.func.isRequired,
  githubIcon: PropTypes.func.isRequired,
};

function webLinkIcon() {
  return (
    <svg
      width="26"
      height="26"
      fill="none"
      className="hover:stroke-white transition-colors"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 13.996a3.5 3.5 0 0 0 5 0l4-4a3.536 3.536 0 0 0-5-5l-.5.5"></path>
      <path d="M14 10.004a3.502 3.502 0 0 0-5 0l-4 4a3.536 3.536 0 0 0 5 5l.5-.5"></path>
    </svg>
  );
}
