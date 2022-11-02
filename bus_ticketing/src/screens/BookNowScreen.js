import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import BusCard from '../components/busCard/BusCard';
import IntialComponent from '../components/initialComponent/IntialComponent';
import NoResults from '../components/noResults/NoResults';
import endLocationList from '../constants/endLocation.constants';
import startLocationList from '../constants/location.constants';
import API from '../redux/api/apiConnection';
import getTicketPrice from '../utils/getTicketPrice';
import bookNowScreenStyle from './styles/BookNowScreenStyles';

const BookNowScreen = () => {
  const navigation = useNavigation();

  const [showEndDropDown, setShowEndDropDown] = useState(false);
  const [showStartDropDown, setShowStartDropDown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initial, setInitial] = useState(true);
  const [availableBuses, setAvailableBuses] = useState([]);
  const [ticketPrices, setTicketPrices] = useState([]);

  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const api = new API();
  const search = async () => {
    const obj = {
      startLocation: start,
      destination: end,
    };
    setInitial(false);
    setLoading(true);

    const result = await api.post('timetable/getBusByRoute', obj);
    // console.log('this si result', result.data.busTimes);
    setTicketPrices(result.data.ticketPrice);
    setAvailableBuses(result.data.busTimes);

    setLoading(false);
    // await axios
    //   .post(
    //     'https://csse-web-backend.herokuapp.com/timetable/getBusByRoute',
    //     obj,
    //   )
    //   .then(res => {
    //     console.log(res.data.busTimes[0].bus);
    //   })
    //   .catch(err => {
    //     console.log(err.response.data);
    //   });

    // const result = navigation.navigate('Payment');
  };

  return (
    <View style={bookNowScreenStyle.mainView}>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 30,
        }}>
        <DropDown
          dropDownStyle={bookNowScreenStyle.fromDropdown}
          label={'From'}
          mode={'outlined'}
          visible={showEndDropDown}
          showDropDown={() => setShowEndDropDown(true)}
          onDismiss={() => setShowEndDropDown(false)}
          value={start}
          setValue={setStart}
          list={startLocationList}
        />
        <View
          style={{
            marginTop: 20,
          }}
        />
        <DropDown
          label={'To'}
          mode={'outlined'}
          visible={showStartDropDown}
          showDropDown={() => setShowStartDropDown(true)}
          onDismiss={() => setShowStartDropDown(false)}
          value={end}
          setValue={setEnd}
          list={endLocationList}
        />
      </View>

      <Button
        uppercase={false}
        mode="contained"
        style={bookNowScreenStyle.searchBtn}
        color="#0096FF"
        onPress={search}>
        Search For A Bus
      </Button>
      <ScrollView>
        {initial ? (
          <IntialComponent />
        ) : loading ? (
          <View style={bookNowScreenStyle.activityStyle}>
            <ActivityIndicator size="large" />
          </View>
        ) : availableBuses == 0 ? (
          <NoResults />
        ) : (
          <View>
            {availableBuses.map(function (f, i) {
              return (
                <BusCard
                  key={i}
                  arrivalTime={f.arivalTimeOnStart}
                  busType={f.bus.busType}
                  allDetails={f}
                  ticketPrice={getTicketPrice(ticketPrices, f.bus.busType)}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default BookNowScreen;
