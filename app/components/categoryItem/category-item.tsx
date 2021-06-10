import {useNavigation} from '@react-navigation/core';
import * as React from 'react';
import {View, Dimensions} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import {Category} from '../../models/category';
import {moderateVerticalScale} from '../../utils/scaling-utils';
import {AppText} from '../common/text/text';

const {width} = Dimensions.get('window');

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

interface Props {
  category: Category;
}
const CategoryItem = (props: Props) => {
  const {category} = props;
  const {navigate} = useNavigation();

  return (
    <View
      style={{
        width: width / 2 - 30,
        marginHorizontal: 10,
        marginBottom: 20,
      }}>
      <Card
        style={{borderRadius: 5}}
        elevation={2}
        onPress={() => navigate('movies')}>
        <Card.Cover
          style={{borderRadius: 5, height: moderateVerticalScale(200)}}
          source={{uri: category.url}}
        />
      </Card>
      <AppText color="text" text={category.name} style={{marginTop: 3}} />
      <AppText
        numberOfLines={1}
        style={{width: '50%'}}
        color="secondary"
        text={category.description}
      />
    </View>
  );
};

export default CategoryItem;
