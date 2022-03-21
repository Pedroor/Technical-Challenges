import React from 'react';

import * as S from './styles';
import { MovieCardProps } from './types';
import { Button } from '../../components';
import { useFavoriteMovies } from '../../store/useFavoriteMovies';

const MovieCard: React.FC<MovieCardProps> = ({ item }) => {
  const { favoritesMovies, favoritateMovie } = useFavoriteMovies();

  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleName
          color={favoritesMovies.find(movie => movie.imdbID === item.imdbID)}>
          {item.Title.length > 60
            ? `${item.Title.substring(0, 60)}...`
            : item.Title}
        </S.TitleName>
      </S.TitleContainer>
      <S.Card key={item.imdbID}>
        <S.ImageCard source={{ uri: `${item.Poster}` }} />
        <S.CardContent>
          {favoritesMovies.find(movie => movie.imdbID === item.imdbID) ? (
            <Button
              isRemoved={true}
              title="Remove to Favorites"
              onPress={() => favoritateMovie(item)}
            />
          ) : (
            <Button
              isRemoved={false}
              title="Add To Favorites"
              onPress={() => favoritateMovie(item)}
            />
          )}
        </S.CardContent>
      </S.Card>
    </S.Container>
  );
};

export default MovieCard;
