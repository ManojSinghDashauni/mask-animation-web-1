import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef } from "react";

const Header = () => {
  const elementH1 = useRef(null);
  const {scrollYProgress} = useScroll({target:elementH1,offset: ["start start", "end end"]
  })
  const scale = useTransform(scrollYProgress,[0,1],[1,20])
  const yMove = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100vh"]); // Moves down
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1,0]); // Moves down
  const move = useTransform(scrollYProgress, [0, 0.15], ["0%", "-2vh"]); // Moves down
  const scaleDown = useTransform(scrollYProgress, [0, .2], ["120%", "100%"]); // Moves down

  return (
    <div className=" relative bg-primary h-auto overflow-clip">
      <motion.h1 style={{ y: yMove}} className="absolute z-50 text-[140px] text-center w-full text-secondary font-FGR font-extrabold uppercase flex justify-center items-center gap-2 leading-none tracking-tight">
        Sons <span className="text-6xl font-bold">&</span> daughters
      </motion.h1>

      <div  ref={elementH1} className=" relative h-[200vh] z-20 overflow-clip">
        <motion.div style={{scale:scale}} className="h-screen">
          <div className="fixed top-0 left-0 window-mask bg-primary z-10 w-full h-screen origin-[50% 40%]"></div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center h-[200vh] z-20 absolute top-0 w-full">
        <motion.p style={{opacity,y:move}} className="font-NSM text-2xl tracking-wider sticky top-[22%]">Every town across Canada has a Chinese-Canadian café</motion.p>
        <motion.p style={{opacity,y:move}} className="font-NSM text-2xl sticky tracking-wider top-[81%]">Each has its own story.</motion.p>
      </div>

      <div className="mt-[-200vh] h-[200vh]">
        <motion.img style={{scale:scaleDown}} className="w-full h-screen sticky top-0 object-cover" src="https://images.pexels.com/photos/8629876/pexels-photo-8629876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="image"/>
      </div>

      <div className="h-screen w-screen">
        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/19144225/pexels-photo-19144225/free-photo-of-abandoned-house-in-countryside-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
      
    </div>
  );
};

export default Header;
