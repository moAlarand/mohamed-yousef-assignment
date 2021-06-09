import React from 'react';
import {AppList, ProductForm} from '../../components';
import AppHeader from '../../components/common/header/header';
import {Screen} from '../../components/common/screen/screen';
import ProductItem from '../../components/productItem/product-item';

export const MoviesScreen = () => {
  return (
    <Screen>
      <AppHeader />
      <ProductForm />
      <AppList data={[1, 2, 3, 4, 5]} renderItem={() => <ProductItem />} />
    </Screen>
  );
};
