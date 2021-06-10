import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {translate} from '../../i18n';
import {Movie} from '../../models/movie';
import {moderateScale, moderateVerticalScale} from '../../utils/scaling-utils';
import AppButton from '../common/button/button';
import {AirbnbRating, Rating} from 'react-native-ratings';
import {color} from '../../theme';

const IMG: ViewStyle = {
  width: moderateScale(100),
  height: moderateVerticalScale(150),
  borderRadius: 5,
};

interface Props {
  movie: Movie;
}
const MovieItem = (props: Props) => {
  const {movie} = props;
  return (
    <Card
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        height: moderateVerticalScale(170),
      }}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Card
          elevation={4}
          style={[
            IMG,
            {
              margin: 5,
            },
          ]}>
          <Card.Cover style={IMG as any} source={{uri: movie.url}} />
        </Card>
        <View style={{justifyContent: 'space-between'}}>
          <Card.Content>
            <Title>{movie.name}</Title>
            <Paragraph numberOfLines={4} style={{width: '25%'}}>
              {movie.description}
            </Paragraph>
          </Card.Content>
          <View style={{flexDirection: 'row', marginLeft: 10}}>
            <AirbnbRating
              count={parseInt(movie.rate)}
              isDisabled
              defaultRating={5}
              size={10}
              showRating={false}
            />
            <Card.Actions>
              <AppButton tx="common.edit" />
              <AppButton color={color.error} tx="common.delete" />
            </Card.Actions>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default MovieItem;
