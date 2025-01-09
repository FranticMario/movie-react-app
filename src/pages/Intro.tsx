import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Intro = () => {
  return (
    <div className="intro-page relative ">
      <div className="pt-10 bg-custom-gradient h-[700px] relative overflow-hidden ">
        {/* <img src="./IMGs/intro-view-img.png" alt="Preview image" /> */}
        <motion.img
          initial={{
            opacity: 0,
            x: 200,
            rotate: 20,
          }}
          animate={{
            x: 0,
            opacity: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          className="absolute z-30 right-2"
          src="./IMGs/Description.png"
          alt="Preview image"
        />

        <motion.img
          initial={{
            opacity: 0,
            x: -200,
            rotate: -20,
          }}
          animate={{
            x: 0,
            opacity: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
          }}
          className="absolute z-20 left-2"
          src="./IMGs/Home.png"
          alt="Preview image"
        />
      </div>
      <div className="text-center p-[2.2rem] absolute top-2/3 left-0 w-full mt-5 bg-white z-50">
        <h1 className="text-[28px] font-poppins font-bold pl-6 pr-18 pb-6">
          Enjoy Your Movie <br /> Watch Everywhere
        </h1>
        <h2 className="text-[18px] pb-8 font-poppins font-normal">
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
        </h2>
        <Link to={'/home'}>
          <button className="bg-red-500 text-white font-poppins text-[18px] hover:bg-slate-600 rounded-md px-10 py-3 text-ml">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Intro
