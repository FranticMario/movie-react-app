import SwiperCarousel from '../components/Swiper'
import SearchBar from '../components/Searchbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <div className="home-page mt-16 mb-48">
        <h3 className="font-bold text-4xl mb-12 mx-6">Welcome!</h3>
        <div className="searchbar__container mb-[90px] mx-6">
          <SearchBar />
        </div>

        <SwiperCarousel />

        <Footer />
      </div>
    </>
  )
}

export default Home
