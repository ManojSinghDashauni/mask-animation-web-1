import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

const Generation = () => {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.1 });
  return (
    <div className="py-5 bg-primary">
      <div className="overflow-hidden">
        <motion.h2
          ref={ref}
          initial={{ y: "100%" }}
          animate={
            isInView ? { y: 0, transition: { duration: 1 } } : { y: 100 }
          }
          className="text-[15vw] font-extrabold font-serif text-center inline-block leading-[80%]"
        >
          GenerationS
        </motion.h2>
      </div>
      <p className="font-NSM text-3xl font-normal text-secondary text-center p-4">
        The Oxbow
        ...................................................................................................................................
        Café
      </p>
    </div>
  );
};

export default Generation;
