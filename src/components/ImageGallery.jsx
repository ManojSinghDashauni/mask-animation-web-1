import React, { useRef } from "react";
import Container from "./Container";
import { motion, useInView } from "motion/react";

const imageVariants = {
  hidden: { y: -900 },
  visible: { y: 0, transition: { duration: 2} },
};


const ImageGallery = () => {
    const element = useRef(null);
    const isInView = useInView(element, { amount: 0.1,margin: "0px 0px -100px 0px", once: true });
  return (
    <Container>
      <div
       className="grid grid-cols-4 gap-4 p-5 bg-primary h-[90vh] ">
        <div className="h-[400px]">
          <div className=" w-full h-full overflow-clip relative">
          <motion.div
            ref={element}
            variants={imageVariants}
            animate={isInView ? "visible"  : "hidden" }
            className="w-full h-full"
          >
            <img
              className="w-full h-full object-cover hover:scale-110 duration-500  transition-all"
              src="https://a.storyblok.com/f/278351/810x1028/290579ae41/dad-grandad-thumb.jpg/m/"
              alt=""
            />
          </motion.div>
          </div>
          <div className="text-center text-secondary p-4">
            <p className="font-NSM text-2xl">Dad + granded</p>
            <p className="text-xs font-NSM">Owner 1957 to 1965</p>
          </div>
        </div>
        <div className="h-[350px]">
          <div className=" w-full h-full overflow-clip relative">
          <motion.div
            ref={element}
            variants={imageVariants}
            animate={isInView ? "visible"  : "hidden" }
            className="w-full h-full"
          >
            {/* <motion.div
              variants={revelVariants}
              initial="hidden"
              animate="visible"
              className="w-full h-full bg-secondary absolute z-20"
            ></motion.div> */}
            <img
              className="w-full h-full object-cover hover:scale-110 duration-500 transition-all"
              src="https://a.storyblok.com/f/278351/810x856/afa89776b5/wayne-thumb.jpg/m/"
              alt=""
            />
          </motion.div>
          </div>
          <div className="text-center text-secondary">
            <p className="font-NSM text-2xl">Dad + granded</p>
            <p className="text-xs font-NSM">Owner 1957 to 1965</p>
          </div>
        </div>
        <div className="h-[300px]">
          <div className=" w-full h-full overflow-clip relative">
          <motion.div
            ref={element}
            variants={imageVariants}
            animate={isInView ? "visible"  : "hidden" }
            className="w-full h-full"
          >
            {/* <motion.div
              variants={revelVariants}
              initial="hidden"
              animate="visible"
              className="w-full h-full bg-secondary absolute z-20"
            ></motion.div> */}
            <img
              className="w-full h-full object-cover hover:scale-110 duration-500 transition-all"
              src="https://a.storyblok.com/f/278351/810x686/41fbaa26df/teresa-thumbnail-small.jpg/m/"
              alt=""
            />
          </motion.div>
          </div>
          <div className="text-center text-secondary">
            <p className="font-NSM text-2xl">Dad + granded</p>
            <p className="text-xs font-NSM">Owner 1957 to 1965</p>
          </div>
        </div>
        <div className="h-[200px]">
          <div className=" w-full h-full overflow-clip relative">
          <motion.div
            ref={element}
            variants={imageVariants}
            animate={isInView ? "visible"  : "hidden" }
            className="w-full h-full"
          >
            {/* <motion.div
              variants={revelVariants}
              initial="hidden"
              animate="visible"
              className="w-full h-full bg-secondary absolute z-20"
            ></motion.div> */}
            <img
              className="w-full h-full object-cover hover:scale-110 duration-500 transition-all"
              src="https://a.storyblok.com/f/278351/810x516/2288c8bf2f/uncle-ken-thumb.jpg/m/"
              alt=""
            />
          </motion.div>
          </div>
          <div className="text-center text-secondary">
            <p className="font-NSM text-2xl">Dad + granded</p>
            <p className="text-xs font-NSM">Owner 1957 to 1965</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ImageGallery;
