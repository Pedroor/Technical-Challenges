import React from 'react';
import { FlatList } from 'react-native';
export interface PaginateProps {
  flatListRef: React.RefObject<FlatList>;
  updateOffSet: (offSet: number) => void;
  offSet: number;
}
