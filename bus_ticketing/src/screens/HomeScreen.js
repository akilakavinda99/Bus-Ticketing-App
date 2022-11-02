import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import HomeCard from '../components/homeCard/HomeCard';
import homeScreenStyle from './styles/HomeScreenStyles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const getValue = async () => {
    try {
      // Get the userId from AsyncStorage
      const value = await AsyncStorage.getItem('userId');
      console.log(value);
    } catch (e) {
      console.log(e);
    }
  };
  getValue();
  const navigateToBookNow = () => {
    // Function to navigate to the book now view.
    navigation.navigate('BookNow');
  };
  const navigateToBookLater = () => {
    // Function to navigate to the book later view.
    navigation.navigate('RideNow');
  };

  return (
    <View style={homeScreenStyle.mainView}>
      <Text style={homeScreenStyle.heading}>Welcome To The</Text>
      <Text style={homeScreenStyle.heading2}>Bus Ticketing System</Text>

      <View>
        <ImageBackground
          style={homeScreenStyle.imgStyle}
          imageStyle={homeScreenStyle.image}
          borderRadius={50}
          borderTopLeftRadius={10}
          resizeMode="cover"
          source={{
            uri: 'https://i.postimg.cc/tTpCYL4j/34600-bus-ticket.gif',
          }}
        />
      </View>
      <View style={homeScreenStyle.card1}>
        <TouchableOpacity onPress={navigateToBookLater}>
          <HomeCard
            image="https://i.postimg.cc/13CWB55z/113434-booking.gif"
            text="Ride now"
          />
        </TouchableOpacity>
      </View>
      <View style={homeScreenStyle.card2}>
        <TouchableOpacity onPress={navigateToBookNow}>
          <HomeCard
            image="https://i.postimg.cc/Pfz3Rkt1/61943-time.gif"
            text="Search for a ride"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
