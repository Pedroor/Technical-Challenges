import React, { useCallback, useRef, useState } from 'react';

import { useDebounce } from 'use-debounce/lib';
import { useMoviesQueryByName } from '../../hooks/useMoviesQuery';
import { MovieCard, Paginate, Button } from '../../components';
import LoadingGif from '../../assets/loading.gif';
import MovieLogo from '../../assets/movieLogo.jpeg';

import * as S from './styles';
import { FlatList, ListRenderItem } from 'react-native';
import { Movies } from '../../hooks/useMoviesQuery/types';
import { useNavigation } from '@react-navigation/core';

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
          {/* <Search name="search" size={18} color="#919191" /> */}

          <S.Input
            placeholderTextColor={'#000'}
            value={inputValue}
            onChangeText={value => setInputValue(value)}
            placeholder="Search a Movie..."
          />
          {/* <Trash
            name="trash-o"
            onPress={() => setInputValue('')}
            size={24}
            color="#f2231f"
            style={{ paddingRight: 10 }}
          /> */}
        </S.InputArea>
      </S.InputContainer>
      <Button
        title={'Show Favorites'}
        onPress={() => navigation.navigate('FavoriteList')}
      />

      {isLoading ? (
        <S.LoadingContainer>
          <S.Loading source={LoadingGif} />
        </S.LoadingContainer>
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
