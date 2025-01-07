import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Genre } from "../interfaces/Genre";
import { fetchGenreList } from "../shared/Api";

interface GenreContextType {
  genres: Genre[];
  loading: boolean;
  error: string | null;
}

interface GenreProviderProps {
  children: ReactNode;
}

const GenreContext = createContext<GenreContextType | undefined>(undefined);

export const GenreProvider: React.FC<GenreProviderProps> = ({ children }) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchGenreList();
        setGenres(result);
      } catch (err) {
        setError("Failed to fetch Genres. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return (
    <GenreContext.Provider value={{ genres, loading, error }}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenreContext = () => {
  const context = useContext(GenreContext);
  if (!context) {
    throw new Error("useGenreContext must be used within a GenreProvider");
  }
  return context;
};
