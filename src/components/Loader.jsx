import { motion } from 'motion/react'
import React from 'react'

const Loader = () => {
  return (
    <motion.div initial={{y:0}} animate={{y:"-100%", transition:{duration:0.8,delay:0.5, ease:'easeInOut'}}} className='bg-secondary w-screen h-screen absolute top-0 z-400 flex justify-center items-center '>
    </motion.div>
  )
}

export default Loader