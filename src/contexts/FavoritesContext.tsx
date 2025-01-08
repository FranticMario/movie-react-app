import { createContext, useEffect, useState } from "react";
import { Movie } from "../interfaces/Movie";

interface IFavoritesContext {
    favorites: Movie[]
    setFavorites: React.Dispatch<React.SetStateAction<Movie[]>>
}

export const FavoritesContext = createContext<IFavoritesContext>(null!);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Movie[]>(() => {
        const storedFavorites = localStorage.getItem("favorites");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        if (favorites.length > 0) {
            console.log("Saving favorites to localStorage:", favorites);
            localStorage.setItem("favorites", JSON.stringify(favorites));
        }
    }, [favorites]);

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};