import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Splashscreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/intro')
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])
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
      className="bg-[#FC2121] w-[428px] h-[926px] flex flex-col justify-center items-center">
      <h1 className="text-white text-center font-montserrat text-[44px] font-extrabold leading-none">.MOV</h1>
    </motion.section>
  )
}

export default Splashscreen
