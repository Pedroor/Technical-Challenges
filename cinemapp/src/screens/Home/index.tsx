import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useMoviesQueryByName } from '../../hooks/useMoviesQuery';

import * as S from './styles';

const Home: React.FC = () => {
  const { data, error, status, isError } = useMoviesQueryByName('batman');
  const [inputValue, setInputValue] = useState('');

  console.log('DATA', error);
  return (
    <S.Container>
      <Text>Olá mUNDO</Text>
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
    </S.Container>
  );
};

export default Home;
