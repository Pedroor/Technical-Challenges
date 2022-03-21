import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Movies } from '../../hooks/useMoviesQuery/types';
import { useFavoriteMovies } from '../../store/useFavoriteMovies';
import { MovieCard } from '../../components';
import MovieLogo from '../../assets/movieLogo.jpeg';
import * as S from './styles';

const FavoriteList: React.FC = () => {
  const navigation = useNavigation();
  const { favoritesMovies } = useFavoriteMovies();

  const renderMovieCard: ListRenderItem<Movies> = ({ item }) => {
    return <MovieCard item={item} />;
  };
  return (
    <S.Container>
      <S.Logo source={MovieLogo} />
      <Icon
        name="arrow-left"
        size={40}
        color="#000"
        onPress={() => navigation.goBack()}
      />
      <FlatList
        data={favoritesMovies}
        renderItem={renderMovieCard}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 20 }}
      />
    </S.Container>
  );
};

export default FavoriteList;
