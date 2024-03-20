import React, { useContext, useEffect } from 'react'
import { StudentContext } from '../App';
import Child from './Child';
import Aos from 'aos';
import {AnimatePresence, motion} from "framer-motion"

const Context = () =>
{
  useEffect( () =>
  {
    Aos.init()
  }, [] )

  const { name, college, branch } = useContext( StudentContext )
  
  return (
    <>
    <div>Context {name}</div>
      <div>Context { college }</div>
      <div className="animation" data-aos="zoom-in"></div>
      <div className="animation" data-aos="zoom-in"></div>
      <div className="animation" data-aos="zoom-in"></div>  
    
      <div className="animation" data-aos="zoom-out"></div>
      <div className="animation" data-aos="zoom-in"></div>  
      <div className="animation" data-aos="zoom-in"></div>  
       <AnimatePresence>
     
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            
          
          <h1>Framer Motion Animation</h1>
        </motion.div>
    
    </AnimatePresence>
      




      
      <div>Context { branch }</div>
      <Child />

  </>
      )
}

export default Context