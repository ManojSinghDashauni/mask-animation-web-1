import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const RevelAnimation = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const inInView = useInView(ref, { once: false });

  const mainControls = useAnimation();
  const sideControls = useAnimation();

  useEffect(() => {
    if (inInView) {
      mainControls.start("visible");
      sideControls.start("visible");
    }
    console.log(inInView);
  }, [inInView]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ width,}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { top:0,opacity:1 },
          visible: { top:"100%",opacity:0 },
        }}
        initial="hidden"
        animate={sideControls}
        transition={{ duration: 1, ease: "easeIn" }}
        className="absolute top-1 bottom-1 left-0 right-0 z-20 bg-secondary"
      >
      </motion.div>
    </div>
  );
};

export default RevelAnimation;
