import Footer from '../components/Footer'
import MovieList from '../components/MovieList'
import SearchBar from '../components/Searchbar'
import { useLocation } from 'react-router-dom'

const MovieLists = () => {
  const location = useLocation()
  const isPopular = location.pathname === '/popular'

  return (
    <div className="w-full pt-8">
      <div className="px-5">
        <SearchBar />
      </div>
      {isPopular && <h1 className="text-2xl font-bold pb-3 px-5">Popular</h1>}
      <MovieList />
      <Footer />
    </div>
  )
}

export default MovieLists
