import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useDebounce } from 'use-debounce/lib';
import { useMoviesQueryByName } from '../../hooks/useMoviesQuery';
import { MovieCard, Paginate } from '../../components';
import LoadingGif from '../../assets/loading.gif';

import * as S from './styles';
import { FlatList, ListRenderItem } from 'react-native';
import { Movies } from '../../hooks/useMoviesQuery/types';

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [offSet, setOffSet] = useState(1);
  const flalistRef: React.RefObject<FlatList> = useRef(null);
  const [movieName] = useDebounce(inputValue.toLowerCase(), 500);
  const { data, error, isLoading } = useMoviesQueryByName(
    movieName,
    offSet.toString(),
  );

  console.log('DATA', error);
  useEffect(() => {
    console.log('IS LOADING', isLoading);
    console.log('movieName', movieName);
    console.log('inputValue', inputValue);
  }, [isLoading, movieName, inputValue]);

  const renderMovieCard: ListRenderItem<Movies> = ({ item }) => {
    return <MovieCard item={item} />;
  };

  const handleUpdateOffSet = useCallback(page => {
    setOffSet(page);
  }, []);

  return (
    <S.Container>
      <S.InputContainer>
        <S.InputArea>
          {/* <Search name="search" size={18} color="#919191" /> */}

          <S.Input
            value={inputValue}
            onChangeText={value => setInputValue(value)}
            placeholder="Busque por um Filme..."
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
            return (
              <Paginate
                offSet={offSet}
                flatListRef={flalistRef}
                updateOffSet={handleUpdateOffSet}
              />
            );
          }}
        />
      )}
    </S.Container>
  );
};

export default Home;
