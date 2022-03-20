import React, { useState } from 'react';

import * as S from './styles';
import { MovieCardProps } from './types';
import { Button } from '../../components';
import { useFavoriteMovies } from '../../store/useFavoriteMovies';

const MovieCard: React.FC<MovieCardProps> = ({ item }) => {
  //   const [isColorStar, setIsColorStar] = useState(false);
  const { favoritesMovies, favoritateMovie } = useFavoriteMovies();

  console.log('FAVORITOS', favoritesMovies);
  return (
    <S.Container>
      <S.TitleContainer>
        <S.TitleName>
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
              title="Remover dos Favoritos"
              onPress={() => favoritateMovie(item)}
            />
          ) : (
            <Button
              isRemoved={false}
              title="Adicionar aos Favoritos"
              onPress={() => favoritateMovie(item)}
            />
          )}
        </S.CardContent>
      </S.Card>
    </S.Container>
  );
};

export default MovieCard;
