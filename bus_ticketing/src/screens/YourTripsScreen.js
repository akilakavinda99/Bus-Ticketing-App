import React, {useEffect} from 'react';
import {useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import API from '../redux/api/apiConnection';

import HomeCard from '../components/homeCard/HomeCard';
import getUserId from '../utils/getUserId';
import {err} from 'react-native-svg/lib/typescript/xml';
import OngoingTripCard from '../components/ongoingTrip/OngoingTripCard';
import NoOngoingTrip from '../components/ongoingTrip/NoOngoingTrip';

const YourTripsScreen = () => {
  const isFocused = useIsFocused();
  const [trips, setTrips] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Setting the userId
  useEffect(() => {
    getUserId().then(res => {
      setUserId(res);
    });
  }, []);
  console.log(userId);
  useEffect(() => {
    const getOngoingTrips = async () => {
      const api = new API();
      try {
        const result = await api.get(`user/ongoingTrip/${userId}`);
        console.log('Ressss', result.data.ongoingTrip);

        setTrips(result.data.ongoingTrip);
        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.log('rer', error);
      }
    };
    if (userId != null) {
      setLoading(true);
      getOngoingTrips();
    }
  }, [userId, isFocused]);

  return (
    <View>
      {loading ? (
        <ActivityIndicator
          size="large"
          style={{
            marginTop: 50,
            marginBottom: 50,
          }}
        />
      ) : trips == null ? (
        <>
          <NoOngoingTrip />
        </>
      ) : (
        <OngoingTripCard
          busNumber={trips.busNumber}
          start={trips.startStation}
        />
      )}
      <View
        style={{
          marginTop: 50,
        }}>
        <HomeCard
          text="    View Previous Trips "
          image="https://i.postimg.cc/vZF8W65Q/457-moving-bus.gif"
        />
      </View>
    </View>
  );
};

export default YourTripsScreen;
