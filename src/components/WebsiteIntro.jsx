import memoji from "../assets/images/memoji-intro.jpg";
import { LayoutGroup, motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import PropTypes from "prop-types";

export default function WebsiteIntro({ isLoader, setIsLoader }) {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
      scale: 1,
    },
  };

  return (
    <>
      <motion.section
        className={`min-h-[90vh] mt-10 flex flex-col lg:flex-row gap-3 items-center ${
          isLoader ? "justify-center" : "lg:justify-around justify-center"
        }`}
      >
        <LayoutGroup>
          <motion.div
            layout
            className="flex flex-col gap-1 items-center justify-center min-h-[25vw]"
          >
            <TextAnimation
              when="instant"
              gap="lg:gap-x-3 gap-x-1"
              className="lg:text-[5vw] text-[13vw] font-bold justify-center"
            >
              Hey, I&apos;m Ciprian.
            </TextAnimation>
            <TextAnimation
              when="instant"
              gap="gap-x-1.5"
              wordStyle="3,4,5|text-brand,font-bold"
              className="lg:text-[2.5vw] text-[6.5vw] font-semibold justify-center"
              afterTrigger={() => setIsLoader(false)}
            >
              I&apos;m a Front End Developer.
            </TextAnimation>
          </motion.div>

          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate={!isLoader && "visible"}
            src={memoji}
            className={`lg:h-[25vw] h-[60vw] ${isLoader ? "hidden" : "block"}`}
            alt="intro image"
          />
        </LayoutGroup>
      </motion.section>
    </>
  );
}

WebsiteIntro.propTypes = {
  isLoader: PropTypes.any.isRequired,
  setIsLoader: PropTypes.func.isRequired,
};
