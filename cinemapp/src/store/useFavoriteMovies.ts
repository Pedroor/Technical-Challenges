import create from 'zustand';
import {Movies} from '../hooks/useMoviesQuery/types';
import {persist} from 'zustand/middleware';

type State = {
  favoritesMovies: Movies[];
  favoritateMovie: (movie: Movies) => void;
};

export const useFavoriteMovies = create<State>(
  persist(
    (set, get) =>
      ({
        favoritesMovies: [],
        favoritateMovie: (movie: Movies) => {
          const favorites = get().favoritesMovies;
          const shouldFavorite = !favorites.includes(movie.imdbID);

          if (shouldFavorite) {
            useFavoriteMovies.setState({
              favoritesMovies: [...favorites, movie],
            });
          } else {
            useFavoriteMovies.setState({
              favoritesMovies: favorites.filter(
                selectedMovie => selectedMovie.imdbID !== movie.imdbID,
              ),
            });
          }
        },
      } as State),
    {
      name: 'FavoriteMovies',
    },
  ),
);
