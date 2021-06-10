import React from 'react';
import {AppList, CategoryForm} from '../../components';
import CategoryItem from '../../components/categoryItem/category-item';
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
