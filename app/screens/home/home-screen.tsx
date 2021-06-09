import React from 'react';
import {AppList, CategoryForm} from '../../components';
import CategoryItem from '../../components/categoryItem/category-item';
import AppButton from '../../components/common/button/button';
import AppHeader from '../../components/common/header/header';
import AppInput from '../../components/common/input/input';
import {Screen} from '../../components/common/screen/screen';

export const HomeScreen = () => {
  return (
    <Screen>
      <AppHeader />
      <CategoryForm />
      <AppList data={[1, 2, 3, 4, 5]} renderItem={() => <CategoryItem />} />
    </Screen>
  );
};
