import { Link } from 'react-router-dom'
import SwiperCarousel from '../components/Swiper'

const Home = () => {
  return (
    <>
      <Link to="/popular" className="px-4 py-2 rounded-full bg-red-500 text-white">
        see all
      </Link>
    </>
  )
}

export default Home
