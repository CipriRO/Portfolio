import { PropTypes } from "prop-types";
import { motion, useAnimation, useInView } from "framer-motion";
import "../App.css";
import { useEffect, useRef } from "react";

export default function TextAnimation(props) {
  const when = props.when;
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    isInView && when === 'inView' && controls.start("visible");
  }, [isInView, controls, when]);


  const text = props.children;
  const words = text.split(" ");
  let styles = [];

  const checkWordStyles = props.wordStyle;

  if (checkWordStyles !== undefined) {
    const wordStyles = props.wordStyle.split(";");
    styles = wordStyles.map((wordStyle) => {
      return {
        styledWords: wordStyle.split("|")[0].split(","),
        wordClasses: wordStyle.split("|")[1].replace(",", " "),
      };
    });
  }

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6 / words.length,
        delayChildren: 0.14 / words.length,
        when: "afterChildren",
      },
    },
  };

  const childs = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 30, damping: 8 },
    },
  };

  function classSystem(index) {
    return styles
      .map((style) =>
        style.styledWords.includes(String(index + 1)) ? style.wordClasses : ""
      )
      .filter((className) => className !== "")
      .join(" ");
  }
  

  return (
    <motion.div
      ref={textRef}
      variants={container}
      initial="hidden"
      animate={when === 'inView' ? controls : 'visible'}
      onAnimationComplete={() => props.afterTrigger && props.afterTrigger()}
      className={`flex flex-wrap overflow-hidden ${
        props.gap + " " + props.className
      }`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childs}
          className={checkWordStyles !== undefined ? classSystem(index) : ""}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

TextAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  gap: PropTypes.string.isRequired,
  wordStyle: PropTypes.string,
  afterTrigger: PropTypes.func,
  when: PropTypes.string.isRequired
};
