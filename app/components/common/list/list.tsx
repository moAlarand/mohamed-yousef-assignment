import * as React from 'react';
import {FlatList, FlatListProps} from 'react-native';

interface ListProps<T> extends FlatListProps<T> {
  hideIndicator?: boolean;
  fetchMoreLoading?: boolean;
}

export function AppList<T>(props: ListProps<T>) {
  const {hideIndicator = true, ...rest} = props;

  return (
    <FlatList
      showsHorizontalScrollIndicator={!hideIndicator}
      showsVerticalScrollIndicator={!hideIndicator}
      keyExtractor={(item: any, index) =>
        `${typeof item == 'object' && item.id ? item.id : index}`
      }
      scrollEventThrottle={1000}
      {...rest}
    />
  );
}
