import React, { useState } from 'react';

import * as S from './styles';
import { MovieCardProps } from './types';

const MovieCard: React.FC<MovieCardProps> = ({ item }) => {
  //   const [isColorStar, setIsColorStar] = useState(false);

  console.log('OLA', item);
  return (
    <S.Card key={item.imdbID}>
      <S.TitleContainer>
        <S.TitleName>
          {item.Title.length > 60
            ? `${item.Title.substring(0, 60)}...`
            : item.Title}
        </S.TitleName>
      </S.TitleContainer>
      <S.ImageCard source={{ uri: `${item.Poster}` }} />
      <S.CardContent>
        {/* {favoriteHeroes ? (
            <Entypo
              name="star"
              size={24}
              color={isColorStar ? "#eaf754" : "black"}
              style={{ padding: s(8) }}
              onPress={() => handleAddHeroToFavoriteList(item)}
            />
          ) : (
            <Entypo
              name="star"
              size={24}
              color={"black"}
              style={{ padding: s(8) }}
              onPress={() => handleAddHeroToFavoriteList(item)}
            />
          )} */}
      </S.CardContent>
    </S.Card>
  );
};

export default MovieCard;
