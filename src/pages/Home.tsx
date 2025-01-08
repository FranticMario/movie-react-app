import { Link } from 'react-router-dom'
import SwiperCarousel from '../components/Swiper'
import SearchBar from '../components/Searchbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <div className="home-page mx-6 my-16">
        <h3 className="font-bold text-4xl">Welcome!</h3>
        <SearchBar />

        <SwiperCarousel />

        <Footer />
      </div>
    </>
  )
}

export default Home
