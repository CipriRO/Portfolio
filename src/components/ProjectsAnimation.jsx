import { motion, useAnimation, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function ProjectsAnimation(props) {
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

  return (
    <motion.div
      ref={Ref}
      variants={containerImages}
      initial="hidden"
      animate={controls}
      className="relative flex items-center justify-center w-full h-32 lg:h-36 shadow-lg"
    >
      {props.children}
    </motion.div>
  );
}

ProjectsAnimation.propTypes = {
  children: PropTypes.node.isRequired,
};
