import React from 'react'
import { motion } from 'framer-motion'

function PageHeader({image, title}) {
  return (
    
      <div className=" fixed top-0 bg-black w-full py-8 mb-10 z-40">
        <motion.div
          className="flex flex-col md:flex-row justify-evenly items-center sm:gap-2 md:gap-4 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="relative w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] md:w-[8rem] md:h-[8rem] lg:w-[10rem] lg:h-[10rem] rounded-full overflow-hidden flex items-center justify-center bg-[#1f242d]">
            <img
              src={image}
              alt=''
              className="w-full h-full object-cover"
              style={{objectFit:'contain'}}
            />
          </div>

          <div className="text-white text-center px-4">
            <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-semibold">{title}</h1>
          </div>
        </motion.div>
      </div>
    
  )
}

export default PageHeader