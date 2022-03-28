import React, { useCallback, useRef, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Movies } from '../../hooks/useMoviesQuery/types';
import { useNavigation } from '@react-navigation/core';
import { useDebounce } from 'use-debounce/lib';
import { useMoviesQueryByName } from '../../hooks/useMoviesQuery';
import { MovieCard, Paginate, Button, ResponseGif } from '../../components';
import { GIFS } from '../../constants';

import MovieLogo from '../../assets/movieLogo.jpeg';
import * as S from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const [offSet, setOffSet] = useState(1);
  const flalistRef: React.RefObject<FlatList> = useRef(null);
  const [movieName] = useDebounce(inputValue.toLowerCase(), 500);

  const { data, isLoading } = useMoviesQueryByName(
    movieName,
    offSet.toString(),
  );

  const renderMovieCard: ListRenderItem<Movies> = ({ item }) => {
    return <MovieCard item={item} />;
  };

  const handleUpdateOffSet = useCallback(page => {
    setOffSet(page);
  }, []);

  return (
    <S.Container>
      <S.Logo source={MovieLogo} />
      <S.InputContainer>
        <S.InputArea>
          <S.Input
            placeholderTextColor={'#000'}
            value={inputValue}
            onChangeText={value => setInputValue(value)}
            placeholder="Search a Movie..."
          />
        </S.InputArea>
      </S.InputContainer>
      <Button
        title={'Show Favorites'}
        onPress={() => navigation.navigate('FavoriteList')}
      />
      {!data?.Search && !isLoading && (
        <ResponseGif gif={GIFS.notFound.gif} title={GIFS.notFound.title} />
      )}

      {isLoading ? (
        <ResponseGif gif={GIFS.loading.gif} title={GIFS.loading.title} />
      ) : (
        <FlatList
          data={data?.Search}
          renderItem={renderMovieCard}
          showsVerticalScrollIndicator={false}
          ref={flalistRef}
          style={{ marginTop: 20 }}
          ListFooterComponent={() => {
            return data?.Search ? (
              <Paginate
                offSet={offSet}
                flatListRef={flalistRef}
                updateOffSet={handleUpdateOffSet}
              />
            ) : (
              <S.Container />
            );
          }}
        />
      )}
    </S.Container>
  );
};

export default Home;
