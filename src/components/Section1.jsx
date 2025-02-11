import React, { useRef, useState } from "react";
import Container from "./Container";
import { motion, useInView } from "motion/react";
import Navigation from "./Navigation";


const Section1 = () => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { amount: 0.3,margin: "0px 0px -100px 0px", once: false });
  const elementRef1 = useRef(null);
  const isInView1 = useInView(elementRef1, { amount: 0.3 ,margin: "0px 0px -100px 0px", once: false });
  const elementRef2 = useRef(null);
  const isInView2 = useInView(elementRef2, { amount: 0.3,margin: "0px 0px -100px 0px", once: false });
  const elementRef3 = useRef(null);
  const isInView3 = useInView(elementRef3, { amount: 0.3,margin: "0px 0px -100px 0px", once: false });

  const [show,setShow] = useState(0);
  return (
    <Container>
        <Navigation show={show} />
      <div className="py-40">
        <motion.h1 
        ref={elementRef}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
        whileInView={()=>setShow(1)}
        onViewportLeave={() => setShow(0)}
        viewport={{ once: false, amount: 0.3 }}
         className="font-NSM text-5xl tracking-wider text-center">
          Sticky sweet & sour chicken,
          <br />
          crisp deep-fried shrimp balls, chop suey, poutine,
          <br />
          hamburgers and fries….
        </motion.h1>
        <motion.p
         ref={elementRef1}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={isInView1 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
         className="w-[36%] text-lg mx-auto mt-20 text-justify">
          These iconic mom-and-pop eateries with red vinyl seating, faux-wood
          tables, and symbolic Chinese nostalgia serve up classic Chinese and
          “Canadian” dishes along with a unique mash up of Chinese Canadian
          food.
        </motion.p>
        <motion.p
         ref={elementRef2}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={isInView2 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
         className="w-[36%] text-justify text-lg mx-auto mt-10">
        These little cafés are often the first places that Chinese
          immigrants go when they arrive in Canada, often with just a little
          English, few job skills and big dreams.
        </motion.p>
        <motion.p
         ref={elementRef3}
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={isInView3 ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
         className="font-NSM text-2xl tracking-wider w-[45%] text-center mx-auto mt-20">
          Every town across Canada has a Chinese-Canadian café.<br/> Each has its own
          story.
        </motion.p>
      </div>
    </Container>
  );
};

export default Section1;
