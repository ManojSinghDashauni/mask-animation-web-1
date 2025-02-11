import React, { useRef } from "react";
import Container from "./Container";
import { motion, useInView } from "motion/react";

const imageVariants = {
  hidden: { y: -900 },
  visible: { y: 0, transition: { duration: 2} },
};

const revelVariants = {
    hidden:{ y: "-100%", opacity: 1 },
    visible:{
      y: 0,
      opacity: 0,
      transition: { duration: 2, },
    }
};

const ImageGallery = () => {
    const element = useRef(null);
    const isInView = useInView(element, { amount: 0.3,margin: "0px 0px -300px 0px", once: true });
  return (
    <Container>
      <div
       className="grid grid-cols-4 gap-4 p-4 bg-primary h-screen ">
        <div className="h-[500px]">
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
              className="w-full h-full object-cover hover:scale-120 transition-all"
              src="https://images.pexels.com/photos/19144225/pexels-photo-19144225/free-photo-of-abandoned-house-in-countryside-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </motion.div>
          </div>
          <div className="text-center text-secondary">
            <p className="font-NSM text-2xl">Dad + granded</p>
            <p className="text-xs font-NSM">Owner 1957 to 1965</p>
          </div>
        </div>
        <div className="h-[400px]">
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
              className="w-full h-full object-cover hover:scale-120 transition-all"
              src="https://images.pexels.com/photos/19144225/pexels-photo-19144225/free-photo-of-abandoned-house-in-countryside-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              className="w-full h-full object-cover hover:scale-120 transition-all"
              src="https://images.pexels.com/photos/19144225/pexels-photo-19144225/free-photo-of-abandoned-house-in-countryside-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              className="w-full h-full object-cover hover:scale-120 transition-all"
              src="https://images.pexels.com/photos/19144225/pexels-photo-19144225/free-photo-of-abandoned-house-in-countryside-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
