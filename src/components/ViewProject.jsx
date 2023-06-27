import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function ViewProject({ images, setViewState }) {
  return (
    <>
      <motion.div
        onTap={() => setViewState(false)}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.5,
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
        className="bg-[#000000] fixed top-0 left-0 right-0 bottom-0 z-20"
      />
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: .5, ease: 'easeInOut'}}} exit={{opacity: 0,  transition: { duration: .5, ease: 'easeInOut' }}} className="fixed top-1/2 left-1/2 center-transform z-30 h-auto lg:w-[80vw] w-[100vw]">
        <div className="carousel w-full h-full rounded-2xl">
          {images.map((image, index) => (
            <div
              key={index}
              id={`item${index + 1}`}
              className="carousel-item w-full"
            >
              <img src={image} className="w-full" />
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          {images.map((image, index) => (
            <a key={index} href={`#item${index + 1}`} className="btn btn-xs">
              {index + 1}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}

ViewProject.propTypes = {
  images: PropTypes.array.isRequired,
  setViewState: PropTypes.func.isRequired,
};
