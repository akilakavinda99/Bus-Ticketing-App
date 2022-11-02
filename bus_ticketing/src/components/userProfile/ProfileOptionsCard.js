/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import userProfileStyles from '../../screens/styles/UserProfileStyles';

const ProfileOptionsCard = props => {
  return (
    <TouchableNativeFeedback style={{borderRadius: 20}}>
      <View style={userProfileStyles.optionCard}>
        <View style={userProfileStyles.optionCardIcon}>
          <Icon name={props.icon} size={20} color="#000" />
        </View>
        <Text style={userProfileStyles.optionCardText}>{props.option}</Text>
        <Icon name="chevron-forward-outline" size={15} />
      </View>
    </TouchableNativeFeedback>
  );
};

export default ProfileOptionsCard;
