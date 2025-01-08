import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MOV from '../assets/SVGs/MOV'

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
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        ease: 'linear',
      }}
      className="bg-[#FC2121] h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
        }}>
        <MOV />
      </motion.div>
    </motion.section>
  )
}

export default Splashscreen
