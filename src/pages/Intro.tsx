import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <div className="intro-page relative">
      <div className="pt-10 bg-custom-gradient">
        <img src="./IMGs/intro-view-img.png" alt="Preview image" />
      </div>
      <div className="text-center p-12 absolute top-2/3 left-0 w-full z-10 mt-5 bg-white">
        <h1 className="text-2xl font-bold pl-6 pr-18 pb-6">
          Enjoy Your Movie <br /> Watch Everywhere
        </h1>
        <h2 className="text-lg pb-8">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
        <Link to={'/home'}>
          <button className="bg-red-500 text-white hover:bg-slate-600 rounded-md px-8 py-2 text-ml">Get Started</button>
        </Link>
      </div>
    </div>
  )
}

export default Intro
