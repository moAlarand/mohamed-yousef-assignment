import React from 'react';
import {AppList, CategoryForm} from '../../components';
import CategoryItem from '../../components/categoryItem/category-item';
import AppButton from '../../components/common/button/button';
import AppHeader from '../../components/common/header/header';
import AppInput from '../../components/common/input/input';
import {Screen} from '../../components/common/screen/screen';
import {useCategories} from '../../hooks/categories.hook';

export const HomeScreen = () => {
  const {categories, addNewCategory} = useCategories();
  return (
    <Screen>
      <CategoryForm onSubmit={addNewCategory} />
      <AppList
        style={{alignSelf: 'center'}}
        numColumns={2}
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
      />
    </Screen>
  );
};
