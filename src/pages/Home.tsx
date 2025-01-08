import { Link } from 'react-router-dom'
import SwiperCarousel from '../components/Swiper'
import SearchBar from "../components/Searchbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <div className="home-page mx-6 my-16">
      <h3 className="font-bold text-4xl">Welcome!</h3>
      <SearchBar/>
      <div className="trending-title flex justify-between my-6 item">
        <p className="font-bold text-lg">Trending Movies</p>
      <Link
        to="/popular"
        className="px-4 py-2 text-red-500"
      >
        See all
      </Link>
      <SwiperCarousel/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Home
