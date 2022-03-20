import React from 'react';
import Search from 'react-native-vector-icons/FontAwesome';
import Trash from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.InputContainer>
      <S.InputArea>
        {/* <Search name="search" size={18} color="#919191" /> */}

        <S.Input
          value={inputValue}
          onChangeText={value => setInputValue(value)}
          placeholder="Busque por um Pokémon..."
          {...rest}
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
  );
};

export default Header;
