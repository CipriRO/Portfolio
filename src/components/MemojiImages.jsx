import { motion, useAnimation, useInView } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

export default function MemojiImages({ memoji }) {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    isInView && controls.start("visible");
  }, [isInView, controls]);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
      scale: 1,
    },
  };

  return (
    <motion.img
      ref={imageRef}
      variants={imageVariants}
      initial="hidden"
      animate={controls}
      src={memoji}
      className="lg:h-[25vw] h-[60vw] block"
      alt="memoji image"
    />
  );
}

MemojiImages.propTypes = {
  memoji: PropTypes.any.isRequired,
};
