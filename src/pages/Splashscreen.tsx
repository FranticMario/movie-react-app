import { motion } from 'framer-motion'

const Splashscreen = () => {
  return (
    <motion.section
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
      }}
      transition={{
        duration: 1,
        ease: 'backInOut',
      }}
      className="bg-myCustomColor-red rounded-[50px] w-[428px] h-[926px] flex flex-col justify-center items-center">
      <h1 className="text-[44px] text-white">.MOV</h1>
    </motion.section>
  )
}

export default Splashscreen
