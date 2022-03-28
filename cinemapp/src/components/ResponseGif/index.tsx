import React from 'react';

import * as S from './styles';

interface ResponseGifProps {
  title: string;
  gif: string;
}

const ResponseGif: React.FC<ResponseGifProps> = ({ title, gif }) => {
  return (
    <S.Container>
      <S.Gif source={gif} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default ResponseGif;
