import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import SimpleTextAnimation from "./SimpleTextAnimation";
import PropTypes from "prop-types";
import ProjectsAnimation from "./projectsAnimation";

export default function Projects({ projects, setViewState }) {
  const imagesVariants = (index, length) => {
    const existMiddleImage = length % 2 !== 0;
    const imageMovementUnit = !existMiddleImage
      ? 28 / length
      : 28 / (length - 1);
    const direction = existMiddleImage
      ? index > (length - 1) / 2
        ? -1
        : index < (length - 1) / 2
        ? 1
        : 0
      : index <= (length - 1) / 2
      ? 1
      : index > (length - 1) / 2 && -1;
    const Xvalue =
      direction === -1
        ? (28 - imageMovementUnit * (length - 1 - index)) * direction
        : direction === 1
        ? imageMovementUnit * (length - index - 1)
        : 0;
    console.log(
      "index: ",
      index,
      "  length: ",
      length,
      "   direction: ",
      direction
    );

    return {
      initial: { x: 0 },
      visible: { x: Xvalue },
    };
  };

  return (
    <motion.section className="min-h-[100vh] flex flex-col justify-center items-center">
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
            whileHover={{ scale: 1.02 }}
            onTap={() => setViewState(index)}
            key={index}
            className="flex flex-col max-w-[24rem] shadow-xl cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center pt-2 gap-3 bg-[#222930] rounded-t-3xl overflow-hidden">
              <SimpleTextAnimation when="inView" from="left">
                <p className="font-bold text-xl">{project.name}</p>
              </SimpleTextAnimation>
              <ProjectsAnimation>
                {project.images.map((image, index) => (
                  <motion.img
                    key={index}
                    variants={imagesVariants(index, project.images.length)}
                    className="w-10/12 rounded-xl absolute top-1"
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
                <p className="max-h-28 overflow-auto">
                  {project.description}
                  {project.link && (
                    <a
                      className="text-brand"
                      target="_blank"
                      rel="noreferrer"
                      href={project.link}
                    >
                      {project.linkName}
                    </a>
                  )}
                </p>
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
};
