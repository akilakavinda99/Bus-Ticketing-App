import React from 'react';
import {Text, View} from 'react-native';
import RegisterationType from '../components/registerationType/RegisterationType';
import style from './styles/RegisterationTypeScreenStyle';

export default function RegisterationTypeScreen() {
  return (
    <View style={style.view}>
      <Text style={style.header}>Welcome to the registeration process </Text>
      <Text style={style.type}>Select user type</Text>
      <RegisterationType
        user="Foreigner"
        Image="https://i.postimg.cc/mgP05Zrr/2762933-200.png"
      />
      <RegisterationType
        user="Sri Lankan"
        Image="https://i.postimg.cc/bJ56bkQH/29077-200.png"
        local="true"
      />
    </View>
  );
}
