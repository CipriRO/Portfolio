import { motion, useAnimation, useInView } from "framer-motion";
import TextAnimation from "./TextAnimation";
import SimpleTextAnimation from "./SimpleTextAnimation";
import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

export default function Projects({projects, setViewState}) {

  const Ref = useRef(null);
  const isInView = useInView(Ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    isInView && controls.start("visible");
  }, [isInView, controls]);

  const containerImages = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, when: "beforeChildren" },
    },
  };

  const imagesVariants = (index) => {
    return {
      initial: { x: 0, y: 0 },
      visible: { x: index === 0 ? -28 : index === 2 && 28, y: 0 },
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
      <div className="flex justify-center max-w-3/4 flex-wrap gap-3 p-4">
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            onTap={() => setViewState(index)}
            key={ index }
            className="flex flex-col max-w-[24rem] shadow-xl"
          >
            <div className="flex flex-col justify-center items-center pt-2 gap-3 bg-[#222930] rounded-t-3xl overflow-hidden">
              <SimpleTextAnimation when="inView" from="left">
                <p className="font-bold text-xl">{ project.name }</p>
              </SimpleTextAnimation>
              <motion.div
                ref={Ref}
                variants={containerImages}
                initial="hidden"
                animate={controls}
                className="relative flex items-center justify-center w-full h-32 shadow-lg cursor-pointer"
              >
                {project.images.map((image, index) => (
                  <motion.img
                    key={index}
                    variants={imagesVariants(index)}
                    className={`w-10/12 rounded-xl absolute top-1 ${
                      index === 1 ? "z-10" : index === 0 && "z-20"
                    }`}
                    src={image}
                    alt="project image"
                  />
                ))}
              </motion.div>
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
                <p className="max-h-24 overflow-auto">
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
  setViewState: PropTypes.func.isRequired
}