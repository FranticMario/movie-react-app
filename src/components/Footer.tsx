
import { NavLink } from 'react-router-dom'
import HomeIcon from '../assets/SVGs/HomeIcon'
import FavoriteIcon from '../assets/SVGs/FavoriteIcon'
import DownloadIcon from '../assets/SVGs/DownloadIcon'
import ProfileIcon from '../assets/SVGs/ProfileIcon'

const Footer = () => {
  return (
    <>
      <footer className=" fixed bottom-0 w-full max-w-[428px] bg-white py-10 mt-10">
        <nav className="flex justify-evenly">
          <NavLink
            to={'/home'}
            className={({ isActive }) =>
              isActive ? 'text-red-500 flex items-center' : 'text-gray-400 flex items-center'
            }>
            {({ isActive }) => (
              <>
                <HomeIcon className={isActive ? 'w-6 h-6 text-red-500' : 'w-6 h-6 text-gray-400'} />
                <span className="ml-2">{isActive ? 'Home' : ''}</span>
              </>
            )}
          </NavLink>
          <NavLink
            to={'/favorites'}
            className={({ isActive }) =>
              isActive ? 'text-red-500 flex items-center' : 'text-gray-400 flex items-center'
            }>
            {({ isActive }) => (
              <>
                <FavoriteIcon className={isActive ? 'w-6 h-6 text-red-500' : 'w-6 h-6 text-gray-400'} />
                <span className="ml-2">{isActive ? 'Favorites' : ''}</span>
              </>
            )}
          </NavLink>
          <NavLink
            to={'/downloads'}
            className={({ isActive }) =>
              isActive ? 'text-red-500 flex items-center' : 'text-gray-400 flex items-center'
            }>
            {({ isActive }) => (
              <>
                <DownloadIcon className={isActive ? 'w-6 h-6 text-red-500' : 'w-6 h-6 text-gray-400'} />
                <span className="ml-2">{isActive ? 'Downloads' : ''}</span>
              </>
            )}
          </NavLink>
          <NavLink
            to={'/profile'}
            className={({ isActive }) =>
              isActive ? 'text-red-500 flex items-center' : 'text-gray-400 flex items-center'
            }>
            {({ isActive }) => (
              <>
                <ProfileIcon className={isActive ? 'w-6 h-6 text-red-500' : 'w-6 h-6 text-gray-400'} />
                <span className="ml-2">{isActive ? 'Profile' : ''}</span>
              </>
            )}
          </NavLink>
        </nav>
      </footer>
    </>
  )
}

export default Footer
