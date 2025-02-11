import React, { useRef } from 'react'
import Container from './Container'
import { motion } from 'motion/react'

const Navigation = ({show}) => {
  return (
    <Container>
        <motion.nav
        initial={{ opacity: 0, y: "-100%" } }
        animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}  
        className='flex fixed top-5 z-200 w-screen justify-center list-none gap-5 text-base font-normal uppercase px-10'>
            <li className='font-bold mr-auto'>sons & daughters</li>
            <li>our trip</li>
            <li>about</li>
            <li>history</li>
            <li>menu</li>
        </motion.nav>
    </Container>
  )
}

export default Navigation