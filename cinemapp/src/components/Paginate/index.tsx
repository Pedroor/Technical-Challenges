import React from 'react';

import * as S from './styles';
import { PaginateProps } from './types';

const Paginate: React.FC<PaginateProps> = ({
  flatListRef,
  updateOffSet,
  offSet,
}) => {
  function handleChangePage(isNextPage: boolean) {
    if (isNextPage) {
      updateOffSet(offSet + 1);
      flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
    } else {
      if (offSet === 1) {
        return;
      } else {
        updateOffSet(offSet - 1);
        flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
      }
    }
  }
  return (
    <S.Container>
      <S.ButtonContainer>
        <S.PaginateButton
          onPress={() => handleChangePage(false)}
          disabled={offSet === 1}>
          <S.PaginateLabel>Previous Page</S.PaginateLabel>
        </S.PaginateButton>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <S.PaginateButton onPress={() => handleChangePage(true)}>
          <S.PaginateLabel>Next Page</S.PaginateLabel>
        </S.PaginateButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Paginate;
