import React from 'react';
import {Image, Text, View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Button} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons/icon';
import homeCardStyles from './HomeCardStyles';

const HomeCard = props => {
  return (
    <DropShadow
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      }}>
      <View style={homeCardStyles.mainView}>
        <View style={homeCardStyles.secondaryView}>
          <Image
            style={{
              width: 100,
              height: 100,
            }}
            source={{
              uri: props.image,
            }}
          />
          <Text style={homeCardStyles.text}>{props.text}</Text>
        </View>
      </View>
    </DropShadow>
  );
};

export default HomeCard;
