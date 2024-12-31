import React from 'react'
import { motion } from 'framer-motion'

function PageHeader({image, title}) {
  return (
    
      <div className=" fixed top-0 bg-black w-full py-8 mb-10">
        <motion.div
          className="flex justify-evenly items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="relative w-[10rem] h-[10rem] rounded-full overflow-hidden flex items-center justify-center bg-[#1f242d]">
            <img
              src={image}
              alt=''
              className="w-full h-full object-cover"
              style={{objectFit:'contain'}}
            />
          </div>

          <div className="text-white text-center px-4">
            <h1 className="text-[5rem] font-semibold">{title}</h1>
          </div>
        </motion.div>
      </div>
    
  )
}

export default PageHeader