/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {Divider} from 'react-native-paper';
import ProfileOptionsCard from '../components/userProfile/ProfileOptionsCard';
import userProfileStyles from './styles/UserProfileStyles';

const UserProfile = () => {
  const navigation = useNavigation();
  const navigateTO = () => {
    console.log('SAdsd');
    navigation.navigate('QR');
  };
  return (
    <View>
      <View style={{}}>
        <ImageBackground
          style={{
            width: 150,
            height: 150,
            alignSelf: 'center',
            marginTop: 20,
          }}
          imageStyle={{
            borderRadius: 100,
          }}
          resizeMode="cover"
          source={{
            uri: 'https://i.postimg.cc/Y00ch1cQ/9-waving-goodbye-man-1.webp',
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 10,
          }}>
          Akila Kavinda
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            fontStyle: 'italic',
            fontSize: 12,
            marginTop: 10,
          }}>
          akila123@gmail.com
        </Text>
      </View>
      <View style={userProfileStyles.cardView}>
        <ProfileOptionsCard option="Personal Data" icon="person" />
        {/* <View style={{ height: 10 }} /> */}
        <ProfileOptionsCard option="Payment Methods" icon="wallet" />
        <ProfileOptionsCard option="Settings" icon="settings" />
        <ProfileOptionsCard option="Change Password" icon="lock-closed" />
        <ProfileOptionsCard option="Reload Account" icon="cash" />

        <TouchableOpacity onPress={navigateTO}>
          <ProfileOptionsCard
            option="My QR"
            icon="qr-code"
            navigate="QRScreen"
          />
        </TouchableOpacity>
      </View>
      <View style={userProfileStyles.cardView}>
        <ProfileOptionsCard option="Sign Out" icon="log-out" />
      </View>
    </View>
  );
};

export default UserProfile;
