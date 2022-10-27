import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import registerationTypeStyles from './RegisterationTypeStyles';

export default function RegisterationType(props) {
  const navigation = useNavigation();
  const navigate = () => {
    props.local
      ? navigation.navigate('LocalRegister')
      : navigation.navigate('ForeignRegister');
  };
  return (
    <TouchableOpacity onPress={navigate}>
      <View style={registerationTypeStyles.mainView}>
        <Text style={registerationTypeStyles.userText}>{props.user}</Text>
        <View
          style={{
            paddingLeft: 50,
          }}>
          <Image
            style={{
              width: 100,
              height: 50,
            }}
            resizeMode="contain"
            source={{
              uri: props.Image,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
