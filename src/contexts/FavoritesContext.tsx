import { createContext } from "react";
import { Movie } from "../interfaces/Movie";

interface IFavoritesContext {
    favorites: Movie[]
    setFavorites: React.Dispatch<React.SetStateAction<Movie[]>>
}

export const FavoritesContext = createContext<IFavoritesContext>(null!)