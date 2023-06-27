import { PropTypes } from "prop-types";
import { motion, useAnimation, useInView } from "framer-motion";
import "../App.css";
import { useEffect, useRef } from "react";

export default function SimpleTextAnimation(props) {
  const when = props.when;
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    isInView && when === "inView" && controls.start("visible");
  }, [isInView, controls, when]);

  const container = {
    hidden: { x: props.from === 'left' ? -100 : 100, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 8,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={textRef}
        variants={container}
        initial="hidden"
        animate={when === "inView" ? controls : "visible"}
        onAnimationComplete={() => props.afterTrigger && props.afterTrigger()}
      >
        {props.children}
      </motion.div>
    </div>
  );
}

SimpleTextAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  from: PropTypes.string.isRequired,
  afterTrigger: PropTypes.func,
  when: PropTypes.string.isRequired,
};
